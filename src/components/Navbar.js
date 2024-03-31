import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-scroll';
const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    });
  }, []);

  return (
    <nav
    // 
      className={`fixed w-full z-50 ${
        scrolling
          ? 'bg-yellow-400 transition-all ease-in-out duration-300'
          : 'bg-gradient-to-r from-yellow-400 to-green-300'
      }`}
    >
      <div className="container mx-auto p-4">
        <div data-aos="fade-down" className="flex justify-between items-center">
          <div
            className="text-2xl font-bold text-white font-roboto"
          >
            Nihal Das.P
          </div>
          <div className="hidden md:flex space-x-6 text-black-500">
          <Link
              to="home"
              className="hover:text-white transition duration-300" 
              smooth={true}
              duration={500}
              style={{ cursor: 'pointer' }}
            >
            Home
          </Link>
            <Link
              to="about"
              className="hover:text-white transition duration-300"
              smooth={true}
              duration={500}
              style={{ cursor: 'pointer' }}
            >
              About
            </Link>
            <Link
              to="skill"
              className=" hover:text-white transition duration-300"
              smooth={true}
              duration={500}
              style={{ cursor: 'pointer' }}
            >
              Skills
            </Link>
            <Link
              to="certificates"
              className=" hover:text-white transition duration-300"
              smooth={true}
              duration={500}
              style={{ cursor: 'pointer' }}
            >
              Certificates
            </Link>
            <Link
              to="edu"
              className=" hover:text-white transition duration-300"
              smooth={true}
              duration={500}
              style={{ cursor: 'pointer' }}
            >
              Education
            </Link>
            <Link
              to="contact"
              className=" hover:text-white transition duration-300"
              smooth={true}
              duration={500}
              style={{ cursor: 'pointer' }}
            >
              Contact
            </Link>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
              className="text-2xl text-yellow-900"
            >
              {mobileNavOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
        <div
          className={`md:hidden fixed top-0 left-0 h-full w-3/4 bg-yellow-400  transition-transform ease-in-out duration-300 ${
            mobileNavOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <ul className="flex flex-col space-y-4 p-6">
            <li>
            <Link
                to="home"
                className="text-yellow-900 text-lg hover:bg-yellow-500 p-2 "
                smooth={true}
                duration={500}
                style={{ cursor: 'pointer' }}
                onClick={()=>setMobileNavOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="about"
                className="text-yellow-900 text-lg hover:bg-yellow-500 p-2 rounded-lg font-roboto"
                smooth={true}
                duration={500}
                style={{ cursor: 'pointer' }}
                onClick={()=>setMobileNavOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="certificates"
                className="text-yellow-900 text-lg hover:bg-yellow-500 p-2 rounded-lg font-roboto"
                smooth={true}
                duration={500}
                style={{ cursor: 'pointer' }}
                onClick={()=>setMobileNavOpen(false)}
                >
                 Certificates
              </Link>
            </li>
            <li>
              <Link
                to="skill"
                className="text-yellow-900 text-lg hover:bg-yellow-500 p-2 rounded-lg font-roboto"
                smooth={true}
                duration={500}
                style={{ cursor: 'pointer' }}
                onClick={()=>setMobileNavOpen(false)}
                >
                 Skills
              </Link>
            </li>
            <li>
              <Link
                to="edu"
                className="text-yellow-900 text-lg hover:bg-yellow-500 p-2 rounded-lg font-roboto"
                smooth={true}
                duration={500}
                style={{ cursor: 'pointer' }}
                onClick={()=>setMobileNavOpen(false)}
              >
                Education
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                className="text-yellow-900 text-lg hover:bg-yellow-500 p-2 rounded-lg font-roboto"
                smooth={true}
                duration={500}
                style={{ cursor: 'pointer' }}
                onClick={()=>setMobileNavOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
