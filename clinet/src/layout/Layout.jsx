import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Nav/Header/Header";

const Layout = () => {
  return (
    <>
      <Header />

      <div className="">
        <Outlet />
      </div>

      <Footer />
    </>
  );
};

export default Layout;
