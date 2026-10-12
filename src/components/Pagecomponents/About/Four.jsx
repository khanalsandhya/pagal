import React from 'react';
import kta from '../../../assets/kta.png';
import kti from '../../../assets/kti.png';
import color from '../../../assets/color.png';
import chasmis from '../../../assets/chasmis.png';

export default function Four() {
  const image = [
    {
      image: kta,
      name: "Alex Rivera",
      position: "CEO & Co-Founder",
    },
    {
      image: kti,
      name: "Maya Johnson",
      position: "CTO & Co-Founder",
    },
    {
      image: color,
      name: "Sarah Wilson",
      position: "Head of Design",
    },
    {
        image: chasmis,
        name: "Sarah Wilson",
        position: "Head of Design",
      },
  ];

  return (
    <div>
      <div className="bg-black min-h-120 py-20">

        {/* Heading */}
        <div className="text-center text-white">
          <h1 className="text-3xl font-serif">
            Meet Our Team
          </h1>

          <p className="text-xl text-gray-500 font-light mt-4">
            The people behind the platform that is changing how the world hires.
          </p>
        </div>

        {/* Team Cards */}
        <div className="flex justify-center gap-4 mt-12 px-10">
          {image.map((item) => (
            <div
              key={item.name}
              className="w-1/3  text-white p-6 rounded-xl text-center"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-32 h-32 object-cover rounded-full mx-auto mb-5"
              />

              <h2 className="text-xl font-bold">
                {item.name}
              </h2>

              <p className="text-gray-400 mt-2">
                {item.position}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
