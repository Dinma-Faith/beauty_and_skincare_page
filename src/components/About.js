import React from "react";
import AboutSkincare from "../assets/aboutSkincare.jpg";

const Home = () => {
  return (
    <div name="home" className=" w-full bg-gray-400 text-white ">
      <div className="max-w-screen-lg mx-auto flex flex-col bg-gray-400 items-center justify-center px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <p className="sm:text-2xl text-white mt-10">
            {" "}
            Our beauty app is designed to help you explore, experiment and
            express your unique sense of beauty.{" "}
          </p>
          <p className="py-4 max-w-md">
            We believe that everyone
            deserves to feel confident and empowered in their own skin, and
            we're here to make that a reality. Our mission is to inspire you to
            embrace your natural beauty and make self-care a daily ritual.
          </p>

          <div className="flex flex-row">
            <button className="text-white w-fit px-6 py-3 my-2 mr-2 flex items-center rounded-md bg-green-800 cursor-pointer">
              normal skin
            </button>

            <button className="text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-green-800 cursor-pointer">
              dry skin
            </button>
          </div>

          <div className="flex flex-row">
            <button className="text-white w-fit px-6 py-3 my-2 mr-2 flex items-center rounded-md bg-green-800 cursor-pointer">
              combination skin
            </button>

            <button className="text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-green-800 cursor-pointer">
              oily skin

            </button>
          </div>
        </div>

        <div>
          <img src={AboutSkincare} alt="homeskin" className=" rounded-2xl mx-auto mt-20 md:mt-0 w-2/3 md:w-full " />
        </div>
      </div>
    </div>
  );
};

export default Home;
