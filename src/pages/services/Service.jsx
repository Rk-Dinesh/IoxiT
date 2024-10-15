import React from 'react';
import IOT from "../../assets/iot.png";
import AI from "../../assets/ai.png";
import APP from "../../assets/app.png";
import SEO from "../../assets/seo.png";



const data = [
    {
        image:IOT,
        title:"IoT Solutions",
        desc:"Smart and connected devices to streamline your operations."
    },
    {
        image:AI,
        title:"AI & Machine Learning",
        desc:"Advanced algorithms that help businesses thrive in the digital age."
    },
    {
        image:APP,
        title:"Web & Mobile App Development",
        desc:"Scalable, responsive, and user-friendly platforms."
    },
    {
        image:SEO,
        title:"Digital Marketing & SEO",
        desc:"Strategies that amplify your brand’s online presence.."
    }
]


const Service = () => {
  return (
   <section className='py-8'>
    <div className="container mx-auto px-4 ">
        <div className='text-center font-inter'>
            <h4 className='text-3xl font-bold py-2'>Our Services</h4>
            <p className='md:text-lg sm:text-base font-medium py-2'>We offer a wide range of services tailored to meet your needs</p>
        </div>
        <div className='grid grid-cols-12 gap-3 text-center py-8 px-3'>
            {data.map((items,index)=>(
            <div key={index} className='lg:col-span-3 md:col-span-6  col-span-12 bg-[#F5F7FA] py-12 px-8 rounded font-inter shadow-md'>
                <span className='flex justify-center py-2'>
                <img src={items.image} alt="Image" className='w-16 h-16 '/>
                </span>
                <h3 className='sm:text-xl md:text-2xl font-semibold py-3'>{items.title}</h3>
                <p className='md:text-base sm:text-sm font-normal text-slate-600 py-2'>{items.desc}</p>
            </div>
            ))}
        </div>
    </div>
   </section>
  )
}

export default Service