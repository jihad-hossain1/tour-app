import React from "react";
import TourGuideHomeBanner from "../../components/TourGuide/TourGuideHomeBanner";
import PopularTourGuides from "../../components/TourGuide/PopularTourGuides";

const TourGuide = () => {
  return (
    <div className="">
      <TourGuideHomeBanner />
      <main className="max-w-screen-xl mx-auto px-1">
        <PopularTourGuides />
      </main>
    </div>
  );
};

export default TourGuide;
