import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4"
    >
      <form method="POST" action="https://getform.io/f/aa0f3115-c25e-4505-9304-0cf25e68f384" className="flex flex-col max-w-[600px] w-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#57ebff] text-white">
            Contact
          </p>
          <p className="text-white py-4">Submit the  form below or shoot me an email - <span className="border-b-[1px] border-[#57ebff]">aryan.ak.work@gmail.com</span></p>
        </div>
        <input className="bg-[#ccd6f6] p-2 rounded-sm" type="text" placeholder="Name" name='name'/>
        <input className="my-4 bg-[#ccd6f6] p-2 rounded-sm" type="email" placeholder="Email" name='email'/>
        <textarea className="bg-[#ccd6f6] p-2 rounded-sm" name="message" rows="10" placeholder="Message"></textarea>
        <button className="text-white border-2 px-4 py-3 my-8 mx-auto flex items-center hover:bg-[#57ebff] hover:text-black font-semibold hover:font-bold hover:border-[#57ebff]">Let's Collaborate</button>
      </form>
    </div>
  );
};

export default Contact;
