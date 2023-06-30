import React from "react";
import {
  FaCalendar,
  FaCertificate,
  FaClock,
  FaEnvelope,
  FaMailBulk,
  FaMapPin,
  FaPhone,
  FaSchool,
} from "react-icons/fa";

function Contact() {
  return (
    <div className="w-full h-screen p-4">
      <div className="relative flex flex-col justify-between border border-skin-800 h-full w-full p-8">
        <div>
          <div className="w-1/4 right-8 top-8 absolute">
            <img src="src/assets/mistu-1.png" alt="" className="object-cover" />
          </div>
          <h1 className="font-bold text-5xl mb-4">Suchismita Das</h1>
          <h1 className="text-3xl flex gap-2 mb-2">
            <FaClock /> 21 y/o
          </h1>
          <h1 className="flex gap-2 text-xl">
            <FaMapPin /> Kolkata, India
          </h1>
        </div>
        <div>
          <h1 className="flex gap-2 font-bold text-xl">
            <FaCertificate /> B.F.A Animation
          </h1>
          <h1 className="flex gap-2 text-lg">
            <FaSchool /> Amity University, Uttar Pradesh
          </h1>
        </div>
        <div>
          <h1 className="flex gap-2">
            <FaPhone /> +91 7044525357
          </h1>
          <h1 className="flex gap-2 ">
            <FaEnvelope /> suchismitadas.2002@gmail.com
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Contact;
