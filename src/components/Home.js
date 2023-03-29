import React, { useEffect} from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Aos from 'aos';
import {
  BsLinkedin,
  BsFacebook,
  BsWhatsapp,
  BsTelegram,
  BsTwitter,
} from "react-icons/bs";
import SkinHome from "../assets/skinHome.jpg";
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div name="home" className=" w-full bg-gray-400 text-white">
      <div className=" max-w-screen-lg bg-gray-400 mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white mt-12">
            {" "}
            Because You deserve the best:{" "}
          </h2>
          <br />
          <p className="py-4 max-w-md md:mt-0">
            Welcome to our beauty app, where you can enhance your natural beauty
            with just a few taps. Discover a world of makeup tutorials, skincare
            tips, and personalized beauty recommendations that will help you
            look and feel your best.
          </p>

          <div className="flex flex-row">
            <button className="text-white w-fit hover:opacity-[25%] px-6 py-3 my-2 mr-2 flex items-center rounded-md bg-green-800 cursor-pointer">
              contact
              <span>
                <MdOutlineKeyboardArrowDown size={25} className="ml-2" />
              </span>
            </button>

            <button className="text-white w-fit hover:opacity-[25%] px-6 py-3 my-2 flex items-center rounded-md bg-green-800 cursor-pointer">
              learn -more
            </button>
          </div>

          <div className="flex flex-row mt-3 cursor-pointer w-full gap-2 ">
            <BsLinkedin className="sm:motion-safe:hover:animate-spin" />
            <BsFacebook  className="sm:motion-safe:hover:animate-spin"/>
            <BsWhatsapp className="sm:motion-safe:hover:animate-spin"/>
            <BsTelegram className="sm:motion-safe:hover:animate-spin"/>
            <BsTwitter className="sm:motion-safe:hover:animate-spin"/>
          </div>
        </div>

        <div data-aos="zoom-in" className="mt-[5%]">
          <img
            src={SkinHome}
            alt="homeskin"
            className=" rounded-2xl mx-auto mt-5 md:mt-0 w-2/3 md:w-full "
          />
        </div>
      </div>

      <div className="hidden text-gray-400 md:flex flex-row justify-center w-[97%] my-10 py-0 md:py-4 bg-white hover:text-white">
        <small className="bg-gray-400 mx-3 px-3 flex items-center rounded-md">
          lorem ipsum
        </small>
        <small className="bg-gray-400 mx-3 px-3 flex items-center rounded-md">
          lorem ipsum
        </small>
        <small className="bg-gray-400 mx-3 py-0 px-3 flex items-center rounded-md">
          lorem ipsum
        </small>
        <small className="bg-gray-400 mx-3 px-3 flex items-center rounded-md">
          lorem ipsum
        </small>
      </div>
    </div>
  );
};

export default Home;
