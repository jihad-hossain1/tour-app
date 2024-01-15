import React from "react";
import GuideReserve from "./GuideReserve";
import ReviewGuideNav from "./ReviewGuideNav";
import ImageGellary from "../ImageGellary";
import { IoPeopleCircleOutline } from "react-icons/io5";
import { CiClock2, CiCalendarDate, CiLocationOn, CiLock } from "react-icons/ci";
import { LuMessagesSquare } from "react-icons/lu";
import { Avatar, Rating, Typography } from "@mui/material";
import TourMaintainHistry from "./TourMaintainHistry";
import PersonalizedTour from "./PersonalizedTour";
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
const scheduleReview = [
  {
    time: "09.00 AM",
    title: "Meeting Point",
    details: "At your hotel or Tangier port/airport",
  },
  {
    time: "09.00 AM",
    title: "Pick up from your hotel, or Tangier's port/airport",
    details:
      "Get picked up by Rabab, a female licensed local tour guide, and a driver from your hotel, or from the port/airport if you are coming by ferry or by flight. Have a brief introduction of how your day will be spent and start your tour immediately.",
  },
  {
    time: "09:30 AM",
    title: "Boulevard Mohammed 5th, French & Spanish districts",
    details:
      "Have a nice drive through the main avenues of Tangier including Mohammed the 5th Boulevard, Louis Pasteur Boulevard, in addition to the French and Spanish districts, and learn about Tangier when it was an International Zone.",
  },
  {
    time: "10:30 AM",
    title: "Cap Spartel",
    details:
      "Arrive to Cap Spartel, the place where the Mediterranean Sea meets the Atlantic Ocean. Learn about the history of the lighthouse that was built in 1864.Optional stop for mint tea and Moroccan pastries.",
  },
  {
    time: "11:00 AM",
    title: "Caves of Hercules",
    details:
      "Visit the Caves of Hercules that date from the Neolithic Era and learn about its history and how the place is related to the Greek mythology.",
  },
  {
    time: "12:00 PM",
    title: "Kasbah",
    details:
      "Arriving to the Kasbah, have a walk in its narrow alleyways and enjoy its architecture while learning about the endless events and stories that took place here since the 15th century.",
  },
  {
    time: "12:50 PM",
    title: "Kasbah museum",
    details:
      "Visit the Kasbah museum that served as a Palace for Moroccan Sultans since the 17th century. The palace was built by Soultan Moulay Ismail and is now a museum with Punic and Roman remains. The architecture of the place is just breathtaking.",
  },
  {
    time: "01:20 PM",
    title: "Lunch time (Optional)",
    details:
      "It is recommended to have a stop for lunch and try typical Moroccan food in one of the local restaurants. Vegetarian, vegan, gluten free and nuts free options are available.",
  },
  {
    time: "02:00 PM",
    title: "Medina (Grand Socco, Mendoubia gardens, food market)",
    details:
      "After lunch, start discovering the vibrant Medina. Walk through its busy streets following the route of Matisse the French painter, and discover its markets including the food and fish market. Have a stop in the Grand Socco, discover the Mendoubia gardens.",
  },
  {
    time: "03:30 PM",
    title: "End of the tour",
    details: "hotel / airport drop off",
  },
];
const GuidePersonReview = () => {
  return (
    <main className="min-h-screen max-w-screen-xl mx-auto pt-16 px-2">
      <ReviewGuideNav />
      <ImageGellary images={images} />
      <section className="my-10 flex flex-col-reverse gap-10 lg:flex-row w-full">
        <main className="flex flex-col gap-6 lg:gap-10 lg:w-[60%] ">
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
          <TourMaintainHistry scheduleReview={scheduleReview} />
          <PersonalizedTour />
        </main>
        <aside className="">
          <GuideReserve />
        </aside>
        {/* <aside className="lg:absolute overflow-y-auto top-0 right-0">
          <GuideReserve />
        </aside> */}
      </section>
    </main>
  );
};

export default GuidePersonReview;
