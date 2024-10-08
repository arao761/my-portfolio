
import Awards from '@/components/Awards';
import Experience from '@/components/Experience';
import Homepage from '@/components/Homepage';
import Skills from '@/components/Skills';
import Footer from '@/components/footer';
import About from '@/components/About';
import Spacing from '@/components/Spacing';
import Projects from '@/components/Projects';
//import { ThemeProvider } from "@/components/Themeprovider";
//import { ThemeProvider as NextThemeProvider } from "next-themes";
//import ThemeToggle from "@/components/Themetoggle";
import { Analytics } from "@vercel/analytics/react"

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      
        <Homepage />
        <About />
        <Experience />
        <Projects />
        <Awards />
        <Skills />
        <Spacing />
        <Footer />
        <Analytics />
    </main>
  );
}