import React from 'react';

type Project = {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
};

const projects: Project[] = [
  {
    title: "GeoSnap",
    description: "Trained a Yolov5 Computer Vision model and developed UI for a mobile and desktop app that identifies wildlife in wildlife footage.",
    tags: ["React Native", "Yolov5", "Node.js"],
    imageUrl: "https://source.unsplash.com/random/800x600?leopard"
  },
  {
    title: "Nivaro",
    description: "Created a curriculum teaching its 700+ students how to create OpenAI-powered chatbots. I also worked on the website and optimized the chatbot.",
    tags: ["React", "Next.js", "OpenAI"],
    imageUrl: "https://source.unsplash.com/random/800x600?education"
  },
];

const ProjectCard: React.FC<Project> = ({ title, description, tags, imageUrl }) => {
  return (
    <div className="bg-gradient-to-r from-gray-600 to-gray-800 text-white rounded-lg shadow-xl flex flex-col md:flex-row overflow-hidden my-4">
      <div className="flex-shrink-0">
        <img className="object-cover h-full w-full md:w-64" src={imageUrl} alt={title} />
      </div>
      <div className="p-6 flex flex-col">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap">
          {tags.map((tag, index) => (
            <span key={index} className="bg-gray-700 text-gray-100 text-sm font-semibold mr-2 mb-2 py-1 px-3 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-12 bg-gradient-to-r from-gray-600 to-gray-900 w-full">
      <div className="container mx-auto px-5">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">My Projects</h2>
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
