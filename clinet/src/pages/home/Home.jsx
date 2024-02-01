import Slider from "./SliderSection/Slider";
import components from "../../components/AllImporter/HomeImporter/HomeImporter";
const Home = () => {
  return (
    <div>
      <Slider></Slider>
      {components.map((compo, index) => (
        <div key={index} className="max-w-screen-xl mx-auto">
          {compo}
        </div>))}
    </div>
  );
};

export default Home;
