import React from 'react';
import DeveloperCard from './DeveloperCard';
import amaldeeppatra from '../../assets/team/amaldeeppatra.png'
import sovanpattanaik from '../../assets/team/sovanpattanaik.png'
import anuragchaturbedy from '../../assets/team/anuragchaturbedy.jpeg'
import aishikghosh from '../../assets/team/aishikghosh.jpeg'
import somyapati from '../../assets/team/somyapati.jpg'
import adrijadas from '../../assets/team/adrijadas.jpeg'

// You can replace this with your actual team data
const developers = [
  {
    name: 'Sovan Pattanaik',
    role: 'UI/UX Designer & AI Engineer',
    imageUrl: sovanpattanaik,
    linkedinUrl: '#',
    githubUrl: '#',
  },
  {
    name: 'Amaldeep Patra',
    role: 'Full Stack Engineer',
    imageUrl: amaldeeppatra,
    linkedinUrl: 'https://www.linkedin.com/in/amaldeep-patra-246bb8247',
    githubUrl: 'https://www.github.com/amaldeeppatra',
  },
  {
    name: 'Anurag Chaturbedy',
    role: 'Frontend Engineer',
    imageUrl: anuragchaturbedy,
    linkedinUrl: '#',
    githubUrl: '#',
  },
  {
    name: 'Aishik Ghosh',
    role: 'Backend Engineer',
    imageUrl: aishikghosh,
    linkedinUrl: '#',
    githubUrl: '#',
  },
  {
    name: 'Somya S. Pati',
    role: 'Frontend Engineer',
    imageUrl: somyapati,
    linkedinUrl: 'https://www.linkedin.com/in/somya-s-pati7d7iya/',
    githubUrl: 'https://github.com/SomyaSagarika',
  },
  {
    name: 'Adrija Das',
    role: 'UI/UX Designer',
    imageUrl: adrijadas,
    linkedinUrl: 'https://www.linkedin.com/in/adrija-das-694972266',
    githubUrl: 'https://github.com/Adrija-039',
  },
];

const TeamSection = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">Meet Our Team</h2>
          <p className="mt-4 text-lg text-gray-600">The passionate developers behind Shakti Saathi</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {developers.map((dev) => (
            <DeveloperCard
              key={dev.name}
              name={dev.name}
              role={dev.role}
              imageUrl={dev.imageUrl}
              linkedinUrl={dev.linkedinUrl}
              githubUrl={dev.githubUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;