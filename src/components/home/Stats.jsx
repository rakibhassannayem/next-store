import React from "react";
import { FiUsers, FiShoppingBag, FiGlobe, FiSmile } from "react-icons/fi";

const Stats = () => {
  const stats = [
    {
      id: 1,
      label: "Happy Customers",
      value: "50K+",
      icon: <FiSmile className="w-8 h-8" />,
    },
    {
      id: 2,
      label: "Products Sold",
      value: "100K+",
      icon: <FiShoppingBag className="w-8 h-8" />,
    },
    {
      id: 3,
      label: "Countries Reach",
      value: "40+",
      icon: <FiGlobe className="w-8 h-8" />,
    },
    {
      id: 4,
      label: "Expert Support",
      value: "24/7",
      icon: <FiUsers className="w-8 h-8" />,
    },
  ];

  return (
    <section className="py-12 bg-primary text-primary-content rounded-3xl">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 px-8">
        {stats.map((stat) => (
          <div key={stat.id} className="flex flex-col items-center text-center">
            <div className="mb-4 p-3 bg-white/10 rounded-2xl">{stat.icon}</div>
            <div className="text-4xl font-bold mb-2">{stat.value}</div>
            <div className="text-primary-content/80 font-medium">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
