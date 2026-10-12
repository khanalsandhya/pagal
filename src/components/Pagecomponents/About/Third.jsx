import React from 'react';
import { BiBuoy } from "react-icons/bi";

export default function Third() {
  const box = [
    {
      icon: <BiBuoy size={30} />,
      title: "Radical Transparency",
      description:
        "We believe salary ranges, company culture, and hiring timelines should be visible upfront.",
    },
    {
      icon: <BiBuoy size={30} />,
      title: "Quality First",
      description:
        "We connect talented professionals with companies that value their skills.",
    },
    {
      icon: <BiBuoy size={30} />,
      title: "Community",
      description:
        "We build meaningful relationships between employers and job seekers.",
    },
  ];

  return (
    <div className="bg-[#101827] h-120 w-full py-20">
      
      {/* Heading */}
      <div className="text-white text-center">
        <h1 className="text-4xl font-bold">
          Our Mission
        </h1>

        <p className="text-xl mt-6 px-4 max-w-3xl mx-auto text-gray-400">
          The principles that drive everything we do at HireHub.
        </p>
      </div>

      {/* Boxes */}
      <div className="flex justify-center items-stretch gap-6 mt-12 px-6">
        {box.map((item) => (
          <div
            key={item.title}
            className="w-1/3 bg-[#1A2333] text-white p-6 rounded-xl text-center"
          >
            <div className="flex justify-center mb-4 text-blue-400">
              {item.icon}
            </div>

            <h2 className="text-xl font-bold mb-3">
              {item.title}
            </h2>

            <p className="text-gray-400">
              {item.description}
            </p>
          </div>
        ))}
      </div>

    </div>
  );
}
