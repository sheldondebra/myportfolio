import React from 'react'
import  { FaLinkedin} from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa';
import { FaTwitterSquare } from 'react-icons/fa'; 
import { FaInstagram } from 'react-icons/fa';
function Navbar() {
  return (
    <nav className="mb-20 flex items-center justify-between py-2">
      <div className="flex flex-shrink-0 items-start">
        <h1 className='text-2xl pl-4'>Sheldon Debra</h1>
      </div>
      <div className="m-8 items-center justify-center gap-4 text-2xl flex">
        <FaLinkedin />
        <FaGithub />
        <FaTwitterSquare />
        <FaInstagram />
      </div>
    </nav>
  );
}

export default Navbar

