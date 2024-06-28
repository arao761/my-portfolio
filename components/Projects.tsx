import React from 'react';

type Project = {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
};

const projects: Project[] = [
  {
    title: "Ho-Ho-Hacks",
    description: "Use Java libaries to create a battle royale game that mimics Yoho-Ho-Ho. I worked to create the game logic and the UI.",
    tags: ["Java", "Graphics", "Animation"],
    imageUrl: "https://d112y698adiu2z.cloudfront.net/photos/production/challenge_photos/002/482/625/datas/full_width.png"
  },
  {
    title: "Computational Modeling: Predicting the Optimal Launch Angle for a Parabolic Projectile",
    description: "Created a computational model in Java to predict the optimal launch angle for a parabolic projectile. Used kinematics and physics principles to create the model.",
    tags: ["Java", "Kinematics", "Computational Modeling", "Physics"],
    imageUrl: "https://uploads-cdn.omnicalculator.com/images/projectile-motion/Ideal_projectile_motion_for_different_angles_res.png?width=425&enlarge=0&format=jpeg"
  },

  {
    title: "3D Printed Robotic Finger",
    description: "Designed and 3D printed a robotic finger that can be controlled using a servo motor. Used Arduino to control the servo motor. Aditionally, I used a potentiometer to control the angle of the finger. Finally, I made the finger autonomous by training the finger with a 3D convoluted neural network.", 
    tags: ["Python", "Machine Learning", "TensorFlow", "Keras", "Neural Networks" , "Arduino", "3D Printing"],
    imageUrl: "https://i1.wp.com/dangercreations.com/wp-content/uploads/2017/08/IMG_5857.jpg?fit=1200%2C900&ssl=1"
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
            <span key={index} className="bg-gray-600 text-gray-100 text-sm font-semibold mr-2 mb-2 py-1 px-3 rounded-full">
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
