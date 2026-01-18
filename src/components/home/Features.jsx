import { FiShield, FiTruck, FiGlobe } from "react-icons/fi";

const Features = () => {
  const features = [
    {
      icon: <FiShield size={34} />,
      title: "Secure Payments",
      description: "Enterprise-grade security for all your transactions with 256-bit encryption.",
      color: "bg-blue-500",
    },
    {
      icon: <FiTruck size={34} />,
      title: "Fast Delivery",
      description: "Free shipping on orders over $50 worldwide. Track your package in real-time.",
      color: "bg-green-500",
    },
    {
      icon: <FiGlobe size={34} />,
      title: "Global Warranty",
      description: "1-year warranty valid in over 50 countries. dedicated support centers worldwide.",
      color: "bg-purple-500",
    },
  ];

  return (
    <section className="py-12 bg-base-100">
      <div className="text-center mb-16">
        <p className="text-primary font-bold tracking-widest text-sm mb-4">OUR PROMISE</p>
        <h2 className="text-4xl lg:text-5xl font-black mb-6">A Better Way to Shop</h2>
        <p className="text-gray-500 max-w-2xl mx-auto text-lg">
          We combine cutting-edge technology with premium craftsmanship to deliver an unparalleled shopping experience.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 px-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="group p-10 bg-base-200/50 rounded-3xl border border-transparent hover:border-primary/20 hover:bg-base-100 hover:shadow-2xl transition duration-500"
          >
            <div className={`w-16 h-16 ${feature.color} text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition duration-500`}>
              {feature.icon}
            </div>
            <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
            <p className="text-gray-500 leading-relaxed text-lg">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;

