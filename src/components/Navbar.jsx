import React from 'react';
import logo from '../assets/As.png';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa';

export default function Navbar() {
  return (
    <>
      <nav className=" mb-20 flex justify-between items-center py-6">
        <div className="flex items-center flex-shrink-0">
          <img className="mx-2 w-20 " src={logo} alt="logo" />
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl ">
          <a href="https://www.linkedin.com/in/alisher-sarin-4b5096338/">
            <FaLinkedin />
          </a>
          <a href="https://github.com/Alish1993">
            <FaGithub />
          </a>
          <a href="https://www.instagram.com/sarinalisher/">
            <FaSquareXTwitter />
          </a>
          <a href="https://www.instagram.com/sarinalisher/">
            <FaInstagram />
          </a>
        </div>
      </nav>
    </>
  );
}
