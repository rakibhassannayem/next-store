import React from "react";

const ProductDetails = async ({ params }) => {
  const { id } = await params;
  return <div>Product Details of id {id}</div>;
};

export default ProductDetails;
