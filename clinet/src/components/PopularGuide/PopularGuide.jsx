import React from "react";
import SingleTourCard from "../TourGuide/SingleTourCard";

const PopularGuide = () => {
  return (
    <div className="px-2">
      <div className="my-6 lg:my-10">
        <h4 className="text-3xl ">
          <span className="border-b-[3px] pb-1 border-blue-600 w-fit">
            Popular
          </span>{" "}
          Tour Guides
        </h4>
      </div>
      <div className="flex flex-col items-center md:grid lg:grid-cols-4 grid-cols-1 md:grid-cols-2 gap-4">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((guide, index) => (
          <SingleTourCard key={index} guide={guide} index={index} />
        ))}
      </div>
    </div>
  );
};

export default PopularGuide;
