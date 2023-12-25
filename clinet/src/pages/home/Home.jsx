import HomeContinent from "../../components/continents/HomeContinent";
import TextAnimation from "./TextAnimation";
import SearchContent from "../../components/SearchCompo/SearchContent";

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
      <SearchContent />
      <div maxWidth={"lg"} className="max-w-screen-xl mx-auto ">
        {/* offers section  */}

        {/* top destinations section  */}
        <HomeContinent />
      </div>
    </div>
  );
};

export default Home;
