import React from "react";
import ModelSkin from "../assets/modelSkin.jpg";
import Clear from "../assets/clear.jpg";
import MirrorModel from "../assets/mirrormodel.jpeg";
import SkinProd from "../assets/skinprod.jpg"
import SkinHome from "../assets/skinHome.jpg";

const Testimonials = () => {
  return (
    <div
      name="testimonials"
      className="w-full bg-gray-400 text-white mt-[5%] "
    >
      <div className=" h-full px-4 md:flex ">
        <div className="flex-col md:flex-row items-center justify-center h-full md:mx-10 md:mr-10 md:w-1/2">
          <p className="items-center py-4 pt-10">
            From glowing skin to stunning makeup looks, our app has helped
            countless people achieve their beauty goals.
            Join our beauty community today and share your own success story on our testimonial page!
          </p>
          <img src={ModelSkin} alt="skintreatments" className="mx-auto w-full h-auto " />
        </div>

        <div className="grid grid-cols-2 gap-4 mt-6 md:w-6/12">
          <img src={SkinProd} alt="skinproduct" className="mx-auto "/>
          <img src={Clear} alt="modelskin" className="mx-auto md:w-full md:h-auto " />
          <img src={MirrorModel} alt="mirror-model" className="mx-auto md:w-full md:h-auto " />
          <img src={SkinHome} alt="skin-model" className="mx-auto md:w-full md:h-auto " />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
