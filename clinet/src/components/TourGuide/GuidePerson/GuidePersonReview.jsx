import React from "react";
import GuideReserve from "./GuideReserve";
import ReviewGuideNav from "./ReviewGuideNav";
import ImageGellary from "../ImageGellary";
import { IoPeopleCircleOutline } from "react-icons/io5";
import { CiClock2, CiCalendarDate, CiLocationOn, CiLock } from "react-icons/ci";
import { LuMessagesSquare } from "react-icons/lu";
import { Avatar, Rating, Typography } from "@mui/material";
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

const GuidePersonReview = () => {
  return (
    <main className="min-h-screen max-w-screen-xl mx-auto pt-16 px-2">
      <ReviewGuideNav />
      <ImageGellary images={images} />
      <div>
        <section className="lg:relative my-12 ">
          <main className="flex flex-col gap-6 lg:gap-10 lg:w-[60%]">
            <div className="flex flex-col gap-3">
              <h4 className="text-3xl font-semibold">
                Cultural day tour of Tangier
              </h4>
              <h5 className="uppercase w-fit px-3 py-1 rounded shadow-sm bg-blue-500 text-zinc-50 text-xs">
                ART, CULTURE, & HISTORICAL
              </h5>
            </div>
            <hr className="h-1 my-5" />
            <div className="lg:flex  gap-5 lg:gap-10">
              <div className="flex gap-4 flex-col">
                <div className="flex items-center gap-2">
                  <CiLocationOn size={23} />
                  <span className="text-lg">{`Tangier`}</span>
                </div>
                <div className="flex items-center gap-2">
                  <LuMessagesSquare size={23} />
                  <span className="text-lg">{`English, Arabic (Native), French`}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CiClock2 size={23} />
                  <span className="text-lg">{`6 hours 30 min`}</span>
                </div>
              </div>
              <div className="flex gap-4 flex-col">
                <div className="flex items-center gap-2">
                  <CiLock size={23} />
                  <span className="text-lg">{`Private tour (only you and your group)`}</span>
                </div>
                <div className="flex items-center gap-2">
                  <IoPeopleCircleOutline size={23} />
                  <span className="text-lg">{`Up to 14 people`}</span>
                </div>
              </div>
            </div>
            <div className="mt-2">
              <p>
                This cultural tour is a combination of sightseeing and walking.
                Start with a drive along Tangier's International districts
                before heading to Cap Spartel and the Caves of Hercules passing
                through California zone where the Royal palace is located. The
                second part would be a walking tour of the Kasbah, a
                fortification dating from the 15th century, and its museum which
                served as a Royal palace since the 17th century. Visit the
                vibrant Medina, its monuments, and its souks including the food
                market.
              </p>
            </div>
            <div className="flex gap-3 items-center">
              <Avatar variant="" src="" alt="guide image" />
              <div>
                <Typography gutterBottom variant="h5" component="div">
                  <span className="text-blue-900">Rababe E.</span>
                </Typography>
                <div className="flex gap-1 items-center text-xs">
                  <div className="w-fit flex items-center gap-1">
                    <Rating size="small" readOnly value={5} />
                    <span className="font-semibold"> {`${5.0}/5`}</span>
                  </div>
                  <div className="w-fit font-bold">{`(${1} reviews)`}</div>
                </div>
              </div>
            </div>
          </main>
          <aside className="lg:absolute top-0 right-0">
            <GuideReserve />
          </aside>
        </section>
      </div>
    </main>
  );
};

export default GuidePersonReview;
