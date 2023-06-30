import React from "react";
import { useHorizontalScroll } from "../hooks/useHorizontalScroll";
import { FaStarOfLife } from "react-icons/fa";

const projects = [
  {
    name: "Abstract Symphony",
    img: "https://images.pexels.com/photos/17387588/pexels-photo-17387588/free-photo-of-guneste-kitap-okumak.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    date: "2023-03-15",
    category: "handrawn",
    description:
      "A mesmerizing hand-drawn artwork that explores the depths of human emotions through intricate patterns and vibrant colors.",
  },
  {
    name: "Digital Dreamscapes",
    img: "https://images.pexels.com/photos/17387588/pexels-photo-17387588/free-photo-of-guneste-kitap-okumak.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    date: "2023-06-01",
    category: "digital",
    description:
      "An immersive digital art experience that transports viewers into surreal landscapes, combining elements of nature and technology.",
  },
  {
    name: "Animated Illusions",
    img: "https://images.pexels.com/photos/17387588/pexels-photo-17387588/free-photo-of-guneste-kitap-okumak.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    date: "2023-04-20",
    category: "animation",
    description:
      "A captivating animation project that challenges the boundaries of perception, utilizing optical illusions and mesmerizing movements.",
  },
  {
    name: "Whimsical Wanderlust",
    img: "https://images.pexels.com/photos/17387588/pexels-photo-17387588/free-photo-of-guneste-kitap-okumak.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    date: "2023-",
    category: "handrawn",
    description:
      "A whimsical collection of hand-drawn illustrations inspired by travel and adventure, evoking a sense of curiosity and wanderlust.",
  },
  {
    name: "Whimsical Wanderlust",
    img: "https://images.pexels.com/photos/17387588/pexels-photo-17387588/free-photo-of-guneste-kitap-okumak.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    date: "2023-",
    category: "handrawn",
    description:
      "A whimsical collection of hand-drawn illustrations inspired by travel and adventure, evoking a sense of curiosity and wanderlust.",
  },
  {
    name: "Whimsical Wanderlust",
    img: "https://images.pexels.com/photos/17387588/pexels-photo-17387588/free-photo-of-guneste-kitap-okumak.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    date: "2023-",
    category: "handrawn",
    description:
      "A whimsical collection of hand-drawn illustrations inspired by travel and adventure, evoking a sense of curiosity and wanderlust.",
  },
  {
    name: "Whimsical Wanderlust",
    img: "https://images.pexels.com/photos/17387588/pexels-photo-17387588/free-photo-of-guneste-kitap-okumak.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    date: "2023-",
    category: "handrawn",
    description:
      "A whimsical collection of hand-drawn illustrations inspired by travel and adventure, evoking a sense of curiosity and wanderlust.",
  },
  {
    name: "Whimsical Wanderlust",
    img: "https://images.pexels.com/photos/17387588/pexels-photo-17387588/free-photo-of-guneste-kitap-okumak.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    date: "2023-",
    category: "handrawn",
    description:
      "A whimsical collection of hand-drawn illustrations inspired by travel and adventure, evoking a sense of curiosity and wanderlust.",
  },
  {
    name: "Digital Reflections",
    img: "https://images.pexels.com/photos/17387588/pexels-photo-17387588/free-photo-of-guneste-kitap-okumak.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    date: "2023-02-18",
    category: "digital",
    description:
      "An interactive digital art installation that reflects the viewer's image, creating a dynamic visual representation of self-identity and introspection.",
  },
];

const floatText = [
  "digital art",
  "oil painting",
  "water painting",
  "animation",
  "character design",
  "sketches",
];
console.log(floatText);

function Projects() {
  const scrollRef = useHorizontalScroll();
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <div className="flex flex-nowrap">
        <div className="floating-text-container">
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
      <div className="flex flex-col items-center relative">
        <div className="relative text-center mt-16 font-fancy font-bold text-4xl px-4">
          <h1 className="relative z-10 text-skin-100">My Work</h1>
          <div className="absolute h-full w-full top-0 left-0 bg-skin-800 rotate-6 z-0 "></div>
        </div>
      </div>
      <div className="flex items-center px-8 h-3/4">
        <div
          className="grid grid-rows-1 grid-flow-col h-3/4 gap-4 overflow-x-auto items-center"
          ref={scrollRef}
        >
          {projects.map((project) => {
            return (
              <div className="relative">
                <div className="relative z-10 border border-skin-500 bg-skin-100 w-96 h-96 hover:-translate-x-1 hover:-translate-y-1 transition-all ease-linear">
                  <div className="">
                    <img
                      src={project.img}
                      alt=""
                      className="object-cover h-48 w-96"
                    />
                  </div>
                  <p className="font-fancy text-xl font-bold mb-2">
                    {project.name}
                  </p>
                  <p className="font-fancy">{project.date}</p>
                  <p className="font-sans">{project.category}</p>
                  <p className="font-fancy">{project.description}</p>
                </div>
                <div className="absolute h-full w-full top-0 bottom-0 bg-skin-800 z-0"></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Projects;
