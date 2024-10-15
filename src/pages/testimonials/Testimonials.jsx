import React from 'react';
import { HiOutlineBuildingLibrary } from "react-icons/hi2";
import { MdOutlineBusinessCenter } from "react-icons/md";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const data = [
  {
    image: <HiOutlineBuildingLibrary className='w-5 h-5'/>,
    type: 'Institution',
    name: 'Dr. C. Geetha',
    profession: 'Assistant Professor, Sathiyabama institute of science and Technology',
    desc: 'IoxiT has transformed our curriculum by providing innovative IoT and AI training programs. Their eco-friendly science kits have also made a significant impact in hands-on learning for our students.'
  },
  {
    image: <MdOutlineBusinessCenter className='w-5 h-5'/>,
    type: 'Business',
    name: 'Mr. Prem Kumar',
    profession: 'Manager, CloudBurst',
    desc: "Thanks to IoxiT's digital marketing strategies, our online presence has grown exponentially, and we’ve reached new markets faster than expected."
  },
  {
    image: <HiOutlineBuildingLibrary className='w-5 h-5'/>,
    type: 'Student',
    name: 'Mr. Ravi. K',
    profession: 'Data Science Student',
    desc: "The Data Science course at IoxiT was incredibly thorough and practical. I now feel confident in applying these skills to real-world projects."
  },
  {
    image: <HiOutlineBuildingLibrary className='w-5 h-5'/>,
    type: 'Student',
    name: 'Ms. Selvi. R',
    profession: 'UIUX Student',
    desc: "IoxiT’s UI/UX course gave me a solid foundation in design principles and tools, helping me land an internship with a top design firm."
  }
];

const Testimonials = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      slidesToSlide: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <section className='bg-[#F5F7FA] py-4 px-2'>
      <div className='container mx-auto px-6 py-4 bg-neutral-50 rounded-xl shadow-lg'>
        <div className='font-inter text-slate-700 text-center py-10'>
          <h4 className='font-bold md:text-3xl sm:text-2xl py-3'>Client’s Testimonials</h4>
          <p className='md:text-base sm:text-sm md:w-3/6 sm:w-4/6 mx-auto'>Our clients consistently praise IoxiT for delivering cutting-edge solutions, hands-on learning experiences, and impactful innovations that empower students, institutions, and businesses to thrive</p>
        </div>
        <Carousel
          responsive={responsive}
          arrows={false}
          autoPlay
          autoPlaySpeed={3000}
          infinite
          swipeable
          partialVisible
          itemClass="px-1"
          showDots
        >
          {data.map((item, index) => (
            <div key={index} className="h-full py-6">
              <div className='drop-shadow-xl  rounded-xl bg-stone-50 font-inter h-full'>
                <p className='flex justify-end'>
                  <span className='flex justify-end px-5 py-2.5 rounded-se-xl items-center font-semibold gap-2 bg-slate-900  text-white  '>
                    {item.image}
                    {item.type}
                  </span>
                </p>
                <h3 className='font-semibold text-2xl text-slate-700 py-1 px-8'>{item.name}</h3>
                <p className='font-medium text-sm text-slate-700 py-0.5 px-8 pb-5'>{item.profession}</p>
                <hr className='mx-8 border border-slate-600'/>
                <p className='text-base text-slate-700 py-5 px-8  '>{item.desc}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;