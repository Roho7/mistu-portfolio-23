import { ArrowRightIcon } from "@chakra-ui/icons";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaStarOfLife } from "react-icons/fa";

const textArray = ["artist", "painter", "animator"];
const floatText = [
  "digital art",
  "oil painting",
  "water painting",
  "animation",
  "character design",
  "sketches",
];

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

  document.addEventListener("mousemove", shiftyBehaviour);
  function shiftyBehaviour(e) {
    document.querySelectorAll(".shifty").forEach(function (item) {
      var x = e.clientX * 0.0015;
      var y = e.clientY * 0.0015;

      item.style.transform = "translate(" + x + "%," + y + "%)";
    });
  }

  const navigate = useNavigate();
  const projectNavigate = () => {
    navigate("/projects");
  };
  return (
    <>
      <div className="absolute flex flex-nowrap -rotate-90 right-96 -left-96">
        <div className="floating-text-container ">
          {floatText.map((txt) => {
            return (
              <div className="floating-text">
                {txt}
                <FaStarOfLife className="mx-4" />
              </div>
            );
          })}
        </div>
        <div className="floating-text-container">
          {floatText.map((txt) => {
            return (
              <div className="floating-text">
                {txt} <FaStarOfLife className="mx-4" />
              </div>
            );
          })}
        </div>
      </div>
      <div className="relative h-full flex flex-col justify-center items-center rounded-xl text-skin-800">
        <div className="absolute w-20 top-10 left-10">
          <img src="./assets/logo-1.png" alt="" />
        </div>
        <div className="text-left z-10">
          <h1 className="text-2xl font-sans">Hi!</h1>
          <h1 className="text-6xl font-fancy">I'm Mistu</h1>
          <h1 className="bg-skin-100 px-2 text-lg font-fancy text-skin-500">
            I'm an artist. Welcome to my porfolio!
          </h1>
          <button
            className="py-1 px-4 font-fancy text-sm flex gap-2 items-center"
            onClick={projectNavigate}
          >
            Projects <ArrowRightIcon />
          </button>
        </div>
        <div className="w-1/4 absolute right-80">
          <img src="src/assets/mistu-1.png" alt="" className="shifty " />
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
