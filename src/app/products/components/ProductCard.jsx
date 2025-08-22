import React from "react";
import Image from "next/image";
import CardButton from "./CardButton";

const ProductCard = ({ product }) => {
  const fallback = "https://iili.io/K9mtpHu.jpg"; 
  const imageSrc =
    product.image && /^https?:\/\//i.test(product.image)
      ? product.image
      : fallback;
  return (
    <div className="card bg-base-100 shadow-sm">
      <figure>
        <Image
          src={imageSrc}
          alt={product.name}
          width={1000}
          height={1000}
          unoptimized
        />
      </figure>
      <div className="card-body flex flex-col justify-between">
        <h2 className="card-title gradient-text "> {product.name}</h2>
        <div>
          <ul className="text-sm text-gray-600 space-y-1">
            {product?.features?.slice(0, 3)?.map((feature, idx) => (
              <li key={idx} className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full button"></span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <div className="card-actions flex flex-col sm:flex-row items-center mt-4 justify-center gap-3 border-t border-gray-100 pt-3">
          {/* Price */}
          <div>
            <span className="font-semibold text-2xl text-purple-600">
              ${product.price}
            </span>
            <span className=" font-semibold text-2xl ml-3 text-gray-400">
              <del>${product.price + 30}</del>
            </span>
          </div>

          {/* Button */}
          <CardButton id={product._id} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
