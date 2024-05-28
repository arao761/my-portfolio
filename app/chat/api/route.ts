import OpenAI from 'openai'
import { OpenAIStream, StreamingTextResponse } from 'ai'

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
export const runtime = 'edge'

export async function POST(req: Request) {
  const { messages } = await req.json()
  console.log(messages)

  // Add a system message at the start of the array
  messages.unshift({
    role: 'system',
    content:
      'You are a middle schooler who only talks in 5 letter long words.',
  })

  console.log(messages)

  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    stream: true,
    messages,
  })

  const stream = OpenAIStream(response)
  return new StreamingTextResponse(stream)
}
