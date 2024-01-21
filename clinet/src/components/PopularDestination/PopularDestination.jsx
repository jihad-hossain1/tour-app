// import { Box, Card } from "@mui/material";
import React, { useState } from "react";
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
          <Link to={"#"}>
            {/* <Card sx={{ maxWidth: 345 }}> */}
            {/* <Box
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
              /> */}
            {/* <img className=" object-cover " src={continent?.img} alt="" /> */}
            {/* <div className="py-2">
              />
              <div className="py-2 name-div hover:text-2xl transition-transform duration-300 absolute inset-0 flex items-start hover:items-center justify-center hover:duration-300 bg-white hover:bg-opacity-50 transform translate-y-32">
                <h4 className="text-center font-semibold">{item?.name}</h4>
              </div>
            </Card> */}

            <div className="relative rounded-lg overflow-hidden transition-transform transform hover:scale-105 duration-500 ease-in-out">
              <div
                className="w-full h-[210px] bg-cover bg-center pt-4 relative group"
                style={{ backgroundImage: `url(${item.img})` }}
              >
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 transition-opacity opacity-0 group-hover:opacity-100">
                  <div className="text-center w-full scale-0 translate-y-4 transition-transform duration-500 ease-in-out group-hover:scale-100 group-hover:translate-y-0">
                    <button className="text-white text-xs bg-yellow-500 rounded-md w-[30%] mx-auto mb-4 h-[20px] transition-opacity duration-500 ease-in-out">
                      Click to view
                    </button>
                    <h1 className="text-white text-3xl mx-auto">
                      {item.name}
                     
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
};

export default PopularDestination;
