import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import DP from "../assets/DP-2.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      <div className="flex lg:hidden absolute flex-col lg:top-[35%] left-0 top-[9.5%]">
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
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <img className="rounded-full w-52 mx-auto max-sm:w-28 max-md:w-40 custom-box-shadow" src={DP} alt="profile-pic"/>
        <p className="text-[#3bffff] mt-8">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-white">
          Aryan Kumar
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a Full-Stack Developer{" "}
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I am a Full-Stack Developer in MERN Stack. Currently, I am focussed on
          building responsive web-applications
        </p>
        <div>
          <Link to="work" smooth={true} duration={500}>
            <button className="text-white group border-2 rounded-sm px-6 py-3 my-2 flex items-center hover:bg-[#57ebff] hover:text-black font-semibold hover:font-bold hover:border-[#57ebff]">
              View Work
              <span className="group-hover:rotate-90 duration-300 group-hover:mb-2">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
