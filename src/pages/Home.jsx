import { ArrowRightIcon } from "@chakra-ui/icons";
import React from "react";

function Home() {
  return (
    <div className="relative h-full flex flex-col justify-center items-center rounded-xl text-skin-800">
      <div className="text-left z-10 ">
        <h1 className="text-2xl font-sans">Hi!</h1>
        <h1 className="text-6xl font-fancy">I'm Mistu</h1>
        <h1 className="text-lg font-fancy">
          I'm an artist. Welcome to my porfolio!
        </h1>
        <button className="py-1 px-4 font-fancy text-sm flex gap-2 items-center">
          Projects <ArrowRightIcon />
        </button>
      </div>
      <div className="w-1/4 absolute right-80">
        <img src="src/assets/mistu-1.png" alt="" />
      </div>
    </div>
  );
}

export default Home;
