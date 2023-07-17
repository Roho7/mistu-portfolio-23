import React from "react";
import { ImCross } from "react-icons/im";

function ProjectModal(props) {
  const data = props.data[0];
  const opened = props.open;
  console.log(data);
  return (
    <div className="absolute z-50 p-4 h-full w-full m-1  bg-skin-500 text-skin-800 ">
      {data.name}
      <ImCross />
    </div>
  );
}

export default ProjectModal;
