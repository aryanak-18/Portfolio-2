import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-white">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#57ebff]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>I'm Aryan Kumar, nice to meet you. Please take a look around</p>
          </div>
          <div>
            <p>
            I'm a B.Tech undergraduate specialising in Computer Science and a Full-Stack developer in MERN. I build cool stuff on the web using MongoDB, Express.js, React, and Node.js. I love making user-friendly apps and always enjoy learning new things.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
