import { Box, Button } from "@mui/material";
const includes = [
  "Pick up/drop off from your hotel or any other address of your preference",
  "Comfortable and air conditioned transportation with a professional driver",
  "Licensed & knowledgeable tour guide",
  "Entrance fee to the Kasbah museum",
  "Local taxes",
];
const notInclude = [
  "Camel ride on the beach (20-30 min): $10/person",
  "Interior of the Caves of Hercules: $6/person",
  "Traditional lunch: $15/person",
  "American Legation: $5/person",
];
const importantInformation = [
  "The Kasbah museum is closed on Tuesdays",
  "The American legation in closed on Sundays",
  "On Fridays, the Medina is less busy and some of the shops are closed as it s the day of the collective prayer. But you still can have a tour and enjoy the quietness of the city ",
];
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
import { FaCheckCircle } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import { LuAlertTriangle } from "react-icons/lu";
import TourGuiderReview from "../TourGuideReview/TourGuiderReview";
import SingleTourGuidePerson from "../TourGuideDetails/SingleTourGuidePerson";

const PersonalizedTour = () => {
  return (
    <div>
      <div className="my-6 lg:my-10">
        <h4 className="text-3xl ">
          <span className="border-b-[3px] pb-1 border-blue-600 w-fit">
            Want
          </span>{" "}
          to personalize this tour?
        </h4>
      </div>
      <div className="flex flex-col  lg:flex-row lg:justify-between gap-5 lg:gap-10">
        <Box
          sx={{
            height: 233,
            width: 350,
            maxHeight: { xs: 233, md: 300 },
            maxWidth: { xs: 350, md: "100%" },
            borderRadius: "10px",
          }}
          //   sx={{ maxHeight: "400" }}
          alt="guide photo"
          component={"img"}
          src="https://i.ibb.co/Ws8tdnJ/139954.jpg"
        />

        <div className="flex flex-col justify-between gap-2">
          <ul className="list-disc flex flex-col gap-3 lg:gap-6">
            <li>
              Our tours can be customized according{" "}
              <br className="hidden lg:block" /> to your needs and preferences
            </li>
            <li>Click below to tell us what you are looking for:</li>
            <li>
              Our tours can be customized according{" "}
              <br className="hidden lg:block" /> to your needs and preferences
            </li>
          </ul>
          <Button
            fullWidth
            style={{
              paddingBottom: "13px",
              paddingTop: "13px",
              borderRadius: "20px",
              backgroundColor: "#003e86",
            }}
            variant="contained"
          >
            Request a Tour
          </Button>
        </div>
      </div>
      {/* Inclusions & Exclusions */}
      <div className="my-6 lg:my-10">
        <h4 className="text-3xl ">
          <span className="border-b-[3px] pb-1 border-blue-600 w-fit">
            Inclusions
          </span>{" "}
          & Exclusions
        </h4>
      </div>
      <div className="mb-3">
        <h4 className="font-semibold text-xl flex items-center gap-2">
          {" "}
          <FaCheckCircle className="text-green-600" /> {`What‘s included`}
        </h4>
        <div className="flex flex-col gap-1 ml-5">
          {includes?.map((item, _i) => (
            <p className="text-sm ">{`- ${item}`}</p>
          ))}
        </div>
      </div>
      <div>
        <h4 className="font-semibold text-xl flex items-center gap-2">
          {" "}
          <IoMdCloseCircle className="text-red-600" /> {`What‘s not included`}
        </h4>
        <div className="flex flex-col gap-1 ml-5">
          {notInclude?.map((item, _i) => (
            <p className="text-sm ">{`- ${item}`}</p>
          ))}
        </div>
      </div>
      {/* Important Information */}
      <div className="my-6 lg:my-10">
        <h4 className="text-3xl ">
          <span className="border-b-[3px] pb-1 border-blue-600 w-fit">
            Important
          </span>{" "}
          Information
        </h4>
      </div>
      <div className="bg-yellow-300/60 p-3 lg:p-10 flex gap-4 rounded">
        <LuAlertTriangle className="text-3xl lg:text-5xl" />
        <h4>
          For tours on Sundays, it's better to book at least 2 days before so I
          can have time to <br className="hidden lg:block" /> rearrange/postpone
          any family events.
        </h4>
      </div>
      <div className="flex flex-col gap-1 ml-5 my-5">
        {importantInformation?.map((item, _i) => (
          <p className="text-sm ">{`- ${item}`}</p>
        ))}
      </div>
      {/* Cancellation Policy */}
      <div className="my-6 lg:my-10">
        <h4 className="text-3xl ">
          <span className="border-b-[3px] pb-1 border-blue-600 w-fit">
            Cancellation
          </span>{" "}
          Information
        </h4>
      </div>
      <div className="flex flex-col gap-1 ml-2">
        <h4 className="  flex items-center gap-2">
          {" "}
          <FaCheckCircle className="text-green-600" />{" "}
          {`Free cancellation - 8 days prior to meeting time`}
        </h4>
        <h4 className="  flex items-center gap-2">
          {" "}
          <FaCheckCircle className="text-green-600" />{" "}
          {`50% Refund - 3 to 7 days prior to meeting time`}
        </h4>
        <h4 className="  flex items-center gap-2">
          {" "}
          <IoMdCloseCircle className="text-red-600" />{" "}
          {`No Refund - Within 2 day(s) prior to meeting time`}
        </h4>
      </div>
      {/* Tangier Tour Reviews */}
      {/* <div className="my-6 lg:my-10">
        <h4 className="text-3xl ">
          <span className="border-b-[3px] pb-1 border-blue-600 w-fit">
            Tangier
          </span>{" "}
          Tour Reviews
        </h4>
      </div> */}
      <div className="my-5"></div>
      <TourGuiderReview />
      {/* More tours by Rababe E. */}
      {/* <div className="my-6 lg:my-10">
        <h4 className="text-3xl ">
          <span className="border-b-[3px] pb-1 border-blue-600 w-fit">
            More
          </span>{" "}
          tours by Rababe E.
        </h4>
      </div> */}
      <div className="my-5"></div>
      <SingleTourGuidePerson personAllTour={images} />
    </div>
  );
};

export default PersonalizedTour;
