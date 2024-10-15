import React, { useState } from "react";
import { IoArrowUpCircleOutline } from "react-icons/io5";

const Accordion = ({ title, answer }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="py-1.5 px-3">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex justify-between w-full outline-none"
      >
        <span className="font-inter font-semibold text-xl text-start text-slate-700 w-5/6">{title}</span>
          <IoArrowUpCircleOutline
            className={`transform origin-center transition duration-200 ease-out text-primary text-2xl outline-none w-1/6 ${
              accordionOpen && "!rotate-180"
            }`}
          />
       
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-900 text-base font-medium font-inter outline-none ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <p className="overflow-hidden font-inter py-2 leading-normal md:w-5/6 sm:w-full text-slate-600 ">{answer}</p>
      </div>
    </div>
  );
};

export default Accordion;