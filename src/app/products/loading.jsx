import React from "react";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      {/* Gradient Spinner */}
      <div className="relative w-20 h-20 mb-6">
        <div className="absolute inset-0 rounded-full border-4 border-t-transparent border-indigo-600 animate-spin"></div>
        <div className="absolute inset-0 rounded-full border-4 border-t-transparent border-purple-600 animate-spin animation-delay-200"></div>
      </div>


      {/* Loading Text */}
      <p className="text-gray-700 text-lg sm:text-xl font-semibold gradient-text text-center">
        Loading, please wait...
      </p>
    </div>
  );
};

export default Loading;
