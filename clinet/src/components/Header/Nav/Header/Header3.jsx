import { useState } from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import FlightTakeoffOutlinedIcon from "@mui/icons-material/FlightTakeoffOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import "./Header3.css";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

export default function Header3() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const [isSearchVisible, setSearchVisible] = useState(false);

  const toggleSearch = () => {
    setSearchVisible(!isSearchVisible);
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
  const countries = [
    { name: "United States" },
    { name: "China" },
    { name: "India" },
    { name: "Brazil" },
    { name: "Russia" },
    { name: "United Kingdom" },
    { name: "Japan" },
    { name: "Germany" },
    { name: "Brazil" },
    { name: "Russia" },
    { name: "United Kingdom" },
    { name: "Japan" },
    { name: "Germany" },
    { name: "France" },
    { name: "South Korea" },
  ];
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = (e) => {
    const inputText = e.target.value;
    setSearchTerm(inputText);
    const filteredSuggestions =
      inputText !== ""
        ? countries.filter((country) =>
            country.name.toLowerCase().startsWith(inputText.toLowerCase())
          )
        : [];

    setSuggestions(filteredSuggestions);
  };

  const handleSuggestionClick = (selectedCountry) => {
    setSearchTerm(selectedCountry.name);
    setSuggestions([]); // Clear suggestions when a suggestion is selected
  };
  return (
    <div>
      {/* <div className="bg-black bg-opacity-60 lg:h-3 text-white p-4 flex pt-7">
        <h1 className="lg:flex lg:gap-2 lg:items-center lg:font-semibold lg:text-sm lg:pl-5 hidden">
          <LocalPhoneOutlinedIcon fontSize="small" className="text-[#3081D0]" />{" "}
          <span>+088 01533175945</span>
        </h1>
        <h1 className="lg:flex hidden lg:gap-2 lg:items-center lg:text-sm lg:font-semibold lg:pl-5">
          <EmailOutlinedIcon className="text-[#3081D0]" fontSize="small" />{" "}
          <span>nahidahmmed411@gmail.com</span>
        </h1>
        <div className="text-[#3081D0] gap-3 lg:ml-auto flex items-center">
          <div className="relative group">
            <button className="focus:outline-none">
              <FacebookOutlinedIcon className="text-2xl" fontSize="small"/>
            </button>
            <div className="hidden group-hover:block absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 rounded-md text-sm">
              Facebook
            </div>
          </div>

          <div className="relative group">
            <button className="focus:outline-none">
              <SubscriptionsOutlinedIcon className="text-2xl" fontSize="small"/>
            </button>
            <div className="hidden group-hover:block absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 rounded-md text-sm">
              Youtube
            </div>
          </div>
        </div>
        <div className="flex items-center lg:mx-14 ml-32 text-base font-semibold">
          <Link to='/signin' className="flex items-center gap-2 mx-2">
            <LockOutlinedIcon className="text-[#3081D0]" fontSize="small"></LockOutlinedIcon>{" "}
            Login
          </Link>
          
        </div>
      </div> 
      

      <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
      
      
      */}
      <div className="bg-black bg-opacity-60 lg:h-[85px] text-white p-4">
        <div className="flex items-center justify-between pt-3">
          <div className="flex items-center space-x-4">
            <div className="group relative">
              <button
                onClick={toggleMenu}
                className="lg:hidden focus:outline-none"
              >
                <MenuIcon></MenuIcon>
              </button>
              {isMenuOpen && (
                <ul className="mt-[28px] z-10 p-2 shadow bg-black bg-opacity-80 rounded w-52 absolute">
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
            <Link to={"/"} className="lg:text-3xl text-lg flex items-center">
              <FlightTakeoffOutlinedIcon className="mr-3"></FlightTakeoffOutlinedIcon>
              {/* <LocalAirportOutlinedIcon fontSize="large" className="mr-3 "></LocalAirportOutlinedIcon> */}
              <span className="text-[#3081D0] mr-2">Travel</span>Master
            </Link>
          </div>

          <div className="hidden lg:flex">
            <ul className="flex gap-6">{menuItems}</ul>
          </div>

          <div className="text-xl lg:pr-2 flex items-center">
            {/* input */}
            <div className="container border-b-2">
              <div className="mainbox lg:w-[230px]">
                <div className="iconContainer">
                  <button onClick={toggleSearch}>
                    <SearchOutlinedIcon fontSize="large" />
                  </button>
                </div>
                <input
                  className="search_input w-[120px] lg:w-[185px]"
                  placeholder="search"
                  name="search"
                  type="text"
                  value={searchTerm}
                  onChange={handleInputChange}
                />
              </div>
              {suggestions.length > 0 && (
                <ul className="lg:w-[230px] w-[160px] mt-[1px] lg:mt-3 text-sm mr-10 p-3 shadow bg-black bg-opacity-60 rounded-b-xl absolute">
                  {suggestions.map((country, index) => (
                    <li
                      key={index}
                      onClick={() => handleSuggestionClick(country)}
                    >
                      <button className="pb-2">{country.name}</button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            {/* <div className="input-wrapper lg:w-[250px] md:w-[250px]">
              <button className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  height="25px"
                  width="25px"
                >
                  <path
                    stroke-linejoin="round"
                    stroke-linecap="round"
                    stroke-width="1.5"
                    stroke="#fff"
                    d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                  ></path>
                  <path
                    stroke-linejoin="round"
                    stroke-linecap="round"
                    stroke-width="1.5"
                    stroke="#fff"
                    d="M22 22L20 20"
                  ></path>
                </svg>
              </button>
              <input
                placeholder="search.."
                className="input bg-black bg-opacity-0"
                name="text"
                type="search"
                value={searchTerm}
                onChange={handleInputChange}
              />

              {suggestions.length > 0 && (
                <ul className="lg:w-[250px] text-sm mr-10 ml-10 p-3 shadow bg-black bg-opacity-60 rounded-b-xl absolute mt-28">
                  {suggestions.map((country, index) => (
                    <h1
                      key={index}
                      onClick={() => handleSuggestionClick(country)}
                    >
                      <button className="mt-2">{country.name}</button>
                    </h1>
                  ))}
                </ul>
              )}
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
