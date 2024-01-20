import HomeContinent from "../../components/continents/HomeContinent";
import TextAnimation from "./TextAnimation";
import SearchContent from "../../components/SearchCompo/SearchContent";
import OfferSection from "../../components/OfferSection/OfferSection";
import PopularDestination from "../../components/PopularDestination/PopularDestination";

import BannerTAg from "./BannerTAg";
import PopularGuide from "../../components/PopularGuide/PopularGuide";
import HomePageSearchSection from "./HomePageSearchSection/HomePageSearchSection";

import "./Styles.css"
import NewTourGuides from "../../components/NewTourGuides/NewTourGuides";
import PopularPrivateTours from "../../components/PopularPrivateTours/PopularPrivateTours";
import NewPrivateTours from "../../components/NewPrivateTours/NewPrivateTours";
import PopularPrivateCars from "../../components/PopularPrivateCars/PopularPrivateCars";
import PopularVirtualTours from "../../components/PopularVirtualTours/PopularVirtualTours";
import LatestArticles from "../../components/LatestArticles/LatestArticles";
import PopularArticles from "../../components/PopularArticles/PopularArticles";

const Home = () => {

  return (
    <div className="pb-10">
      <div className="relative">
        <img
          className="absolute object-cover w-full h-full"
          src="https://res.cloudinary.com/dqfi9zw3e/image/upload/v1702948003/images/ya1b7b2wmtv6fmoi0fyl.webp"
          alt=""
        />
        <div className="pt-36 relative z-10 text-zinc-50 py-6 ">
          <TextAnimation />
          <HomePageSearchSection />
        </div>
      </div>
      <BannerTAg />
      {/* <SearchContent /> */}
      <div className="max-w-screen-xl mx-auto ">
        {/* top destinations section  */}
        <PopularDestination />
        {/* continent section  */}
        <HomeContinent />

        <PopularGuide />
        <NewTourGuides />
        <PopularPrivateTours />
        <NewPrivateTours />
        <PopularPrivateCars />
        <PopularVirtualTours />
        <LatestArticles />
        <PopularArticles />
        {/* offers section  */}
        {/* <OfferSection /> */}
      </div>
    </div>
  );
};

export default Home;
