import React from "react";
import Welcomes from "../../assets/welcome.png";
import { MdOutlinePhoneCallback } from "react-icons/md";

const Welcome = () => {
  return (
    <section className="relative py-12 bg-[#F5F7FA] pt-36">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-1 md:order-2 px-2">
            <img src={Welcomes} alt="Image" className="rounded" />
          </div>

          <div className="order-2 md:order-1 px-2">
            <h4 className="mb-4 text-3xl md:text-6xl md:leading-tight leading-tight font-extrabold font-inter">
              <span className="text-primary whitespace-nowrap ">Welcome to IoxiT</span> <br /> Innovating
              for a Better Tomorrow!
            </h4>
            <p className="text-slate-400 md:text-lg sm:text-base font-inter">
              At IoxiT, we fuse innovation with sustainability, creating tech
              solutions that drive progress while preserving the planet. From
              Syllabus to hands-on science kits, we empower businesses and
              students to lead the future.
            </p>
            <div className="flex gap-3 mt-10 md:justify-start justify-center font-inter ">
              <button className="text-white bg-primary border-none outline-none w-36 py-2 shadow-md rounded whitespace-nowrap">
                Request Demo
              </button>
              <button className="flex items-center gap-2 justify-center text-primary border border-primary  outline-none w-36 px-5 py-2 shadow-md rounded whitespace-nowrap">
              <MdOutlinePhoneCallback />Call Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
