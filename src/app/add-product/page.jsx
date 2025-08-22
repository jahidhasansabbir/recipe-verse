"use client";
import { postData } from "@/lib/postData";
import axios from "axios";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";

const page = () => {


  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const brand = form.brand.value;
    const category = form.category.value;
    const price = parseInt(form.price.value);
    const rating = form.rating.value;
    const totalSells = form.totalSells.value;
    const image = form.image.value;
    const description = form.description.value;
    const feature = form.features.value;
    const features = feature.split(',');
    
    const formData = {
      name, brand, category, price, rating, totalSells, image, description, features
    }

    axios.post('http://localhost:3000/api/products', formData)
    .then(res=> console.log(res.data))
    .catch(err=>console.log(err))

    // console.log(formData);
    
  };

  return (
    <div className="w-11/12 max-w-[900px] mx-auto py-10">
      <h1 className="text-3xl sm:text-4xl font-bold gradient-text mb-10 text-center tracking-tight">
        Add New Product
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-2xl rounded-2xl p-8 sm:p-10 space-y-6 border border-gray-100"
      >
        {/* Grid Inputs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <input
            type="text"
            name="name"
            placeholder="Product Name"
            
            className="input border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-purple-600 focus:outline-none transition"
            required
          />
          <input
            type="text"
            name="brand"
            placeholder="Brand"
            className="input border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-purple-600 focus:outline-none transition"
            required
          />
          <input
            type="text"
            name="category"
            placeholder="Category"
            className="input border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-purple-600 focus:outline-none transition"
            required
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            className="input border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-purple-600 focus:outline-none transition"
            required
          />
          <input
            type="number"
            name="rating"
            placeholder="Rating"
            step="0.1"
            max="5"
            className="input border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-purple-600 focus:outline-none transition"
            required
          />
          <input
            type="number"
            name="totalSells"
            placeholder="Total Sells"
            className="input border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-purple-600 focus:outline-none transition"
          />
          <input
            type="text"
            name="image"
            placeholder="Photo url"
           className="input border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-purple-600 focus:outline-none transition"
            required
          />
        </div>

        {/* Description */}
        <textarea
          name="description"
          placeholder="Description"
          rows="4"
          className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-purple-600 focus:outline-none transition resize-none"
          required
        ></textarea>

        {/* Features */}
        <input
          type="text"
          name="features"
          placeholder="Features (comma separated)"
          className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-purple-600 focus:outline-none transition"
        />

        {/* Submit */}
        <button
          type="submit"
          className="button w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3 text-lg rounded-xl shadow-md hover:shadow-lg transition disabled:opacity-70 disabled:cursor-not-allowed"
        >
          <FaPlus className="text-lg" />
          {"Add Product"}
        </button>
      </form>
    </div>
  );
};

export default page;
