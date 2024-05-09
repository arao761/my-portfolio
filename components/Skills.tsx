import React from 'react';

type SkillTagProps = {
  skill: string;
};

const SkillTag: React.FC<SkillTagProps> = ({ skill }) => (
  <div className="bg-gray-800 text-white py-2 px-4 rounded-md shadow-md m-2 hover:bg-gray-700 cursor-default transition duration-300">
    {skill}
  </div>
);

const skills: string[] = [
  'Python', 'JavaScript', 'React', 'React Native', 'Node.js', 'HTML', 'CSS',
  'Next.js', 'Git', 'Tailwind', 'TensorFlow', 'OpenAI',
  'C++', 'Java'
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="bg-gradient-to-r from-gray-600 to-gray-900 text-white shadow-xl p-6 w-full">
      <div className="container mx-auto px-5">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Skills</h2>
        <div className="flex flex-wrap justify-center items-center">
          {skills.map((skill, index) => (
            <SkillTag key={index} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
