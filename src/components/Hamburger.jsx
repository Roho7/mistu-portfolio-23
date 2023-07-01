import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { ImCross } from "react-icons/im";
import { Link } from "react-router-dom";
import { PhoneIcon } from "@chakra-ui/icons";
import { AiFillHome, AiFillProject } from "react-icons/ai";

function Hamburger() {
  const [menu, setMenu] = useState(false);

  function handleMenuOpen(e) {
    setMenu(!menu);
    console.log("menu opened");
  }
  function handleMenuClose(e) {
    setMenu(!menu);
  }
  return (
    <>
      <div
        className="sm:absolute z-50 right-4 top-4 p-1 bg-skin-100 md:hidden"
        onClick={handleMenuOpen}
      >
        <AiOutlineMenu />
      </div>
      <div className={menu ? "hamburger" : "hamburger -right-1/4"}>
        <div onClick={handleMenuClose}>
          <ImCross />
        </div>
        <div className="h-full flex flex-col justify-evenly text-sm ">
          <Link
            to="/"
            className="flex flex-col items-center gap-2"
            onClick={handleMenuClose}
          >
            <AiFillHome className="text-2xl" />
            <div className="">Home</div>
          </Link>
          <Link
            to="/projects"
            className="flex flex-col items-center gap-2"
            onClick={handleMenuClose}
          >
            <AiFillProject className="text-2xl" />
            <div className="">Projects</div>
          </Link>
          <Link
            to="/contact"
            className="flex flex-col items-center gap-2"
            onClick={handleMenuClose}
          >
            <PhoneIcon className="text-2xl" />
            <div className="">Contact</div>
          </Link>
        </div>
      </div>
      <div
        className={menu ? "hamburger-screen" : "hidden"}
        onClick={handleMenuClose}
      ></div>
    </>
  );
}

export default Hamburger;
