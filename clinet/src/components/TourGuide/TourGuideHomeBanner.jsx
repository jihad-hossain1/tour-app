import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const TourGuideHomeBanner = () => {
  return (
    <div
      className=" bg-cover bg-center h-[400px] xl:h-[600px] w-full "
      style={{
        backgroundImage:
          "url(https://res.cloudinary.com/dqfi9zw3e/image/upload/v1704046554/images/iykuchgd7o8pzgus8q3t.jpg)",
      }}
    >
      <div className="bg-zinc-800/25 h-full w-full">
        <div className="flex flex-col gap-4 lg:gap-8   relative">
          <div className="text-center mt-36 flex flex-col gap-4 lg:gap-6 ">
            <h2 className="text-3xl lg:text-5xl font-semibold text-slate-50 ">
              Private Tours & Local Tour Guides Connect
            </h2>
            <h4 className="text-sm lg:text-xl text-slate-50">
              {" "}
              with Local Tour Guides and Enjoy Private Tours from All over the{" "}
              <br className="hidden lg:block" />
              World. Request an Itinerary and Customize Your Tour!
            </h4>
          </div>
          <div className=" p-2 max-w-xl mx-auto bg-slate-50 rounded-md">
            <TextField
              fullWidth
              className="lg:w-[560px]"
              type="search"
              label="where to ?"
              id="fullWidth"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourGuideHomeBanner;
