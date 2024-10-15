import React from "react";
import Logo from "../../assets/logo.png";
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer class="bg-gray-800 text-gray-400 body-font">
      <div class="container px-5 py-10 mx-auto flex md:items-start  lg:items-start md:flex-row md:flex-nowrap  flex-wrap flex-col ">
        <div class="w-80 flex-shrink-0 md:mx-5 mx-auto text-center md:text-left">
          <div className="flex items-end lg:justify-start md:justify-start justify-center space-x-2">
            <img src={Logo} alt="Logo" className="h-12 w-12" />
            <span className="text-white text-4xl font-black">IoxiT</span>
          </div>
          <p class="mt-2 text-sm text-gray-400 font-inter">
            Empowering Innovation Anytime, Anywhere. Driven by Cutting-Edge
            Technology.
          </p>
        </div>
        <div class="flex-grow flex flex-wrap text-left md:pl-10 md:mt-0 mt-10 font-inter pl-5">
          <div class="lg:w-1/4 md:w-1/2 w-1/2 lg:px-5 ">
            <h2 class=" font-medium text-white text-lg mb-1">
              Quick Links
            </h2>
            <hr className="w-20 border-2 rounded-full border-primary"/>
            <nav class="list-none py-3 flex flex-col gap-3">
              <li>
                <a class="text-gray-400 hover:text-white" href="/">
                  Home
                </a>
              </li>
              <li>
                <a class="text -gray-400 hover:text-white" href="/">
                  Learning
                </a>
              </li>
              <li>
                <a class="text -gray-400 hover:text-white" href="/">
                  Career
                </a>
              </li>
              <li>
                <a class="text -gray-400 hover:text-white" href="/">
                  About Us
                </a>
              </li>
              <li>
                <a class="text-gray-400 hover:text-white" href="/">
                  Contact Us
                </a>
              </li>
            </nav>
          </div>
          <div class="lg:w-1/4 md:w-1/2 w-1/2 lg:px-5 ">
            <h2 class="font-medium text-white text-lg mb-1 ">
              Products
            </h2>
            <hr className="w-20 border-2 rounded-full border-primary"/>
            <nav class="list-none py-3 flex flex-col gap-3">
              <li>
                <a class="text-gray-400 hover:text-white" href="/">
                  IoxiT Green Kit
                </a>
              </li>
              <li>
                <a class="text -gray-400 hover:text-white" href="/">
                  IoxiT IOT Kit
                </a>
              </li>
              <li>
                <a class="text-gray-400 hover:text-white" href="/">
                  IoxiT Design Kit
                </a>
              </li>
              <li>
                <a class="text-gray-400 hover:text-white" href="/">
                  Learnings
                </a>
              </li>
              <li>
                <a class="text-gray-400 hover:text-white" href="/">
                  Api Integration
                </a>
              </li>
            </nav>
          </div>
          <div class="lg:w-1/4 md:w-1/2 w-1/2 lg:px-5">
            <h2 class="font-medium text-white text-lg mb-1">
              Features
            </h2>
            <hr className="w-20 border-2 rounded-full border-primary"/>
            <nav class="list-none py-3 flex flex-col gap-3">
              <li>
                <a class="text-gray-400 hover:text-white" href="/">
                  Hands-On Learning
                </a>
              </li>
              <li>
                <a class="text -gray-400 hover:text-white" href="/">
                  Age-Appropriate
                </a>
              </li>
              <li>
                <a class="text-gray-400 hover:text-white" href="/">
                  Certificate of Completion
                </a>
              </li>
              <li>
                <a class="text-gray-400 hover:text-white" href="/">
                  AR Integration
                </a>
              </li>{" "}
              <li>
                <a class="text-gray-400 hover:text-white" href="/">
                  Eco-Friendly Materials
                </a>
              </li>
            </nav>
          </div>
          <div class="lg:w-1/4 md:w-1/2 w-1/2 lg:px-5">
            <h2 class="font-medium text-white text-lg mb-1">
              Leagal
            </h2>
            <hr className="w-20 border-2 rounded-full border-primary"/>
            <nav class="list-none py-3 flex flex-col gap-3">
              <li>
                <a class="text-gray-400 hover:text-white" href="/">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a class="text -gray-400 hover:text-white" href="/">
                  Terms of Service
                </a>
              </li>
              <li>
                <a class="text-gray-400 hover:text-white" href="/">
                  Compliance
                </a>
              </li>
              <li>
                <a class="text-gray-400 hover:text-white" href="/">
                  Content Protection
                </a>
              </li>{" "}
              <li>
                <a class="text-gray-400 hover:text-white" href="/">
                  Support
                </a>
              </li>
              <li>
                <a class="text-gray-400 hover:text-white" href="/">
                  Help Centre
                </a>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className="flex lg:flex-row md:flex-row flex-col gap-5  justify-around   py-8  font-inter">
        <p className="text-slate-300 lg:order-1 md:order-1 order-2 text-center">© 2024 ProctorTech. All rights reserved.</p>
        <div className="flex gap-6 text-slate-300 text-xl lg:order-2 md:order-2 order-1 justify-center">
        <FaFacebookF />
        <FaXTwitter />
        <FaInstagram />
        <FaGithub />
        <FaLinkedin />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
