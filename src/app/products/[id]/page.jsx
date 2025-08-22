import { getData } from "@/lib/getData";
import React from "react";
import Image from "next/image";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";

const page = async ({ params }) => {
  const { id } = await params;
  const {
    name,
    brand,
    price,
    description,
    features,
    image,
    rating,
    totalSells,
    category,
  } = await getData(`http://localhost:3000/api/products/${id}`);
  const fallback = "https://iili.io/K9mtpHu.jpg";
  const imageSrc =
    image && /^https?:\/\//i.test(image)
      ? image
      : fallback;
  return (
    <div className="w-11/12 mx-auto max-w-[1536px]">
      <div className="bg-white shadow-xl rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="relative w-full h-72 sm:h-96 lg:h-full">
          <Image src={imageSrc} alt={name} fill className="object-cover" />
        </div>

        {/* Product Info */}
        <div className="p-6 sm:p-8 flex flex-col justify-between">
          <div>
            {/* Title + Brand */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold gradient-text  mb-2">
              {name}
            </h1>
            <p className="text-gray-500 text-base sm:text-lg mb-4">
              {brand} | {category}
            </p>

            {/* Rating + Price */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-6 mb-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) =>
                  i < Math.round(rating) ? (
                    <AiFillStar
                      key={i}
                      className="text-purple-600 w-5 h-5 sm:w-6 sm:h-6"
                    />
                  ) : (
                    <AiOutlineStar
                      key={i}
                      className="text-gray-300 w-5 h-5 sm:w-6 sm:h-6"
                    />
                  )
                )}
                <span className="text-sm sm:text-base text-gray-600">
                  ({rating} / 5)
                </span>
              </div>
              <p className="text-xl sm:text-2xl lg:text-3xl font-semibold text-purple-600">
                ${price}
              </p>
            </div>

            {/* Description */}
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base mb-6">
              {description}
            </p>

            {/* Features */}
            {features?.length > 0 && (
              <div className="mb-6">
                <h2 className="text-lg font-semibold mb-2">Key Features:</h2>
                <ul className="text-sm text-gray-600 space-y-1">
                  {features?.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full button"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-6 border-t pt-4 border-gray-300">
            <p className="text-sm text-gray-500">
              Total Sells: <span className="font-semibold">{totalSells}</span>
            </p>
            <button className="flex items-center justify-center gap-2 button">
              <FaShoppingCart className="w-5 h-5" /> Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
