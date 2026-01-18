import React from "react";

const loading = () => {
  return (
    <div>
      <h2 className="text-4xl pb-4 font-bold">
        All Products (0)
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[...Array(10)]?.map((_, ind) => {
          return (
            <div key={ind} className="flex flex-col gap-4">
              <div className="skeleton h-32 w-full"></div>
              <div className="skeleton h-4 w-28"></div>
              <div className="skeleton h-4 w-full"></div>
              <div className="skeleton h-4 w-full"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default loading;
