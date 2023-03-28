import React from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { BsLinkedin, BsFacebook, BsWhatsapp, BsTelegram, BsTwitter } from "react-icons/bs";
import SkinHome from "../assets/skinHome.jpg";

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-gray-400 text-white">
      <div className="max-w-screen-lg bg-gray-400 mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            {" "}
            Because You deserve the best:{" "}
          </h2>
          <br />
          <p className="py-4 max-w-md mt-4 md:mt-0">
            Welcome to our beauty app, where you can enhance your natural beauty
            with just a few taps. Discover a world of makeup tutorials, skincare
            tips, and personalized beauty recommendations that will help you
            look and feel your best.
          </p>

          <div className="flex flex-row">
            <button className="text-white w-fit px-6 py-3 my-2 mr-2 flex items-center rounded-md bg-green-800 cursor-pointer">
              contact
              <span>
                <MdOutlineKeyboardArrowDown size={25} className="ml-2" />
              </span>
            </button>

            <button className="text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-green-800 cursor-pointer">
              learn -more
            </button>
          </div>

          <div className="flex flex-row mt-3 cursor-pointer">
            <BsLinkedin />
            <BsFacebook />
            <BsWhatsapp />
            <BsTelegram />
            <BsTwitter />
          </div>
        </div>

        <div>
          <img src={SkinHome} alt="homeskin" className=" rounded-2xl mx-auto mt-5 md:mt-0 w-2/3 md:w-full " />
        </div>
      </div>
    </div>
  );
};

export default Home;
