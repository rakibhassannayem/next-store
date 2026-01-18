import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <div className="relative overflow-hidden bg-base-100 rounded-3xl py-12">
      <div className="flex flex-col lg:flex-row items-center justify-between min-h-[500px] gap-12 px-8 lg:px-16 relative z-10">
        <div className="flex-1 text-center lg:text-left">
          <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full font-bold mb-6">
            ✨ NEW COLLECTION 2024
          </div>
          <h1 className="text-5xl lg:text-7xl font-black leading-tight mb-6">
            Data to enrich your <br />
            <span className="text-primary">online business</span>
          </h1>
          <p className="text-xl text-gray-500 mb-10 max-w-xl">
            Discover our premium collection of gadgets, accessories, and lifestyle
            products designed to elevate your daily routine. Expertly crafted for the modern professional.
          </p>

          <Link
            href="/products"
            className="btn btn-primary btn-lg rounded-full px-10 text-white shadow-lg shadow-primary/30"
          >
            Shop Now
          </Link>
        </div>

        <div className="flex-1 relative w-full max-w-2xl">
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl transform lg:rotate-3 hover:rotate-0 transition duration-700">
            <img
              className="w-full h-[500px] object-cover"
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80"
              alt="Shopping"
            />
          </div>
          {/* Decorative elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl"></div>
        </div>
      </div>

      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none"></div>
    </div>
  );
};

export default Banner;

