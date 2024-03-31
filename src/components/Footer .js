import React from 'react';
import { FaLinkedinIn, FaGithub, FaFacebook,FaTelegram } from 'react-icons/fa';
import {IoLogoWhatsapp} from 'react-icons/io'
const Footer = () => {
  return (
    <footer  className="bg-yellow-300 py-6">
      <div  className="container mx-auto px-4 md:px-9">
        <div className="flex items-center justify-between">
          <div>
            <ul className="flex space-x-4 text-xl">
              <li>
                <a href="https://linkedin.com/in/nihal-das-p-46133b207" className="text-gray-600 hover:text-black">
                  <FaLinkedinIn />
                </a>
              </li>
              <li>
                <a href="https://github.com/Das-art" className="text-gray-600 hover:text-black">
                  <FaGithub />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/nihaldas.p?mibextid=ZbWKwL" className="text-gray-600 hover:text-black">
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a href="https://wa.me/qr/DQ7JIBVUAX6HK1" className="text-gray-600 hover:text-black">
                  <IoLogoWhatsapp />
                </a>
              </li>
              <li>
                <a href="https://t.me/nihaldas" className="text-gray-600 hover:text-black">
                  <FaTelegram />
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-center text-gray-600 text-lg">
              &copy; {new Date().getFullYear()} Nihal Das.P. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
