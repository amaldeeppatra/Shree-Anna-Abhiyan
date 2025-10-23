import React from 'react';
import { Linkedin, Github } from 'lucide-react';

const DeveloperCard = ({ name, role, imageUrl, linkedinUrl, githubUrl }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
      <img
        src={imageUrl}
        alt={`Profile of ${name}`}
        className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-secondary"
      />
      <h3 className="text-xl font-bold text-tertiary mb-1">{name}</h3>
      <p className="text-primary font-semibold mb-4">{role}</p>
      <div className="flex justify-center space-x-4">
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-blue-700 transition-colors"
          aria-label={`${name}'s LinkedIn Profile`}
        >
          <Linkedin size={24} />
        </a>
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-gray-900 transition-colors"
          aria-label={`${name}'s GitHub Profile`}
        >
          <Github size={24} />
        </a>
      </div>
    </div>
  );
};

export default DeveloperCard;