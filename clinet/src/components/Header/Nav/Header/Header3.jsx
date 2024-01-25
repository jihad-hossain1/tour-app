import { useState } from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FlightTakeoffOutlinedIcon from "@mui/icons-material/FlightTakeoffOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LocalAirportOutlinedIcon from "@mui/icons-material/LocalAirportOutlined";
import "./Header3.css";
import { Link } from "react-router-dom";

export default function Header3() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    <li>
      <Link className="Button" to="/">
        Home
      </Link>
    </li>,
    <li>
      <Link className="Button" to={"/tourGuide"}>
        Tour Guides
      </Link>
    </li>,
    <li>
      <Link className="Button" to="/about">
        About Us
      </Link>
    </li>,

    // <div className="avatar">
    //   <div className="w-7 rounded-full">
    //     <img className="" src={user?.photoURL} />
    //   </div>
    // </div>
  ];
  return (
    <div>
      <div className="bg-black bg-opacity-60 lg:h-14 text-white p-4 flex pt-7">
        <h1 className="lg:flex lg:gap-2 lg:items-center lg:font-semibold lg:text-base lg:pl-5 hidden">
          <LocalPhoneOutlinedIcon className="text-[#3081D0]" />{" "}
          <span>+088 01533175945</span>
        </h1>
        <h1 className="lg:flex hidden lg:gap-2 lg:items-center lg:text-base lg:font-semibold lg:pl-5">
          <EmailOutlinedIcon className="text-[#3081D0]" />{" "}
          <span>nahidahmmed411@gmail.com</span>
        </h1>
        <div className="text-[#3081D0] gap-3 lg:ml-auto flex items-center">
          <div className="relative group">
            <button className="focus:outline-none">
              <FacebookOutlinedIcon className="text-2xl" />
            </button>
            <div className="hidden group-hover:block absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 rounded-md text-sm">
              Facebook
            </div>
          </div>

          <div className="relative group">
            <button className="focus:outline-none">
              <SubscriptionsOutlinedIcon className="text-2xl" />
            </button>
            <div className="hidden group-hover:block absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 rounded-md text-sm">
              Youtube
            </div>
          </div>
        </div>
        <div className="flex items-center lg:mx-14 ml-32 text-base font-semibold">
          <Link to='/signin' className="flex items-center gap-2 mx-2">
            <LockOutlinedIcon className="text-[#3081D0]"></LockOutlinedIcon>{" "}
            Login
          </Link>
          <Link to='/signup' className="flex items-center gap-2">
            <PersonOutlineOutlinedIcon className="text-[#3081D0]"></PersonOutlineOutlinedIcon>{" "}
            Sign Up
          </Link>
        </div>
      </div>
      <div className="bg-black bg-opacity-60 lg:h-24 text-white p-4">
        <div className="flex items-center justify-between pt-3">
          <div className="flex items-center space-x-4">
            <div className="group relative">
              <button
                onClick={toggleMenu}
                className="lg:hidden focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 mt-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </button>
              {isMenuOpen && (
                <ul className="mt-[17px] z-10 p-2 shadow bg-black bg-opacity-90 rounded w-52 absolute">
                  <li className="mt-5">
                    <Link className="Button" to="/">
                      Home
                    </Link>
                  </li>
                  
                  <li className="mt-5">
                    <Link className="Button" to={"/tourGuide"}>
                      Tour Guides
                    </Link>
                  </li>
                  
                  <li className="mt-5">
                    <Link className="Button" to="/about">
                      About Us
                    </Link>
                  </li>
                </ul>
              )}
            </div>
            <Link to={"/"} className="text-3xl flex items-center">
              <FlightTakeoffOutlinedIcon
                fontSize="large"
                className="mr-3 "
              ></FlightTakeoffOutlinedIcon>
              {/* <LocalAirportOutlinedIcon fontSize="large" className="mr-3 "></LocalAirportOutlinedIcon> */}
              <span className="text-[#3081D0] mr-2">Travel</span>Master
            </Link>
          </div>

          <div className="hidden lg:flex">
            <ul className="flex gap-6">{menuItems}</ul>
          </div>

          <div className="text-xl pr-5 lg:pr-12">
            <SearchOutlinedIcon  fontSize="large"/>
          </div>
        </div>
      </div>
    </div>
  );
}
