import React from 'react';
import educationImage from '../img/education.svg'; // Your image source
import { Educations } from '../data/educationData'; // Your education data file

const EducationPage = () => {
  return (
    <div id='edu' className="bg-gradient-to-b from-green-100 to-yellow-300 min-h-screen flex items-center py-20">
      <div className="container mx-auto px-4 md:px-9">
        <div className="md:flex items-center">
          {/* Left Section (Description) */}
          <div  data-aos="fade-right" className="md:w-1/2 md:p-4 bg-gradient-to-b from-green-100 to-yellow-300  border-0 rounded-2xl  shadow-2xl p-5">
            <div className="text-5xl font-extrabold text-yellow-400 font-mono py-7">Education</div>
            {Educations.map((education) => (
              <div 
              data-aos="fade-right"
              data-aos-offset="100"
              data-aos-easing="ease-in-sine"
                key={education.id}
                className="mb-6 p-4 rounded-md bg-white rounded-lg p-4 shadow-lg"
              >
                <h3 className="text-2xl font-mono mb-2 text-black">{education.course}</h3>
                <p className="text-gray-600 text-sm font-mono">
                  {education.college}
                </p>
                <p className="text-gray-600 text-sm">
                  {education.startYear} - {education.endYear}
                </p>
                <p className="text-gray-900 text-1xl  font-mono">
                  {education.mark}
                </p>
                <p className="text-gray-600 text-2sm">
                  {education.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Right Section (Image) */}
          <div data-aos="fade-down" className="md:w-1/2 hidden md:block">
            <img
              src={educationImage} // Replace with your image source
              alt="Your Name"
              className="rounded-full w-160 h-160 mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationPage;
