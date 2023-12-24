import OfferSection from "../../components/OfferSection/OfferSection";
import SearchTab from "../../components/SearchCompo/SearchTab";
import TopDestinationation from "../../components/TopDestinationation/TopDestinationation";
import HomeContinent from "../../components/continents/HomeContinent";
import TextAnimation from "./TextAnimation";

const Home = () => {
  return (
    <div className="">
      <div className="relative">
        <img
          className="absolute object-cover w-full h-full"
          src="https://res.cloudinary.com/dqfi9zw3e/image/upload/v1702948003/images/ya1b7b2wmtv6fmoi0fyl.webp"
          alt=""
        />
        <div className="pt-36 relative z-10 text-zinc-50 py-6 ">
          <TextAnimation />
        </div>
      </div>
      <div className="flex justify-center">
        <SearchTab />
      </div>

      {/* Offer Section */}
      <OfferSection />
      {/* top destinationation */}
      {/* <TopDestinationation /> */}
      {/* <div
        className="hidden bg-no-repeat bg-cover  w-full "
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dqfi9zw3e/image/upload/v1702948003/images/ya1b7b2wmtv6fmoi0fyl.webp')",
        }}
      >
        <div className="pt-28 ">
          <div className="text-[#fff] text-center flex flex-col gap-5">
            <h4 className="font-extrabold text-6xl">Let the journey begin</h4>
            <p>Get the best prices on 2,000,000+ properties, worldwide</p>
          </div>
        </div>
        <div className="max-w-[1000px] mx-auto">
          <SearchTab />
        </div>
      </div> */}
      <div className="max-w-screen-xl mx-auto ">
        {/* offers section  */}
        {/* <div>offer...</div> */}
        {/* top destinations section  */}
        <HomeContinent />
      </div>
    </div>
  );
};

export default Home;
