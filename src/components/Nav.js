import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Nav = () => {
    const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "testimonials",
    },
    {
      id: 4,
      link: "recommendation",
    },
    {
      id: 5,
      link: "products",
    },
    {
      id: 6,
      link: "contact",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-gray-400 z-20 fixed">
      <div>
        <h1 className="text-5xl font-signature ml-2">BS</h1>
      </div>

      <ul className="hidden md:flex md:">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-#fff hover:scale-105 duration-200"
          >
            {link}
          </li>
        ))}
      </ul>

      <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-10 text-white md:hidden" >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
      <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gray-400 text-#fff">
      {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize py-6 text-4xl"
          >
            {link}
          </li>
        ))}
      </ul>
      )}
    </div>
  );
};

export default Nav;
