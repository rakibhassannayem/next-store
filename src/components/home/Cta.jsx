import Link from "next/link";
import React from "react";

const Cta = () => {
  return (
    <section className="pt-12 pb-12">
      <div className="bg-primary p-12 lg:p-24 rounded-3xl text-center relative overflow-hidden">
        {/* Decorative Circles */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 relative z-10">
          Ready to Upgrade Your Life?
        </h2>
        <p className="text-primary-content/80 text-xl mb-10 max-w-2xl mx-auto relative z-10">
          Join our newsletter and get 15% off your first purchase. Stay updated
          with the latest trends and exclusive offers.
        </p>


        <Link href={'/products'} className="btn btn-neutral h-14 rounded-full px-10 text-lg border-none hover:bg-black">
          Get Started
        </Link>

      </div>
    </section>
  );
};

export default Cta;
