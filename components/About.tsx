import React from 'react';
import "@/app/globals.css";

const About: React.FC = () => {
    return (
        <section id="about" className="py-12 bg-gradient-to-r from-gray-600 to-gray-900 w-full">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-8 text-white">About Me</h2>
                <div className="text-white space-y-6">
                    <p className="text-lg">
                        Welcome to my portfolio! I’m passionate about software development and love to create innovative solutions.
                    </p>
                    <p className="text-lg">
                        I have expertise in modern JavaScript frameworks and a strong background in UI/UX design. I'm also proficient in backend technologies and enjoy working in collaborative environments.
                    </p>
                    <p className="text-lg">
                        In my free time, I enjoy exploring new technologies and contributing to open-source projects. I thrive in team settings and believe in continuous learning and improvement.
                    </p>
                    <p className="text-lg">
                        Thank you for visiting my portfolio. I hope you enjoy exploring my work!
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About;
