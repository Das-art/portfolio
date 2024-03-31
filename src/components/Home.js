import React from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io';
import { FiDownload } from 'react-icons/fi';
import { TypeAnimation } from 'react-type-animation';
import a from '../img/my.jpg';
import resumePDF from '../data/Nihal_Das_P.pdf';

const HomePage = () => {
  return (
    <div id='home' className="bg-gradient-to-r from-yellow-400 to-green-300 min-h-screen flex items-center">
      <div className="container mx-auto px-2">
        <div className="md:flex items-center">
          {/* Right Section (Image) */}
          <div className="md:w-2/5 md:order-2"> {/* Use md:order-2 to change the order on medium screens and above */}
            <img
              src={a}
              alt="Your Name"
              className="rounded-full w-100 h-100 mx-auto"
            />
          </div>
          {/* Left Section (Text) */}
          <div data-aos="zoom-in" className="md:w-3/5 md:order-1 flex flex-col justify-center p-4"> {/* Use md:order-1 to change the order on medium screens and above */}
            <div>
              <div className="text-5xl font-extrabold text-white font-roboto py-3 sm:text-4xl md:text-5xl">
                Hello, I'm Nihal Das
              </div>
              <div className="text-lg text-white font-roboto py-2">
                Crafting Web Experiences
              </div>
              <TypeAnimation
                data-aos="fade-up"
                sequence={[
                  "Web Developer",
                  2000,
                  "Software Developer",
                  2000,
                  "Front End Developer",
                  2000,
                  "",
                ]}
                speed={30}
                wrapper="h2"
                repeat={Infinity}
                className="text-black text-3xl font-bold sm:text-5xl py-3"
              />
              <div className="flex space-x-4 mt-4 py-3">
                <a href="https://linkedin.com/in/nihal-das-p-46133b207" className="text-black text-3xl hover:text-white">
                  <FaLinkedinIn />
                </a>
                <a href="https://github.com/Das-art" className="text-black text-3xl hover:text-white">
                  <FaGithub />
                </a>
                <a href="https://wa.me/qr/DQ7JIBVUAX6HK1" className="text-black text-3xl hover:text-white">
                  <IoLogoWhatsapp />
                </a>
                <a
                  href={resumePDF}
                  className="flex items-center gap-2 border- text-[1rem] text-white bg-black border-black px-7 py-2 sm:px-6 rounded-lg font-bold  hover:bg-white hover:text-black"
                  download
                >
                  <div className="flex items-center gap-1">
                    Resume <FiDownload/>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
