import React from "react";
import { FaStar } from "react-icons/fa";

const reviews = [
  {
    name: "Emily R.",
    review:
      "Absolutely love my new TickTock watch! Elegant design and precise timekeeping.",
    rating: 5,
  },
  {
    name: "James K.",
    review:
      "High-quality wristwatch with premium materials. Really impressed with the craftsmanship!",
    rating: 4,
  },
  {
    name: "Sophia L.",
    review:
      "Stylish and modern. I get compliments on my TickTock watch all the time!",
    rating: 5,
  },
  {
    name: "Michael B.",
    review:
      "The watch is comfortable, sleek, and worth every penny. Excellent service too!",
    rating: 5,
  },
];

const Reviews = () => {
  return (
    <section className="">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold gradient-text">
          Customer Reviews
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Hear from our satisfied customers who love their TickTock watches.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {reviews.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center"
          >
            <div className="flex justify-center mb-4 text-yellow-400">
              {Array(item.rating)
                .fill(0)
                .map((_, i) => (
                  <FaStar key={i} className="w-5 h-5 text-purple-600" />
                ))}
            </div>
            <p className="text-gray-700 mb-4">&quot;{item.review}&quot;</p>
            <h3 className="text-gray-900 font-semibold">{item.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
