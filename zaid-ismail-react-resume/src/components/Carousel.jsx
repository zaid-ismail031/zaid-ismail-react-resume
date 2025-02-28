import { useState } from "react";

const projects = [
  {
    title: "OpenGL 3D Graphics Engine (C++)",
    image: "./images/opengl.png",
    description: [
      "Developed a simple 3D graphics engine written in C++, using the Windows API and OpenGL.",
      "Implemented camera movement, textures, and shaders, with lighting and normal mapping.",
      "Demo: https://youtu.be/mH60JFoW42E",
    ],
  },
  {
    title: "Stock Trading Web App (Django)",
    image: "./images/stocktrading.png",
    description: [
      "Developed a stock trading web application using Django, a Python-based full-stack framework.",
      "Users can demo-trade with real-life stocks.",
      "Users can view charts showing up-to-date share prices of popular stocks.",
      "An RSS feed displays relevant news to aid trading strategies.",
      "Demo: https://youtu.be/bilbHaLgHj4",
    ],
  },
  {
    title: "Car Rental Web App (NodeJS)",
    image: "./images/carrental.png",
    description: [
      "Developed a back-end and API for a car rental app using MongoDB, Express, NodeJS, and vanilla JavaScript.",
      "MongoDB is used alongside Mongoose for database design and management.",
      "Demo: https://youtu.be/gOxp-XhPD_g",
    ],
  },
  {
    title: "NES Game (6502 Assembly)",
    image: "./images/nesgame.png",
    description: [
      "Developed a simple game for the NES using Assembly language for the MOS 6502 CPU.",
      "Displays a Mario sprite on screen, which can be moved with a running animation.",
      "Demo: https://youtu.be/IOlqHrtu8eg",
    ],
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="w-full max-w-2xl mx-auto text-center p-8 min-h-screen bg-black text-green-400 font-mono">
      <div className="flex justify-between mt-6">
        <button
          onClick={prevProject}
          className="px-4 py-2 border border-green-400 hover:bg-green-400 hover:text-black transition"
        >
          ◀ Previous
        </button>
        <button
          onClick={nextProject}
          className="px-4 py-2 border border-green-400 hover:bg-green-400 hover:text-black transition"
        >
          Next ▶
        </button>
      </div>
      {/* Project Counter */}
      <div className="text-green-300 text-sm mb-2">
        {currentIndex + 1} of {projects.length}
      </div>

      <h2 className="text-3xl font-bold mb-4">{projects[currentIndex].title}</h2>

      <div className="flex justify-center mb-4">
        <img
          src={projects[currentIndex].image}
          alt={projects[currentIndex].title}
          className="w-80 h-48 object-cover border border-green-400"
        />
      </div>

      <ul className="text-lg text-left mx-auto w-3/4 space-y-2">
        {projects[currentIndex].description.map((point, index) => (
          <li key={index} className="flex items-start">
            <span className="text-green-300 mr-2">▶</span>
            {point.startsWith("Demo:") ? (
              <a
                href={point.replace("Demo: ", "")}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-300 underline"
              >
                {point}
              </a>
            ) : (
              point
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Carousel;