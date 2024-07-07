import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="mt-24">
      <footer className="bg-slate-500 py-12">
        <div className="container mx-auto text-center">
          <div className="flex justify-center items-center space-x-6 mb-4">
            <a
              href="https://www.linkedin.com/in/ali-arif-140bb8274/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-300 transition duration-300 transform hover:scale-110"
            >
              <FaLinkedin size={30} />
            </a>
            <a
              href="https://github.com/AliArif5781/React-js"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition duration-300 transform hover:scale-110"
            >
              <FaGithub size={30} />
            </a>
          </div>
          <p className="text-white text-center">
            Copyright &copy; Ecommerence shop 2024. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
