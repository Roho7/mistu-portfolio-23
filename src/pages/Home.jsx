import { ArrowRightIcon } from "@chakra-ui/icons";
import React, { useState, useEffect } from "react";

const textArray = ["artist", "painter", "animator"];

function Home() {
  const [text, setText] = useState(0);
  useEffect(() => {
    document.querySelector(".variable-text").classList.remove("animate");

    const interval = setInterval(() => {
      document.querySelector(".variable-text").classList.add("animate");
      setText((prevIndex) => (prevIndex + 1) % textArray.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [textArray]);

  return (
    <>
      <div className="relative h-full flex flex-col justify-center items-center rounded-xl text-skin-800">
        <div className="text-left z-10">
          <div className="p-2 mb-4 border w-20 border-skin-800">LOGO</div>
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
        <div className="font-fancy font-bold rotate-90 text-6xl absolute right-64 text-skin-500">
          <p className="variable-text absolute right-2 top-0">
            {textArray[text]}
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;
