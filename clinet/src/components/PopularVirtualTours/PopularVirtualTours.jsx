import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Avatar, Button, CardActionArea, CardActions } from "@mui/material";
import Divider from "@mui/material/Divider";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

const popularPrivateTours = [
  {
    title: "Wine Tasting Experience",
    city: "Barcelona",
    price: 60,
    duration: 3,
    reviews: 110,
    stars: 4.6,
    description:
      "Indulge in the flavors of Catalonia with a wine tasting experience in Barcelona, sampling exquisite local wines paired with regional delicacies.",
  },
  {
    title: "Art Gallery Tour",
    city: "Paris",
    price: 45,
    duration: 2,
    reviews: 100,
    stars: 4.7,
    description:
      "Immerse yourself in the world of art with a curated tour of Parisian art galleries, featuring masterpieces from renowned artists and emerging talents.",
  },
  {
    title: "Scuba Diving Adventure",
    city: "Bali",
    price: 100,
    duration: 5,
    reviews: 75,
    stars: 4.9,
    description:
      "Dive into the crystal-clear waters of Bali for an unforgettable scuba diving adventure, exploring vibrant coral reefs and encountering diverse marine life.",
  },
  {
    title: "Concert Under the Stars",
    city: "New York",
    price: 75,
    duration: 4.5,
    reviews: 130,
    stars: 4.8,
    description:
      "Experience the magic of live music under the stars in New York, with a concert featuring talented artists performing in an enchanting outdoor setting.",
  },
];

const PopularVirtualTours = () => {
  return (
    <div className="container mx-auto my-10">
      <h4 className="text-3xl ">
        <span className="border-b-[3px] pb-1 border-blue-600 w-fit">
          Popular
        </span>{" "}
        Virtual Tours
      </h4>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {popularPrivateTours.map((tourSpot, index) => (
          <Card key={index} sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <img
                    src="https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="https://images.unsplash.com/photo-1519564337578-2598cfe4dc80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="https://images.unsplash.com/photo-1513759338966-5de23c844b3a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                  />
                </SwiperSlide>
              </Swiper>
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  className="text-xl font-medium mb-2 "
                >
                  {tourSpot?.title}
                </Typography>
                <div className="space-x-5">
                  <Typography
                    gutterBottom
                    variant="small"
                    component="span"
                    className="inline-block bg-gray-200 bg-opacity-70 text-gray-600 rounded px-3 py-1 text-xs mr-2"
                  >
                    {tourSpot?.city}
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="small"
                    component="span"
                    className="inline-block bg-gray-200 bg-opacity-70 text-gray-600 rounded px-3 py-1 text-xs mr-2"
                  >
                    {tourSpot?.duration}
                  </Typography>
                </div>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  className="my-10"
                >
                  {tourSpot?.description}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  className="my-10"
                >
                  From{" "}
                  <span className="text-xl font-bold text-black">
                    ${tourSpot?.price}
                  </span>{" "}
                  /per group
                </Typography>
              </CardContent>
              <Divider light />
              <CardActions>
                <Avatar
                  alt="Travis Howard"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
                <div className="grid gap-1">
                  <span className="text-blue-500 text-lg font-medium">
                    Travis Howard
                  </span>
                  <span className="text-black">
                    ⭐⭐⭐⭐ {tourSpot?.stars} / 5
                  </span>
                  <span className="underline text-blue-500 font-bold">
                    ({tourSpot?.reviews} reviews)
                  </span>
                </div>
              </CardActions>
            </CardActionArea>
          </Card>
        ))}
      </div>
      <div className="text-center my-10">
        <button className="text-gray-500 border border-gray-500 p-3 text-sm hover:text-gray-900 font-semibold rounded inherit">
          See All Popular Virtual Tours
        </button>
      </div>
    </div>
  );
};

export default PopularVirtualTours;
