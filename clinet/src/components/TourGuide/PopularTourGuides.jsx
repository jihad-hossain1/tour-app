import React from "react";
import SingleTourCard from "./SingleTourCard";

const PopularTourGuides = () => {
  return (
    <div className="mt-16 lg:mt-20">
      <h4 className="text-3xl ">
        <span className="border-b-[3px] pb-1 border-blue-600 w-fit">
          Popular
        </span>{" "}
        Tour Guides
      </h4>
      <div className="mt-10 lg:mt-16 grid grid-cols-1 lg:grid-cols-4 gap-4">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((guide, index) => (
          <SingleTourCard key={index} guide={guide} index={index} />
        ))}
      </div>
    </div>
  );
};

export default PopularTourGuides;
