import React from "react";
import Products from "./Products";

const ProductPage = () => {
    console.log('chidinma')
  return (
    <div  className="products h-full w-full bg-gray-400 text-white ">
      <div className="max-w-screen-lg mx-auto bg-gray-400 items-center justify-center px-4">
        <div>
          <h6 className="flex justify-center h-full text-green-800 font-signature my-[4%]">
            Our Products
          </h6>
          <p className="mb-[3%]">
            Our products are carefully selected for their quality,
            effectiveness, and value, so you can shop with confidence. Whether
            you're looking to revamp your entire beauty routine or simply try
            out a new product, we have something for everyone.
          </p>
        </div>

       <div className="md:flex items-center">
        <Products />
       </div>
      </div>
    </div>
  );
};

export default ProductPage;
