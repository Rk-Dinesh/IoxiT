import React, { useState } from "react";
import { HiOutlineBuildingLibrary } from "react-icons/hi2";
import { MdOutlineBusinessCenter } from "react-icons/md";
import image1 from "../../assets/Choose1.png";
import image2 from "../../assets/Choose2.png";
import image3 from "../../assets/Choose3.png";
import image4 from "../../assets/Choose4.png";
import image5 from "../../assets/Choose5.png";
import image6 from "../../assets/Choose6.png";
import image7 from "../../assets/Choose7.png";
import image8 from "../../assets/Choose8.png";
import image9 from "../../assets/Choose9.png";


const data = [
  {
    image: (
      <HiOutlineBuildingLibrary className="md:w-12 md:h-12 sm:w-10 sm:h-10 " />
    ),
    title: "Student",
  },
  {
    image: (
      <HiOutlineBuildingLibrary className="md:w-12 md:h-12 sm:w-10 sm:h-10" />
    ),
    title: "Institution",
  },
  {
    image: (
      <MdOutlineBusinessCenter className="md:w-12 md:h-12 sm:w-10 sm:h-10" />
    ),
    title: "Business",
  },
];

const datas1 = [
  {
    image: image1,
    title: "Hands-On Learning",
    desc: "Gain real-world experience through interactive science kits and practical tech courses.",
  },
  {
    image: image2,
    title: "Cutting-Edge Courses",
    desc: "Master in-demand skills like Data Science, Full Stack Development, and IoT.",
  },
  {
    image: image3,
    title: "AR-Powered Education",
    desc: "Enhance your learning with immersive AR tools through our Meiphor app.",
  },
];

const datas2 = [
  {
    image: image4,
    title: "Tailored Faculty Training",
    desc: "Empower educators with specialized workshops and curriculum design.",
  },
  {
    image: image5,
    title: "Eco-Friendly Science Kits",
    desc: "Promote sustainable learning with kits that encourage hands-on experimentation.",
  },
  {
    image: image6,
    title: "Innovative Tech Solutions",
    desc: "Equip your institution with the latest IoT, AI, and software solutions to enhance learning experiences.",
  },
];

const datas3 = [
  {
    image: image7,
    title: "Custom Tech Solutions",
    desc: "Benefit from bespoke IoT, AI, and software development services tailored to your business needs.",
  },
  {
    image: image8,
    title: "Digital Marketing & SEO",
    desc: "Amplify your brand’s online presence with our expert strategies.",
  },
  {
    image: image9,
    title: "Future-Ready Workforce",
    desc: "Upskill your team with industry-relevant training programs and workshops.",
  },
];

const Why = () => {
  const [student, setStudent] = useState(true);
  const [institution, setInstitution] = useState(false);
  const [business, setBusiness] = useState(false);

  const handleClick = (type) => {
    switch (type) {
      case "student":
        setStudent(true);
        setInstitution(false);
        setBusiness(false);
        break;
      case "institution":
        setStudent(false);
        setInstitution(true);
        setBusiness(false);
        break;
      case "business":
        setStudent(false);
        setInstitution(false);
        setBusiness(true);
        break;
      default:
        break;
    }
  };

  return (
    <section>
      <div className=" container mx-auto px-4">
        <div className="text-center font-inter">
          <h4 className="text-3xl font-bold py-2">
            Why You Choose <span className="text-primary">IoxiT</span> ?
          </h4>
          <p className="md:text-lg sm:text-base font-medium py-4 w-3/4 mx-auto">
            {" "}
            Discover the unique advantages that make ProctorTech the leading
            choice for secure and reliable online assessments
          </p>
        </div>
        <div className="grid grid-cols-12 gap-5 text-center py-4 lg:px-24  md:px-2 px-8">
          {data.map((items, index) => (
            <div
              key={index}
              className={`md:col-span-4 sm:col-span-12 col-span-12 py-3 px-8 rounded font-inter shadow-md 
                ${
                  student && items.title === "Student"
                    ? "bg-primary text-white"
                    : institution && items.title === "Institution"
                    ? "bg-primary text-white"
                    : business && items.title === "Business"
                    ? "bg-primary text-white"
                    : "bg-[#D9DDE2] text-slate-600"
                } 
                hover:text-white hover:bg-primary`}
              onClick={() => handleClick(items.title.toLowerCase())}
            >
              <span className="flex justify-center py-1">{items.image}</span>
              <h3 className="sm:text-base md:text-lg  font-medium py-1">
                {items.title}
              </h3>
            </div>
          ))}
        </div>
        {student && (
          <div className="grid grid-cols-12 gap-5 text-center py-4 lg:px-24 md:px-2 px-12">
            {datas1.map((items, index) => (
              <div
                key={index}
                className="  lg:col-span-4 md:col-span-4 sm:col-span-12 col-span-12 bg-[#F5F7FA] py-12 px-8 rounded font-inter shadow-md"
              >
                <span className="flex justify-center py-2">
                  <img
                    src={items.image}
                    alt="Image"
                    className="w-16 h-16 bg-primary p-3 rounded"
                  />
                </span>
                <h3 className="sm:text-xl md:text-2xl font-semibold py-3">
                  {items.title}
                </h3>
                <p className="md:text-base sm:text-sm font-normal text-slate-600 py-2">
                  {items.desc}
                </p>
              </div>
            ))}
          </div>
        )}
        {institution && (
          <div className="grid grid-cols-12 gap-5 text-center py-4 lg:px-24 md:px-2 px-12">
            {datas2.map((items, index) => (
              <div
                key={index}
                className=" lg:col-span-4 md:col-span-4 sm:col-span-12 col-span-12 bg-[#F5F7FA] py-12 px-8 rounded font-inter shadow-md"
              >
                <span className="flex justify-center py-2">
                  <img
                    src={items.image}
                    alt="Image"
                    className="w-16 h-16 bg-primary p-3 rounded"
                  />
                </span>
                <h3 className="sm:text-xl md:text-2xl font-semibold py-3">
                  {items.title}
                </h3>
                <p className="md:text-base sm:text-sm font-normal text-slate-600 py-2">
                  {items.desc}
                </p>
              </div>
            ))}
          </div>
        )}
        {business && (
          <div className="grid grid-cols-12 gap-5 text-center py-4 lg:px-24 md:px-2 px-12">
            {datas3.map((items, index) => (
              <div
                key={index}
                className=" lg:col-span-4 md:col-span-4 sm:col-span-12 col-span-12 bg-[#F5F7FA] py-12 px-8 rounded font-inter shadow-md"
              >
                <span className="flex justify-center py-2">
                  <img
                    src={items.image}
                    alt="Image"
                    className="w-16 h-16 bg-primary p-3 rounded"
                  />
                </span>
                <h3 className="sm:text-xl md:text-2xl font-semibold py-3">
                  {items.title}
                </h3>
                <p className="md:text-base sm:text-sm font-normal text-slate-600 py-2">
                  {items.desc}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Why;
