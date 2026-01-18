import ProductCard from "@/components/ProductCard";
import React from "react";

const getAllProducts = async () => {
  const res = await fetch("http://localhost:3000/data/products.json");
  const data = await res.json();
  return data;
};

const ProductsPage = async () => {
  const products = await getAllProducts();
  return (
    <div>
      <h2 className="text-4xl pb-4 font-bold">
        All Products (<span className="text-primary">{products.length}</span>)
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
