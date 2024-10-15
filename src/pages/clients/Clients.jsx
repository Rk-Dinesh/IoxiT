import React from 'react';
import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";
import Hackwit from "../../assets/hackwit.png";
import wow from "../../assets/wow.png";
import Meiphor from "../../assets/meiphor.png";
import Sathyabama from "../../assets/sathyabama.png";
import SIC from "../../assets/sic.png";
import Ankaa from "../../assets/ankaa.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const data = [
  {
    image: Hackwit,
  },
  {
    image: wow,
  },
  {
    image: Meiphor,
  },
  {
    image: Sathyabama,
  },
  {
    image: SIC,
  },
  {
    image: Ankaa,
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
    slidesToSlide: 6,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 4,
    slidesToSlide: 4,
  },
  mobile: {
    breakpoint: { max: 767, min: 0 },
    items: 3,
    slidesToSlide: 3,
  },
};

const Clients = () => {
  return (
    <section className="py-6">
      <div className="container mx-auto px-4 ">
        <div className="text-center font-inter text-slate-800 ">
          <h4 className="font-semibold text-xl py-1.5">
            Trusted by over 100+ Clients.
          </h4>
          <p className="font-normal md:text-lg sm:text-base md:w-4/6 w-full mx-auto py-2">
            Our Clients are out top priority, we are committed to providing them
            with the highest level of service
          </p>
        </div>
      
        <div className="mx-auto mt-5">
          <Carousel
            responsive={responsive}
            arrows={false}
            autoPlay
            autoPlaySpeed={3000}
            infinite
            swipeable
            partialVisible
            itemClass="px-3"
          >
            {data.map((item, index) => (
              <div key={index} className="bg-white">
                <div className="border sm:w-36 md:w-40 h-16 flex justify-center items-center mx-0.5">
                  <img src={item.image} alt="Image" className="px-3"/>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Clients;