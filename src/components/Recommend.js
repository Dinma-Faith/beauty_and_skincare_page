import React from "react";
import Images from "../assets/images.jpeg"
import Beatiglow from "../assets/beatiglow.jpg"
import Skintone from "../assets/imagesA.jpeg"
import Socialskin from "../assets/jourdan.jpg"
import AboutSkincare from "../assets/girlie.jpeg";
import PreventAcne from "../assets/skindesign.png"

const Recommend = () => {
  return (
    <div name="recommendation" className=" w-full bg-gray-400 text-white ">
      <div className="max-w-screen-lg bg-gray-400 mx-auto items-center justify-center h-full px-4 md:flex-row">
        <div className=" h-full mb-[5%]">
          <p className="text-center font-medium text-lg">
            Looking for your next beauty must-have? Look no further,we are here
            for you. With our personalized recommendations, you're sure to find
            products that are perfectly suited to your unique beauty needs and
            preferences.
          </p>

          <div className="text-green-800 flex flex-row justify-center mt-5 mb-5 text-lg">
            <span className="bg-white px-3 flex items-center rounded-md h-6">oily</span>
            <span className="bg-white mx-3 px-3 flex items-center rounded-md h-6">dry </span>
            <span className="bg-white px-3 flex items-center rounded-md h-6">acne</span>
            <span className="bg-white mx-3 px-3 flex items-center rounded-md h-6">combo</span>
            
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-6 md:grid-cols-3">
            <img src={Images} alt="model" className="w-full mx-auto md:w-full md:h-auto "/>
            <img src={Beatiglow} alt="model" className="mx-auto md:w-full md:h-auto "/>
            <img src={Skintone} alt="skin-tone"className="mx-auto md:w-full md:h-auto "  />
            <img src={Socialskin} ait="skinmodel" alt="=skintype" className="mx-auto md:w-full md:h-auto "/>
            <img src={AboutSkincare} alt="aboutskintype" className="mx-auto md:w-full md:h-auto " />
            <img src={PreventAcne} alt="Dark skin" className="mx-auto md:w-full md:h-auto " />
        </div>
      </div>
    </div>
  );
};

export default Recommend;
