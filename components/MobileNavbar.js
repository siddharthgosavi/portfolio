import React from "react";
import { Link } from "react-scroll";
import { navigation } from "../data/data";
import { toggleMenu } from "../AppContext/AppContext";

const MobileNavbar = () => {
  const [open, setOpen] = toggleMenu();

  function handleMenuItemClicked() {
    setOpen(!open);
  }

  return (
    <>
      <ul className=" z-50 flex flex-col items-center justify-center w-full transition-all duration-300">
        {navigation.map((item, index) => {
          return (
            <li key={index} className="text-white mb-8 font-semibold hover:text-sky-400">
              <Link to={item.href} onClick={() => handleMenuItemClicked()} smooth={true} activeClass="active" spy={true} duration={500} offset={-120} className="text-xl cursor-pointer capitalize">
                {item.name}
              </Link>
            </li>
          );
        })}
        <li className="text-white text-base font-semibold  cursor-pointer">
          <Link to="contact" activeClass="active" spy={true} smooth={true} duration={500} offset={-70} className="transition-all duration-300 px-6 py-2 bg-indigo-600 hover:bg-indigo-800 rounded-bl-lg rounded-tr-lg">
            Contact
          </Link>
        </li>
      </ul>
    </>
  );
};

export default MobileNavbar;
