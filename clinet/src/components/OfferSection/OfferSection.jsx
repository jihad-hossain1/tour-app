import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Button from "@mui/material/Button";

const OfferSection = () => {
  const cardData = [
    {
      title: "Special offer 50% off",
      subTile: "Select hotel deals",
      img: "https://img.freepik.com/free-photo/view-3d-airplane-with-travel-destination-landscape_23-2151022185.jpg?t=st=1703428752~exp=1703432352~hmac=a01189644652cd24b24a49824c77bf9efb5e699edfc05c580fa45aa56fb1539e&w=740",
      btnText: "Learn More",
      textColor: "#FFD700", // Light Yellow
    },
    {
      title: "Get 20% OFF ",
      subTile: "Let's explore the world",
      img: "https://img.freepik.com/free-photo/view-3d-airplane-with-wings-engine_23-2151022269.jpg?t=st=1703428779~exp=1703432379~hmac=fc2ea54aa0674a0076d3315c0cb7e2e973d1c202c818f6941a28828ec44dab87&w=740",
      btnText: "Book Now",
      textColor: "#8A2BE2", // Blue Purple
    },
  ];

  return (
    <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center gap-5">
      {cardData.map((data, index) => (
        <Card key={index} className="w-[450px] h-auto relative overflow-hidden">
          <CardActionArea
            style={{
              backgroundImage: `url(${data?.img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "200px",
              transition: "transform 0.3s ease-in-out",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <CardContent className="absolute left-2 top-5 space-y-2 ">
              <Typography
                style={{ color: data?.textColor, fontSize: "x-large" }}
                gutterBottom
                variant="h5"
                component="div"
              >
                {data.title}
              </Typography>

              <Typography style={{ color: data?.textColor }} variant="body2">
                {data.subTile}
              </Typography>
              <Button variant="contained" size="medium">
                {data?.btnText}
              </Button>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </div>
  );
};

export default OfferSection;
