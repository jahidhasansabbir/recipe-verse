"use client";
import React from "react";
import GoogleLogIn from "../components/GoogleLogIn";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center ">
      {/* Card */}
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center gradient-text mb-3">
          Welcome Back !
        </h2>

        {/* Form */}
        <form className="space-y-5">
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>

          {/* Remember + Forgot */}
          <div className="flex items-center justify-end text-sm">
            <a href="#" className="text-blue-600 hover:underline">
              Forgot password?
            </a>
          </div>

          {/* Submit Button */}
          <button type="submit" className="w-full button">
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-4 my-6">
          <hr className="flex-grow border-gray-300" />
          <span className="text-sm text-gray-400">OR</span>
          <hr className="flex-grow border-gray-300" />
        </div>
       
       {/* Google button */}
        <GoogleLogIn/>
        {/* Register Link */}
        <p className="mt-6 text-center text-gray-500 text-sm">
          Don’t have an account?{" "}
          <a
            href="/auth/register"
            className="text-purple-600 font-semibold hover:underline"
          >
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
