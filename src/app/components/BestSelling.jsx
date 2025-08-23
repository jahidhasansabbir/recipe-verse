import axios from 'axios';
import React from 'react';
import BestSellingCard from "./BestSellingCard"
const BestSelling = async() => {
    const res = await axios(`${process.env.NEXT_PUBLIC_URL}/api/best-selling-products`)
    return (
        <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-center gradient-text mb-4">
        Best Selling Watches
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-6">
        {res.data?.map((item, idx) => (
          <BestSellingCard key={idx} product={item} />
        ))}
      </div>
        </div>
    );
};

export default BestSelling;