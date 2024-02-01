import Slider from "./SliderSection/Slider";
import components from "../../components/AllImporter/HomeImporter/HomeImporter";
const Home = () => {
  return (
    <>
      <Slider></Slider>
      {components.map((compo, index) => (
        <div key={index} className="max-w-screen-xl mx-auto">
          {compo}
        </div>))}
    </>
  );
};

export default Home;
