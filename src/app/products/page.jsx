import { getData } from "@/lib/getData";
import React from "react";
import ProductCard from "./components/ProductCard";

const page = async () => {
  const products = await getData("http://localhost:3000/api/products");
  return (
    <section className="mx-auto w-11/12 max-w-[1536px]">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center gradient-text mb-4">
        Watches
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-6">
        {products.map((item, idx) => (
          <ProductCard key={idx} product={item} />
        ))}
      </div>
    </section>
  );
};

export default page;
