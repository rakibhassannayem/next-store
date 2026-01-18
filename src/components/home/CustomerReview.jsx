import React from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const CustomerReview = () => {
  const reviews = [
    {
      id: 1,
      name: "Alex Johnson",
      role: "Tech Enthusiast",
      text: "The build quality of the headphones is incredible. The noise cancellation is a game-changer for my daily commute.",
      rating: 5,
      avatar: "https://i.pravatar.cc/150?u=1",
    },
    {
      id: 2,
      name: "Sarah Miller",
      role: "Digital Nomad",
      text: "Love the minimalist design of the desk lamp. It fits perfectly with my workspace and the light modes are very helpful.",
      rating: 4,
      avatar: "https://i.pravatar.cc/150?u=2",
    },
    {
      id: 3,
      name: "David Chen",
      role: "Software Engineer",
      text: "The mechanical keyboard feels amazing to type on. The aluminum chassis gives it a premium weight and feel.",
      rating: 5,
      avatar: "https://i.pravatar.cc/150?u=3",
    },
  ];

  return (
    <section className="py-12">
      <div className="text-center mb-16">
        <p className="text-primary font-medium mb-2">TESTIMONIALS</p>
        <h2 className="text-4xl font-bold">What Our Customers Say</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-base-200 p-8 rounded-2xl relative pt-12"
          >
            <div className="absolute top-0 left-8 -translate-y-1/2 bg-primary p-4 rounded-xl shadow-lg">
              <FaQuoteLeft className="text-white text-xl" />
            </div>
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className={
                    i < review.rating ? "text-orange-400" : "text-gray-300"
                  }
                />
              ))}
            </div>
            <p className="text-lg mb-6 italic text-gray-600">"{review.text}"</p>
            <div className="flex items-center gap-4">
              <img
                src={review.avatar}
                alt={review.name}
                className="w-12 h-12 rounded-full border-2 border-primary"
              />
              <div>
                <p className="font-bold">{review.name}</p>
                <p className="text-sm text-gray-500">{review.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomerReview;