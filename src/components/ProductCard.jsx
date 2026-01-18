import Link from "next/link";
import { FaStar } from "react-icons/fa";

const ProductCard = ({ product }) => {
  const { id, image, category, price, name, description, rating, reviews } =
    product || {};
  return (
    <Link href={`/products/${id}`} className="card bg-base-100 shadow-sm hover:shadow-xl hover:scale-102 transition">
      <figure>
        <img src={image} alt={name} className="h-56 w-full object-cover" />
      </figure>

      <div className="p-3">
        <div className="flex items-center justify-between">
          <p className="text-primary text-lg font-medium">{category}</p>
          <p className="text-xl font-medium">${price}</p>
        </div>

        <h2 className="text-xl font-bold my-2">{name}</h2>
        <p className="text-gray-500 mb-3">{description}</p>

        <div className="flex items-center gap-1 text-gray-600">
          <FaStar color="orange" />
          {rating} ({reviews})
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
