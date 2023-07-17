import React, { useState } from "react";
import { useHorizontalScroll } from "../hooks/useHorizontalScroll";
import { FaStarOfLife } from "react-icons/fa";
import ProjectModal from "../components/ProjectModal";

const projects = [
  {
    id: "001",
    name: "Abstract Symphony",
    img: "https://images.pexels.com/photos/17387588/pexels-photo-17387588/free-photo-of-guneste-kitap-okumak.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    date: "2023-03-15",
    category: "handrawn",
    description:
      "A mesmerizing hand-drawn artwork that explores the depths of human emotions through intricate patterns and vibrant colors.",
  },
  {
    id: "002",
    name: "Digital Dreamscapes",
    img: "https://images.pexels.com/photos/17387588/pexels-photo-17387588/free-photo-of-guneste-kitap-okumak.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    date: "2023-06-01",
    category: "digital",
    description:
      "An immersive digital art experience that transports viewers into surreal landscapes, combining elements of nature and technology.",
  },
  {
    id: "003",
    name: "Animated Illusions",
    img: "https://images.pexels.com/photos/17387588/pexels-photo-17387588/free-photo-of-guneste-kitap-okumak.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    date: "2023-04-20",
    category: "animation",
    description:
      "A captivating animation project that challenges the boundaries of perception, utilizing optical illusions and mesmerizing movements.",
  },
  {
    id: "004",
    name: "Whimsical Wanderlust",
    img: "https://images.pexels.com/photos/17387588/pexels-photo-17387588/free-photo-of-guneste-kitap-okumak.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    date: "2023-",
    category: "handrawn",
    description:
      "A whimsical collection of hand-drawn illustrations inspired by travel and adventure, evoking a sense of curiosity and wanderlust.",
  },
  {
    id: "005",
    name: "Whimsical Wanderlust",
    img: "https://images.pexels.com/photos/17387588/pexels-photo-17387588/free-photo-of-guneste-kitap-okumak.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    date: "2023-",
    category: "handrawn",
    description:
      "A whimsical collection of hand-drawn illustrations inspired by travel and adventure, evoking a sense of curiosity and wanderlust.",
  },
  {
    id: "006",
    name: "Whimsical Wanderlust",
    img: "https://images.pexels.com/photos/17387588/pexels-photo-17387588/free-photo-of-guneste-kitap-okumak.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    date: "2023-",
    category: "handrawn",
    description:
      "A whimsical collection of hand-drawn illustrations inspired by travel and adventure, evoking a sense of curiosity and wanderlust.",
  },
  {
    id: "007",
    name: "Whimsical Wanderlust",
    img: "https://images.pexels.com/photos/17387588/pexels-photo-17387588/free-photo-of-guneste-kitap-okumak.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    date: "2023-",
    category: "handrawn",
    description:
      "A whimsical collection of hand-drawn illustrations inspired by travel and adventure, evoking a sense of curiosity and wanderlust.",
  },
  {
    id: "008",
    name: "Whimsical Wanderlust",
    img: "https://images.pexels.com/photos/17387588/pexels-photo-17387588/free-photo-of-guneste-kitap-okumak.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    date: "2023-",
    category: "handrawn",
    description:
      "A whimsical collection of hand-drawn illustrations inspired by travel and adventure, evoking a sense of curiosity and wanderlust.",
  },
  {
    id: "009",
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

function Projects() {
  const scrollRef = useHorizontalScroll();
  const [modal, setModal] = useState(false);
  const [modalData, setModalData] = useState([]);

  const handleModalOpen = (id) => {
    setModal(!modal);
    console.log("modal opened");
    const selectedProject = projects.filter((project) => project.id === id);
    setModalData(selectedProject);
    console.log("hey modal" + modalData);
  };

  return (
    <div className="h-screen relative flex justify-center items-center">
      {modal && <ProjectModal data={modalData} />}
      <div className="relative flex flex-col justify-between h-screen overflow-hidden gap-8">
        {/* --------STREAMER TEXT-------- */}
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
        {/* --------PROJECT PAGE-------- */}

        <div className="flex flex-col items-center relative">
          <div className="relative text-center mt-4 font-fancy font-bold text-4xl px-4">
            <h1 className="relative z-10 text-skin-100">My Work</h1>
            <div className="absolute h-full w-full top-0 left-0 bg-skin-800 rotate-6 z-0 "></div>
          </div>
        </div>
        <div className="flex px-8 h-full">
          <div
            className="grid grid-rows-1 grid-flow-col sm:grid-rows-2 h-full gap-4 overflow-x-auto items-center overflow-y-visible"
            ref={scrollRef}
          >
            {/* --------PROJECT MAP-------- */}
            {projects.map((project, index) => {
              return (
                <>
                  <div
                    className="relative"
                    key={index}
                    onClick={() => handleModalOpen(project.id)}
                  >
                    <div className="relative z-10 border border-skin-500 bg-skin-100 w-96 h-96 hover:-translate-x-1 hover:-translate-y-1 transition-all ease-linear">
                      <div>
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
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
