import { Link } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FlagIcon from "@mui/icons-material/Flag";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import PublicIcon from "@mui/icons-material/Public";
import PopularDestination from "../../components/PopularDestination/PopularDestination";
import PopularPrivateTours from "../../components/PopularPrivateTours/PopularPrivateTours";
import PopularPrivateCars from "../../components/PopularPrivateCars/PopularPrivateCars";
import NewPrivateTours from "../../components/NewPrivateTours/NewPrivateTours";
import PopularVirtualTours from "../../components/PopularVirtualTours/PopularVirtualTours";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Avatar, Card, Rating } from "@mui/material";
import Title from "../../components/Title/Title";
import LatestArticles from "../../components/LatestArticles/LatestArticles";
import PopularArticles from "../../components/PopularArticles/PopularArticles";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_CITIY } from "../../queries/countriesQuery";
import Loader from "../../layout/Loader/Loader";

export default function Destination() {
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
  const accordionData = [
    { id: 1, label: "Accordion 1" },
    { id: 2, label: "Accordion 2" },
    { id: 3, label: "Accordion 3" },
    { id: 4, label: "Accordion 4" },
    { id: 5, label: "Accordion 5" },
    { id: 6, label: "Accordion 6" },
  ];

  const { id } = useParams();

  const { data, loading, error } = useQuery(GET_CITIY, {
    variables: { id },
  });
  // console.log(data);
  if (error) {
    return <div>{error?.message}</div>;
  } else if (loading) {
    return <Loader />;
  }

  return (
    <div className=" relative">
      <div className="relative">
        <img
          className="w-full h-[430px] object-cover"
          src={data?.getCity?.photo}
          alt=""
        />
        <div className="absolute text-center top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-30 p-4">
          <Link to="/">
            <button className="absolute top-24 left-4 bg-black bg-opacity-30 text-white px-4 py-2 rounded-full">
              Home {">"} <span className="text-gray-400"></span>
            </button>
          </Link>
          <h1 className="text-2xl sm:text-4xl mt-24 mb-2">
            {data?.getCity?.name} Private Tours & Local Tour Guides
          </h1>
          <p className="text-base sm:text-lg">
            Plan a Trip to {data?.getCity?.name} with Local Tour Guides, and
            Tokyo, Kyoto, Osaka and More.
          </p>
          <div className="text-sm sm:text-base">
            <p>⭐⭐⭐⭐⭐ 5/5</p>
            <p>View all 13558 reviews</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mx-4  lg:w-[80%] my-8">
        <a className="flex text-gray-600 font-medium hover:border-blue-500 hover:border-2 shadow-md h-[60px] lg:w-[250px] text-center justify-center items-center text-lg text rounded-[4px] transition-all duration-300 ease-in-out border-t-2 border-r-2">
          <AccountCircleIcon fontSize="large" className="text-blue-500" />
          <h1 className="ml-2">Local Guides</h1>
        </a>
        <Link className="flex text-gray-600 font-medium hover:border-blue-500 hover:border-2 shadow-md h-[60px] lg:w-[250px] text-center justify-center items-center text-lg text rounded-[4px] duration-200 ease-in-out border-t-2 border-r-2">
          <FlagIcon fontSize="large" className="text-blue-500" />
          <h1 className="ml-2">Private Tours</h1>
        </Link>
        <Link className="flex text-gray-600 font-medium hover:border-blue-500 hover:border-2 shadow-md h-[60px] lg:w-[250px] text-center justify-center items-center text-lg text rounded-[4px] transition-all duration-300 ease-in-out border-t-2 border-r-2">
          <DirectionsCarIcon fontSize="large" className="text-blue-500" />
          <h1 className="ml-2">Private Cars</h1>
        </Link>
        <Link className="flex text-gray-600 font-medium hover:border-blue-500 hover:border-2 shadow-md h-[60px] lg:w-[250px] text-center justify-center items-center text-lg text rounded-[4px] transition-all duration-300 ease-in-out border-t-2 border-r-2">
          <PublicIcon fontSize="large" className="text-blue-500" />
          <h1 className="ml-2">Virtual Tours</h1>
        </Link>
      </div>
      <PopularDestination></PopularDestination>
      <PopularPrivateCars />
      <PopularPrivateTours></PopularPrivateTours>
      <NewPrivateTours />
      <PopularPrivateCars />
      <PopularVirtualTours />
      <div className="mx-10 mb-20">
        <h4 className="text-3xl ">
          <span className="border-b-[3px] pb-1 border-blue-600 w-fit">
            Japan
          </span>{" "}
          Tour Reviews
        </h4>
        <div>
          <div className="mt-16 flex flex-col gap-6 lg:gap-10">
            {[1, 2, 3].map((review, _i) => (
              <div key={_i} className="">
                <Card style={{ padding: "14px", borderRadius: "12px" }}>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <Avatar src="" alt="review user" />
                      <h4 className="text-blue-800 ">{`Matjaz K`}</h4>
                      <Rating size="small" value={4} />
                      <span className="text-sm font-semibold">{`${5}/${5} `}</span>
                    </div>
                    <div className="text-sm">Jan 31, 2024</div>
                  </div>
                  <hr className="h-[1px] bg-zinc-700 my-5" />
                  <h4 className="font-semibold text-xl">{`“ Great Experience! ”`}</h4>
                  <p className="text-sm my-3">
                    Our sightseeing trip in and around the outskirts of Tangier
                    was truly made memorable by Rababe. She is an outstanding
                    private guide with an impressive grasp of local culture and
                    history. She added depth to every destination without
                    overwhelming us. It is important to note that her warmth and
                    friendliness created a personal touch, making each moment
                    feel special. We felt comfortable and welcome. Overall,
                  </p>
                </Card>
              </div>
            ))}
          </div>
          <div className="w-full">
            <button className="mt-10 border-none bg-slate-200 font-semibold text-[14px] p-4 rounded-md justify-center items-center text-center">
              Learn more
            </button>
          </div>
        </div>
      </div>
      {/* Asked Questions Section */}
      <div className="mx-10">
        <Title firstText="Japan" secondText="Frequently Asked Questions" />
        <div>
          {accordionData.map((item) => (
            <Accordion key={item.id}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${item.id}-content`}
                id={`panel${item.id}-header`}
              >
                {item.label}
              </AccordionSummary>
              <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </div>
      <div className="mx-10 mt-10">
        <h4 className="text-3xl ">
          <span className="border-b-[3px] pb-1 border-blue-600 w-fit">
            Japan
          </span>{" "}
          Popular Tour Guide
        </h4>
        <div className="text-lg mt-10">
          <p>
            Uncover Japan’s secrets and gain travel knowledge with a local
            private tour guide. Unlock hidden gems, cultural immersion, and an
            unforgettable journey.
          </p>{" "}
          <br />
          <p>
            {" "}
            With a tour guide, you can get to the good stuff, like the ethereal
            Tottori Sand Dunes and quaint Kinosaki Onsen. From enjoying bespoke
            traditional ryokans, to navigating the busy streets of Osaka, a
            tailored journey through Japan’s wonders only gets better with a
            local expert leading the way.{" "}
          </p>
          <br />
          <p>
            Beyond the big ticket destinations like Tokyo, Kyoto and Osaka,
            getting a personalized itinerary transforms a simple tour into
            lifelong memories. Customized by a local guide, your itinerary can
            feature lesser known sites like the Shikisai-no-Oka flower fields,
            where stunning panoramic views of colorful flowers await.
          </p>
        </div>
      </div>
      <LatestArticles />
      <PopularArticles />
    </div>
  );
}
