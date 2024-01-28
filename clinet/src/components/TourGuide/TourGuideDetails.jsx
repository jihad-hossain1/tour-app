import React from "react";
import ImageGellary from "./ImageGellary";
import ShareTourGuidePerson from "./TourGuideDetails/ShareTourGuidePerson";
import { Avatar, Rating, Typography } from "@mui/material";
import MessageTourGuide from "./TourGuideDetails/MessageTourGuide";
import { IoFastFoodOutline } from "react-icons/io5";
import SingleTourGuidePerson from "./TourGuideDetails/SingleTourGuidePerson";
import TourGuiderReview from "./TourGuideReview/TourGuiderReview";

const images = [
  { img: "https://i.ibb.co/3Mvr2cx/141344.jpg" },
  { img: "https://i.ibb.co/LrtBvtD/141347.jpg" },
  { img: "https://i.ibb.co/C2LnVJ7/141343.jpg" },
  { img: "https://i.ibb.co/0FHwFPv/141348.jpg" },
  { img: "https://i.ibb.co/PCLcQVt/141345.jpg" },
  { img: "https://i.ibb.co/mFYrB32/141346.jpg" },
  { img: "https://i.ibb.co/y8b22cj/141341.jpg" },
  { img: "https://i.ibb.co/1K2M2Sr/141349.jpg" },
];

const TourGuideDetails = () => {
  return (
    <section className="max-w-screen-xl mx-auto px-3 pt-16 ">
      <div className="my-4 py-2 bg-blue-100/25 rounded">
        <ShareTourGuidePerson />
      </div>
      <ImageGellary images={images} />
      {/* <div className="w-full bg-slate-400 h-1"></div> */}
      <section className="flex gap-10 my-12 ">
        {/* details section  */}
        <main className="relative flex flex-col gap-6 lg:gap-10 lg:w-[60%]">
          {/* tour guider avater with information */}
          <div className="flex gap-3 items-center">
            <Avatar variant="" src="" alt="guide image" />
            <div>
              <Typography gutterBottom variant="h5" component="div">
                <span className="text-blue-900">Rababe E.</span>
              </Typography>
              <div className="flex gap-1 items-center text-xs">
                <div className="w-fit flex items-center gap-1">
                  <Rating readOnly value={5} />
                  <span className="font-semibold"> {`${5.0}/5`}</span>
                </div>
                <div className="w-fit font-bold">{`(${1} reviews)`}</div>
              </div>
            </div>
          </div>
          {/* Tour Categories */}
          <div className="flex flex-col gap-10">
            <h4 className="text-3xl ">
              <span className="border-b-[3px] pb-1 border-blue-600 w-fit">
                Tour
              </span>{" "}
              Categories
            </h4>

            <div className="w-fit flex flex-col gap-4 items-center">
              <div className="bg-gray-300 p-4 rounded-full">
                <IoFastFoodOutline size={23} />
              </div>
              <h4 className="text-sm text-blue-800">Food & Drink</h4>
            </div>
          </div>
          {/* About Tour Guide */}
          <div className="flex flex-col gap-10">
            <h4 className="text-3xl ">
              <span className="border-b-[3px] pb-1 border-blue-600 w-fit">
                About
              </span>{" "}
              Tour Guide Rababe E.
            </h4>

            <div className="w-fit ">
              <p>
                Proud of the Moroccan long history and rich culture, my
                passion is to share my country's heritage with visitors.
                Holder of a masters degree in hotel operations management, and
                having accumulated an experience of 8 years as a travel agency
                manager, I am one of the fewer knowledgeable licensed female
                tour guides in Morocco.
              </p>
            </div>
          </div>
          {/* Important */}
          <div className="flex flex-col gap-10">
            <h4 className="text-3xl ">
              <span className="border-b-[3px] pb-1 border-blue-600 w-fit">
                Important
              </span>{" "}
            </h4>

            <div className="w-fit ">
              <p>
                For tours on Sundays, it's better to book at least 2 days
                before so I can have time to rearrange/postpone any family
                events.
              </p>
            </div>
          </div>
          {/* Tours */}
          <SingleTourGuidePerson personAllTour={images} />
          {/* Tour Reviews */}
          <TourGuiderReview />
        </main>

        {/* message section  */}
        <aside className="sticky top-20">
          <MessageTourGuide />
        </aside>
      </section>
    </section>
  );
};

export default TourGuideDetails;
