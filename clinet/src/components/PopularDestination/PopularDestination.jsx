import { Card } from "@mui/material";
import { Link } from "react-router-dom";
import Title from "../Title/Title";

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
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {countryData?.map((item, _i) => (
          <Link to={"#"} key={_i}>
            <Card>
              <div className="relative rounded-lg overflow-hidden transition-transform transform hover:scale-105 duration-500 ease-in-out">
                <div
                  className="w-full h-[170px] bg-cover bg-center pt-4 relative group"
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
            </Card>
          </Link>
        ))}
      </section>
    </main>
  );
};

export default PopularDestination;
