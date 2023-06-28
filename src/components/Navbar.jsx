import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Center, Square, Circle, Flex, Box, Spacer } from "@chakra-ui/react";
import { PhoneIcon, StarIcon } from "@chakra-ui/icons";
import { AiFillHome, AiTwotoneProject } from "react-icons/ai";

function Navbar() {
  return (
    <header className="sticky z-10 top-0 flex  justify-evenly p-2 rounded-xl bg-gray-200  bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-60 border ">
      <Link to="/" className="flex flex-col items-center">
        <AiFillHome />
        Home
      </Link>
      <Link to="/projects" className="flex flex-col items-center">
        <AiTwotoneProject /> Projects
      </Link>
      <Link to="/contact" className="flex flex-col items-center">
        <PhoneIcon /> Contact
      </Link>
    </header>
  );
}

export default Navbar;
