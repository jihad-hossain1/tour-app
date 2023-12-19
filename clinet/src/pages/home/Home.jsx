import SearchTab from "../../components/SearchCompo/SearchTab";
import HomeContinent from "../../components/continents/HomeContinent";
import Test from "../../components/test/Test";
import { Container } from "@mui/material";

const Home = () => {
  return (
    <div>
      <div
        className="bg-no-repeat bg-cover  w-full"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dqfi9zw3e/image/upload/v1702948003/images/ya1b7b2wmtv6fmoi0fyl.webp')",
        }}
      >
        <div className="pt-20">
          <div className="text-[#fff] text-center flex flex-col gap-5">
            <h4 className="font-extrabold text-6xl">Let the journey begin</h4>
            <p>Get the best prices on 2,000,000+ properties, worldwide</p>
          </div>
          <SearchTab />
        </div>
      </div>
      <Container maxWidth={"lg"}>
        {/* offers section  */}
        <div>offer...</div>
        {/* top destinations section  */}
        <HomeContinent />
        <div>{/* <Test /> */}</div>
      </Container>
    </div>
  );
};

export default Home;
