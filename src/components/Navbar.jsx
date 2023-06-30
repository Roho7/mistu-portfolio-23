import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { PhoneIcon, StarIcon } from "@chakra-ui/icons";
import { AiFillHome, AiFillProject } from "react-icons/ai";

function Navbar() {
  return (
    <div className="absolute xl:bottom-0 sm:items-end sm:gap-8 w-screen z-50 flex justify-center gap-16 p-8 rounded-xl text-skin-500 sm:top-0 sm:flex-col ">
      <Link to="/" className="flex flex-col items-center group">
        <div className="tooltip">Home</div>
        <AiFillHome />
      </Link>
      <Link to="/projects" className="flex flex-col items-center group">
        <div className="tooltip">Projects</div>
        <AiFillProject />
      </Link>
      <Link to="/contact" className="flex flex-col items-center group">
        <div className="tooltip">Contact</div>
        <PhoneIcon />
      </Link>
    </div>
  );
}

export default Navbar;
