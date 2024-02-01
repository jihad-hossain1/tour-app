import React from "react";
import SingleTourCard from "../TourGuide/SingleTourCard";
import Title from "../Title/Title";

const PopularGuide = () => {
  return (
    <div className="px-2">
      <Title firstText="Popular" secondText="Tour Guides" />
      <div className="flex flex-col items-center md:grid lg:grid-cols-4 grid-cols-1 md:grid-cols-2 gap-4">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((guide, index) => (
          <SingleTourCard key={index} guide={guide} index={index} />
        ))}
      </div>
    </div>
  );
};

export default PopularGuide;
