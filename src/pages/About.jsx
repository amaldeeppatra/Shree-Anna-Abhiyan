import React from 'react';
import MilletMission from '../components/about/MilletMission';
import TeamSection from '../components/about/TeamSection';

const About = () => {
  return (
    <div className="bg-background min-h-screen">
       <style>{`
        .bg-background { background-color: var(--background-color); }
        .bg-accent { background-color: var(--accent-color); }
        .text-primary { color: var(--primary-color); }
        .text-tertiary { color: var(--tertiary-color); }
        .border-secondary { border-color: var(--secondary-color); }
      `}</style>
      
      <main>
        <MilletMission />
        <TeamSection />
      </main>
    </div>
  );
};

export default About;