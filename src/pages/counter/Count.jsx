import React,{useState} from "react";
import count from "../../assets/count.png";
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

const Count = () => {
    const [counter, setCounter] = useState(false)
  return (
    <ScrollTrigger onEnter={()=>setCounter(true)} onExit={()=>setCounter(false)}>
    <section className="py-4 px-1">
      <div className="container mx-auto px-4 bg-primary rounded-lg ">
        <div className="flex md:flex-row  flex-col ">
         <div className="flex justify-center items-center ">
         <img src={count} alt="Image" className="p-5 lg:w-64 lg:h-64 md:w-52 md:h-52 w-48 h-48 " />
         </div>
          <div className=" text-white font-inter text-center">
            <h2 className="md:text-3xl sm:text-xl font-bold pt-6">
              Empowering the Future Through Innovation
            </h2>
            <p className="text-sm font-normal md:w-4/6 sm:w-full mx-auto">
              At loxit, we are dedicated to empowering students and
              institutions, transforming education and business with our
              innovative solutions and hands-on learning.
            </p>
            <div className="grid grid-cols-12 gap-5 py-6 px-12">
              <div className="text-center md:col-span-3 col-span-6 ">
                <h3 className="text-4xl font-bold mb-2">{counter && <CountUp start={0} end={1564} duration={2} delay={0}/>}+</h3>
                <p className="text-sm whitespace-nowrap">Students Benefited</p>
              </div>
              <div className="text-center md:col-span-3 col-span-6">
                <h3 className="text-4xl font-bold mb-2">{counter && <CountUp start={0} end={64} duration={2} delay={0}/>}+</h3>
                <p className="text-sm whitespace-nowrap">Workshop & Events</p>
              </div>
              <div className="text-center md:col-span-3 col-span-6">
                <h3 className="text-4xl font-bold mb-2">{counter && <CountUp start={0} end={27} duration={2} delay={0}/>}+</h3>
                <p className="text-sm">Mentors</p>
              </div>
              <div className="text-center md:col-span-3 col-span-6">
                <h3 className="text-4xl font-bold mb-2">{counter && <CountUp start={0} end={10} duration={2} delay={0}/>}+</h3>
                <p className="text-sm">Projects</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </ScrollTrigger>
  );
};

export default Count;
