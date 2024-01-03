import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Card, CardMedia } from "@mui/material";
import { useLocation } from "react-router-dom";

const SingleTourGuidePerson = ({ personAllTour }) => {
  const location = useLocation();
  const path = "/tourGuide/guide/review/0";
  console.log(location);
  const options = {
    items: 1,
    loop: false,
    autoplay: true,
    autoplayTimeout: 4000,
    animateOut: "slideOutUp",
    dots: false,
    margin: 20,
    responsive: {
      //   1100: {
      //     items: 3,
      //   },
      //   724: {
      //     items: 2,
      //   },
      //   500: {
      //     items: 1,
      //   },
      370: {
        items: 1,
        innerHeight: "100%",
        innerWidth: "100%",
      },
    },
  };
  return (
    <div>
      {/* {location.pathname == path ? (
        <div className="my-6 lg:my-10">
          <h4 className="text-3xl ">
            <span className="border-b-[3px] pb-1 border-blue-600 w-fit">
              More
            </span>{" "}
            tours by Rababe E.
          </h4>
        </div>
      ) : (
        <h4 className="text-3xl">
          <span className="border-b-[3px] pb-1 border-blue-600 w-fit">
            Tours
          </span>
        </h4>
      )} */}
      <h4 className="text-3xl">
        <span className="border-b-[3px] pb-1 border-blue-600 w-fit">Tours</span>
      </h4>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-5 lg:mt-10">
        {[1, 2, 3, 4, 5].map((it, _i) => (
          <Link to={`/tourGuide/guide/review/${_i}`} className="">
            <Card key={_i} sx={{ maxWidth: 375 }}>
              <OwlCarousel className="owl-theme" {...options}>
                {personAllTour?.map((itm, _i) => (
                  <CardMedia
                    key={_i}
                    component="img"
                    alt="green iguana"
                    className="h-[200px]"
                    image={itm?.img}
                  />
                ))}
              </OwlCarousel>
              <div className="mt-2 p-3 lg:p-4  flex flex-col gap-2">
                <h4 className="font-semibold text-xl">
                  Cultural day tour of Tangier
                </h4>
                <div className="mt-5 flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <h5 className="w-fit px-3 text-xs bg-black/10 rounded-md py-1">{`Tangier`}</h5>
                    <h5 className="w-fit px-3 text-xs bg-black/10 rounded-md py-1">{`${4} hours ${30} min`}</h5>
                  </div>
                  <p className="text-gray-700 text-sm">
                    This cultural tour is a combination of sightseeing and
                    walking. Start with a drive along Tangier's International
                    districts before heading to Cap Spartel and the Caves
                  </p>
                  <div className="flex items-center gap-1 pb-3">
                    <span className="uppercase text-sm">from</span>
                    <span className="text-xl font-bold">{` $${120} `}</span>
                    <span className="text-sm text-gray-600">{`/ per group`}</span>
                  </div>
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SingleTourGuidePerson;
