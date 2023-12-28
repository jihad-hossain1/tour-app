import React from "react";
import { SiGooglemaps } from "react-icons/si";

const TourSpotDetails = ({ data }) => {
  let details = data?.singleTourspotDetails?.description;
  return (
    <>
      <img
        src={data?.singleTourspotDetails?.photo}
        className="object-cover rounded-lg shadow-[2px_4px_15px_rgba(0,0,0,0.25)]"
        alt="Tour spot image"
      />
      <div className="w-fit my-6 flex items-center gap-2 bg-zinc-200 rounded-md shadow-sm px-2">
        <p>{data?.singleTourspotDetails?.city?.name}</p>
        <SiGooglemaps className="text-gray-600" />
      </div>
      <h4 className="font-semibold text-xl md:text-3xl">
        {data?.singleTourspotDetails?.name}
      </h4>
      <p className="text_under">
        <span className="c_underline">Tour Description: </span>
        {details}
      </p>
      <p className="text_under">
        <span className="c_underline">How To Go There: </span>
        {data?.singleTourspotDetails?.howToGoThere}
      </p>
      <p className="text_under">
        <span className="c_underline">How To Stay There: </span>
        {data?.singleTourspotDetails?.howToStayThere}
      </p>
      <p className="text_under">
        <span className="c_underline">How Do Here: </span>
        {data?.singleTourspotDetails?.howDoHere}
      </p>
      <p className="text_under">
        <span className="c_underline">Where To Eat: </span>
        {data?.singleTourspotDetails?.whereToEat}
      </p>
      <p className="text_under">
        <span className="c_underline">Tour Tips Guide: </span>
        {data?.singleTourspotDetails?.tourTipsGuide}
      </p>
      <p className="text_under">
        <span className="c_underline">Top Tour Place: </span>
        {data?.singleTourspotDetails?.topTourPlace}
      </p>
    </>
  );
};

export default TourSpotDetails;
