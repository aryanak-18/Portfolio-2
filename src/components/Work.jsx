import React from "react";
import Natours from "../assets/projects/natours.png";
import Portfolio1 from "../assets/projects/portfolio-1.png";
import ElegantClothing from "../assets/projects/elegant-clothing.png";
import PlacePicker from "../assets/projects/place-picker.png";
import NodeFarm from "../assets/projects/node-farm.png";
import ExpenseTracker from "../assets/projects/expense-tracker.png";

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-white bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-white border-[#57ebff]">
            Work
          </p>
          <p className="py-6">Check out some of my projects</p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Natours})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group hover:opacity-100 justify-center items-center mx-auto w-full h-full">
              <div className="inset-y-1/4 relative w-fit mx-auto">
              <span className="text-xl font-bold text-white tracking-wider items-center">
                Node, Express & Mongo
              </span>
              <div className="pt-8 text-center">
                <a href="https://natours-cye6.onrender.com/" target="5">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-gray-300">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/aryanak-18/Natours-API" target="6">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-gray-300">
                    Code
                  </button>
                </a>
              </div>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${PlacePicker})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group hover:opacity-100 justify-center items-center mx-auto w-full h-full">
              <div className="inset-y-1/4 relative w-fit mx-auto">
              <span className="text-xl font-bold text-white tracking-wider items-center ml-2">
                React.js & Node.js
              </span>
              <div className="pt-8 text-center">
                <a href="https://placepicker-react-node.vercel.app/" target="7">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-gray-300">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/aryanak-18/Natours-API" target="8">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-gray-300">
                    Code
                  </button>
                </a>
              </div>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${NodeFarm})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group hover:opacity-100 justify-center items-center mx-auto w-full h-full">
              <div className="inset-y-1/4 relative w-fit mx-auto">
              <span className="text-xl font-bold text-white tracking-wider items-center ml-2">
                Node.js Application
              </span>
              <div className="pt-8 text-center">
                <a href="https://node-farm-eight.vercel.app/" target="9">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-gray-300">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/aryanak-18/Natours-API" target="10">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-gray-300">
                    Code
                  </button>
                </a>
              </div>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${ExpenseTracker})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group hover:opacity-100 justify-center items-center mx-auto w-full h-full">
              <div className="inset-y-1/4 relative w-fit mx-auto">
              <span className="text-xl font-bold text-white tracking-wider items-center ml-2">
                React.js Application
              </span>
              <div className="pt-8 text-center">
                <a href="https://expensetrackingwebapp.netlify.app/" target="11">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-gray-300">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/aryanak-18/Natours-API" target="12">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-gray-300">
                    Code
                  </button>
                </a>
              </div>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Portfolio1})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group hover:opacity-100 justify-center items-center mx-auto w-full h-full">
              <div className="inset-y-1/4 relative w-fit mx-auto">
              <span className="text-xl font-bold text-white tracking-wider items-center ml-2">
                HTML, CSS & JS
              </span>
              <div className="pt-8 text-center">
                <a href="https://aryanak-18.github.io/Portfolio/" target="13">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-gray-300">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/aryanak-18/Natours-API" target="14">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-gray-300">
                    Code
                  </button>
                </a>
              </div>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${ElegantClothing})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group hover:opacity-100 justify-center items-center mx-auto w-full h-full">
              <div className="inset-y-1/4 relative w-fit mx-auto">
              <span className="text-xl font-bold text-white tracking-wider items-center ml-2">
                React.js Application
              </span>
              <div className="pt-8 text-center">
                <a href="https://elegant-clothing.netlify.app/" target="15">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-gray-300">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/aryanak-18/Natours-API" target="16">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-gray-300">
                    Code
                  </button>
                </a>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
