import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center max-w-7xl mx-auto">
      <div className="w-full h-full">
        <img
          src="/Screenshot_2025-01-05-20-47-14-434_com.ubercab.jpg"
          className="w-full object-cover md:h-[500px] lg:h-[600px]"
          alt="Uber banner"
        />
      </div>
      <div className="px-4 md:px-8 lg:px-12 flex justify-center flex-col items-center">
        <h1 className="mt-5 text-2xl md:text-3xl lg:text-4xl self-start font-bold">
          Get started with Uber
        </h1>
        <Link
          to="/login"
          className="flex mt-3 font-bold bg-black text-white w-full md:w-2/3 lg:w-1/2 justify-center py-3 rounded hover:bg-gray-800 transition-colors"
        >
          Continue
        </Link>
      </div>
    </div>
  );
};

export default Home;
