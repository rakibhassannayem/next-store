import { FaStar, FaHeart, FaShoppingCart, FaCheckCircle } from "react-icons/fa";
import products from "@/data/products.json";

const ProductDetails = async ({ params }) => {
  const { id } = await params;
  const product = products.find((i) => i.id === id);
  const { name, price, category, description, image, rating, reviews, specs } =
    product;

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Image Section */}
        <div className="relative">
          <img src={image} alt={name} className="w-full rounded-xl shadow-lg" />
          <span className="badge badge-primary absolute top-4 left-4">
            {category}
          </span>
        </div>

        {/* Details Section */}
        <div className="space-y-5">
          <h1 className="text-3xl font-bold">{name}</h1>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <FaStar className="text-yellow-400" />
            <span className="font-semibold">{rating}</span>
            <span className="text-gray-500">({reviews} reviews)</span>
          </div>

          {/* Price */}
          <p className="text-2xl font-bold text-primary">${price}</p>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed">{description}</p>

          {/* Specs */}
          <div>
            <h3 className="font-semibold mb-2">Key Features</h3>
            <ul className="space-y-2">
              {specs.map((spec, index) => (
                <li key={index} className="flex items-center gap-2">
                  <FaCheckCircle className="text-success" />
                  <span>{spec}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Actions */}
          <div className="flex gap-4 pt-4">
            <button className="btn btn-primary flex-1 gap-2">
              <FaShoppingCart />
              Add to Cart
            </button>
            <button className="btn btn-outline btn-secondary gap-2">
              <FaHeart />
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
