import HomeContinent from "../../components/continents/HomeContinent";
import Test from "../../components/test/Test";
import { Container } from "@mui/material";

const Home = () => {
  return (
    <div>
      <div
        className="bg-no-repeat bg-cover min-h-[400px] w-full"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dqfi9zw3e/image/upload/v1702948003/images/ya1b7b2wmtv6fmoi0fyl.webp')",
        }}
      ></div>
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
