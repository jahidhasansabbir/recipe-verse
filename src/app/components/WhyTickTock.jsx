import React from "react";
import { FaGem, FaRegClock, FaCogs, FaShieldAlt } from "react-icons/fa";

const WhyTickTock = () => {
  const reasons = [
    {
      icon: <FaRegClock className="w-10 h-10 text-purple-500" />,
      title: "Precision Timekeeping",
      description:
        "Our wrist watches use high-accuracy movements to keep you on time, always.",
    },
    {
      icon: <FaGem className="w-10 h-10 text-purple-500" />,
      title: "Premium Materials",
      description:
        "Crafted with stainless steel, sapphire glass, and fine leather straps for durability and elegance.",
    },
    {
      icon: <FaCogs className="w-10 h-10 text-purple-500" />,
      title: "Innovative Designs",
      description:
        "Stylish, modern, and timeless designs that complement every outfit and occasion.",
    },
    {
      icon: <FaShieldAlt className="w-10 h-10 text-purple-500" />,
      title: "Warranty & Service",
      description:
        "Enjoy a 1-year warranty and world-class customer support for peace of mind.",
    },
  ];

  return (
    <section className="">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text gradient-text">
          Why TickTock?
        </h2>

        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Discover why TickTock is the preferred choice for luxury clocks.
        </p>
      </div>

      {/* Card container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Cards */}
        {reasons.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center"
          >
            <div className="flex justify-center mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              {item.title}
            </h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyTickTock;
