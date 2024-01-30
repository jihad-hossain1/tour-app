import { Box, Card } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
const countryData = [
  {
    img: "https://i.ibb.co/KqVM0C2/adf.jpg",
    name: "Tokyo",
  },
  {
    img: "https://i.ibb.co/KqVM0C2/adf.jpg",
    name: "Cairo",
  },
  {
    img: "https://i.ibb.co/KqVM0C2/adf.jpg",
    name: "Seoul",
  },
  {
    img: "https://i.ibb.co/KqVM0C2/adf.jpg",
    name: "Bangkok",
  },
  {
    img: "https://i.ibb.co/KqVM0C2/adf.jpg",
    name: "Lisbon",
  },
  {
    img: "https://i.ibb.co/KqVM0C2/adf.jpg",
    name: "Marrakech",
  },
  {
    img: "https://i.ibb.co/KqVM0C2/adf.jpg",
    name: "Mexico City",
  },
  {
    img: "https://i.ibb.co/KqVM0C2/adf.jpg",
    name: "Delhi",
  },
];
const PopularDestination = () => {
  return (
    <main className="px-2">
      <div className="my-6 lg:my-10">
        <h4 className="text-3xl ">
          <span className="border-b-[3px] pb-1 border-blue-600 w-fit">
            Popular
          </span>{" "}
          Tour Destinations
        </h4>
      </div>
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {countryData?.map((item, _i) => (
          <Link to="#">
            <Card
              sx={{
                maxWidth: 345,
                position: "relative",
                overflow: "hidden",
                "&:hover": {
                  ".name-div": {
                    transform: "translateY(0)", // Show the div by moving it to its original position
                  },
                },
              }}
            >
              <Box
                component="img"
                sx={{
                  height: 233,
                  width: "100%",
                  maxHeight: { xs: 130, md: 160 },
                }}
                alt="Continent photo"
                src={item?.img}
              />
              <div className="py-2 name-div hover:text-2xl transition-transform  absolute inset-0 flex items-start hover:items-center justify-center transition-bg duration-500 bg-white hover:bg-opacity-50 transform translate-y-32">
                <h4 className="text-center font-semibold">{item?.name}</h4>
              </div>
            </Card>
          </Link>
        ))}
      </section>
    </main>
  );
};

export default PopularDestination;
