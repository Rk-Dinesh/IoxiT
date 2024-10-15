import React from "react";
import Accordion from "../../components/Accordion";

const FAQ = () => {
  return (
    <section>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-12 gap-5 font-inter py-12">
          <div className="md:col-span-6 col-span-12">
            <h4 className="md:text-4xl sm:text-3xl font-bold py-1.5 leading-normal text-slate-800 px-3">Frequently Asked Questions</h4>
            <p className="text-base py-2.5 text-slate-600 md:w-5/6 sm:w-full px-3  ">
              Your trusted partner in innovative tech solutions and education.
              With cutting-edge IoT, AI-driven projects, and eco-friendly
              learning tools, we empower students, institutions, and businesses
              to thrive in a sustainable, tech-driven world.
            </p>
          </div>
          <div className="md:col-span-6 col-span-12 ">
           
              <Accordion
                title="What services does IoxiT offer?"
                answer="We specialize in IoT solutions, AI & machine learning, web and mobile app development, digital marketing, SEO, and student and faculty training."
              />
              <Accordion
                title="What courses do you offer?"
                answer="We offer a wide range of courses including Data Science, Full Stack Development, UI/UX Design, IoT, Python Programming, Graphic Design, and Digital Marketing."
              />
              <Accordion
                title="Do you provide training for businesses and institutions?"
                answer="Yes, we offer customized workshops and training programs for both students and faculty at educational institutions, as well as professional development for businesses."
              />
               <Accordion
                title="How can I enroll in a course or workshop?"
                answer="You can enroll by visiting our Courses or Workshops page and following the registration process provided."
              />
              <Accordion
                title="What are your science experiment kits? "
                answer="Our science kits provide hands-on, eco-friendly learning experiences for students, replacing plastic with paper-based components and integrating AR through our Meiphor app."
              />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
