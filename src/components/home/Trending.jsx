import React from "react";
import products from "@/data/products.json";
import ProductCard from "../ProductCard";
import Link from "next/link";

const Trending = () => {
  const trendingProducts = products.slice(0, 3);
  return (
    <section className="py-12">
      <div className="flex items-center justify-between mb-12">
        <div>
          <p className="text-primary font-medium mb-2">TRENDING NOW</p>
          <h2 className="text-4xl font-bold">Most Popular Products</h2>
        </div>
        <Link
          href="/products"
          className="btn btn-outline btn-primary rounded-full px-8"
        >
          View All Products
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {trendingProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Trending;
