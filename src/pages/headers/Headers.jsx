import React from "react";
import Logo from "../../assets/logo.png";

const Headers = () => {
  return (
    <nav className="p-4 fixed top-0 w-full z-10 bg-white">
      <div className="container mx-auto flex justify-around items-center flex-wrap">
        <div className="flex items-center space-x-1">
          <img src={Logo} alt="Logo" className="h-12 w-12" />
          <span className="text-slate-900 text-3xl font-black">IOXIT</span>
        </div>
        <div className="flex gap-12 items-center">
        <div className="hidden md:flex space-x-10">
        <span className="text-slate-400 text-lg font-normal hover:text-slate-800">
          Home
          </span>
          <span className="text-slate-400 text-lg font-normal hover:text-slate-800">
          Product
          </span>
          <span className="text-slate-400 text-lg font-normal hover:text-slate-800">
          Courses
          </span>
          <span className="text-slate-400 text-lg font-normal hover:text-slate-800">
          Pricing
          </span>
          <span className="text-slate-400 text-lg font-normal hover:text-slate-800">
          Careers
          </span>
          <span className="text-slate-400 text-lg font-normal hover:text-slate-800 whitespace-nowrap">
          About Us
          </span>

        </div>
       
       <button className="text-white bg-primary border-none outline-none px-5 py-2 shadow-md rounded whitespace-nowrap">
        Request Demo
       </button>
       </div>
      </div>
    </nav>
  );
};

export default Headers;
