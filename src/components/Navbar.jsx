import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/favicon.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <div className="z-10 fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-white">
      <div>
        <Link to="home" smooth={true} duration={500}>
          <img src={Logo} className="cursor-pointer" alt="Logo" style={{ width: "75px" }} />
        </Link>
      </div>

      {/* menu  */}

      <ul className="hidden md:flex">
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger  */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* Mobile menu  */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social icons  */}
      <div className="hidden lg:flex fixed flex-col lg:top-[35%] left-0 top-[9.5%]">
        <ul>
          <li className="w-[160px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 h-auto p-4">
            <a
              className="flex justify-between items-center w-full text-white"
              href="https://www.linkedin.com/in/aryan-kumar-409361229/"
              target="4"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333] h-auto p-4">
            <a
              className="flex justify-between items-center w-full text-white"
              href="https://github.com/aryanak-18"
              target="3"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0] h-auto p-4">
            <a
              className="flex justify-between items-center w-full text-white"
              href="mailto:aryan.ak.work@gmail.com"
              target="2"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69] h-auto p-4">
            <a
              className="flex justify-between items-center w-full text-white"
              href="https://drive.google.com/file/d/1wvVQTp-puFugEfEjmtvOaGtPfTBURUzu/view?usp=sharing"
              target="1"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
