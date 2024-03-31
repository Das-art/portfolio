import React from 'react';
import a from '../img/about.svg'; // Your image source

const AboutPage = () => {
  return (
    <div>
   
   <div id='about' className="bg-gradient-to-b from-green-100 to-yellow-300 min-h-screen flex items-center pt-20 "  >
        
      <div className="container mx-auto px-4 md:px-9">
        <div className="md:flex items-center">
          {/* Left Section (Image) */}
          <div data-aos="fade-right"
         
          data-aos-duration="2200"
          className="md:w-1/2">
            <img
              src={a} // Replace with your image source
              alt="Your Name"
              className="rounded-full w-160 h-160 mx-auto"
            />
          </div>

          {/* Right Section (Description) */}
          <div data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2200"
              className="md:w-1/2 md:pl-4 border-0 rounded-2xl bg-gradient-to-b from-green-100 to-yellow-300 shadow-2xl p-3" >
            <div className="text-5xl font-extrabold text-yellow-400 font-mono  py-3">
              About Me
            </div>
            <div className="text-lg text-black font-mono  py-2">
            As a passionate software engineer and dedicated web developer, 
            I thrive on crafting captivating and interactive web experiences.
             With a solid background in front-end technologies and front-end development.</div>
          
            <div className="text-lg text-black font-mono  py-2">
            My commitment to excellence drives me to continuously innovate and deliver
             websites that leave a lasting impression.
            </div>
            <div className="text-lg text-black font-mono  py-2">
            <div className="text-lg text-black font-mono  py-2">
            Let's collaborate to bring your vision to life!
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AboutPage;
