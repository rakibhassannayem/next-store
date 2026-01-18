import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center py-20">
      <p className="text-6xl font-extrabold">
        Data to enrich your <br />
        <span className="text-primary">online business</span>
      </p>
      <p className="text-xl text-gray-500 py-5 max-w-3xl mx-auto">
        Discover our premium collection of gadgets, accessories, and lifestyle
        products designed to elevate your daily routine.
      </p>
      <div className="flex gap-3">
        <Link href={"/products"} className="btn btn-primary text-xl text-white p-7 rounded-lg">
          Shop Now
        </Link>

        <Link href={"/products"} className="btn btn-soft btn-primary text-xl hover:text-white p-7 rounded-lg">
          View Demo
        </Link>
      </div>
      {/* <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 bg-gray-50 flex items-center justify-center">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80"
          alt="Shopping"
        />
      </div> */}
    </div>
  );
};

export default Banner;
