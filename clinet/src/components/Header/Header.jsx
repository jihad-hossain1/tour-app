import { Link, NavLink } from "react-router-dom";
import ExtraButton from "./ExtraButton";
import HotelNav from "./Nav/HotelNav";
import ActivityNav from "./Nav/ActivityNav";

const Header = () => {
  return (
    <main className="flex justify-between items-center px-5 py-3 bg-zinc-800 ">
      {/* logo section  */}
      <Link to={"/"} className="w-fit text-[#fff]">
        Traveler
      </Link>
      {/* navlist  */}
      <nav className="hidden md:flex items-center gap-4">
        <div className="flex gap-4 items-center">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive ? "text-blue-600" : "text-[#fff]"
            }
          >
            Home
          </NavLink>
          <NavLink
            to={"/tourGuide"}
            className={({ isActive }) =>
              isActive ? "text-blue-600" : "text-[#fff]"
            }
          >
            Tour Guide
          </NavLink>
        </div>
        {/* <HotelNav />
        <ActivityNav /> */}
      </nav>
      {/* extra section  */}
      <div className="hidden md:block">
        <ExtraButton />
      </div>
    </main>
  );
};

export default Header;
