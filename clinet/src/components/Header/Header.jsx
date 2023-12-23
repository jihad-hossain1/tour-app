import { Link, NavLink } from "react-router-dom";
import ExtraButton from "./ExtraButton";
import HotelNav from "./Nav/HotelNav";
import ActivityNav from "./Nav/ActivityNav";

const Header = () => {
  return (
    <main className="flex justify-between items-center px-5 py-3 bg-zinc-800/50 bg-opacity-30">
      {/* logo section  */}
      <Link to={"/"} className="w-fit text-[#fff]">
        Traveler
      </Link>
      {/* navlist  */}
      <nav className="hidden md:flex items-center gap-4">
        <div>
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive ? "text-blue-600" : "text-[#fff]"
            }
          >
            Home
          </NavLink>
        </div>
        <HotelNav />
        <ActivityNav />
      </nav>
      {/* extra section  */}
      <div className="hidden md:block">
        <ExtraButton />
      </div>
    </main>
  );
};

export default Header;
