import { Card } from "@mui/material";
import { Link } from "react-router-dom";
import Title from "../Title/Title";
// import { Button } from "@mui/material";

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
      <Title firstText="Popular" secondText="Tour Destinations" />
      <section className="grid lg:grid-cols-4 gap-4">
        {countryData?.map((item, _i) => (
          <Link to={"#"} key={_i}>
            <Card>
              <div className="click">
                <div
                  className="w-full h-[170px] bg-cover bg-center pt-4 relative group"
                  style={{ backgroundImage: `url(${item.img})` }}
                >
                  <div className="click_class_main">
                    <div className="click_class">
                      <button className="viewbtn ">Click to view</button>
                      <h1 className="text-white text-3xl mx-auto">
                        {item.name}
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </section>
    </main>
  );
};

export default PopularDestination;
