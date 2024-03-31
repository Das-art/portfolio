import React from 'react';
import { skillData } from '../data/skillsData';

const SkillPage = () => {
  return (
    <div id='skill' className="bg-gradient-to-b from-yellow-300 to-green-100 min-h-screen flex flex-col items-center pt-32 p-8">
      <h1 className="text-4xl font-extrabold text-white mb-6 md:mb-8" data-aos="zoom-in-up">My Skills</h1>
      <h3 className="text-2xl font-extrabold text-white font-mono mb-6 md:mb-8" data-aos="zoom-in-up">Here are some of the skills I've developed:</h3>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5">
        {skillData.map((skill) => (
          <div
            data-aos="zoom-out"
            data-aos-duration="1200"
            key={skill.id}
            className="bg-white rounded-lg p-4 flex flex-col items-center justify-center shadow-lg transform transition-transform hover:translate-x-2 hover:-translate-y-2 my-hover-effect"
          >
            <img src={skill.icon} alt={skill.title} className="w-16 h-16 mb-2" />
            <div className="text-xl font-semibold">{skill.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillPage;
