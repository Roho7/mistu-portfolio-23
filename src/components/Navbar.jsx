import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { PhoneIcon, StarIcon } from "@chakra-ui/icons";
import { AiFillHome, AiTwotoneProject } from "react-icons/ai";

function Navbar() {
  return (
    <div className="absolute bottom-0 w-screen z-10 flex justify-center gap-8 p-8 rounded-xl text-skin-500 ">
      <Link to="/" className="flex flex-col items-center">
        <AiFillHome />
      </Link>
      <Link to="/projects" className="flex flex-col items-center">
        <AiTwotoneProject />
      </Link>
      <Link to="/contact" className="flex flex-col items-center">
        <PhoneIcon />
      </Link>
    </div>
  );
}

export default Navbar;
