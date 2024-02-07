import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FlightTakeoffOutlinedIcon from "@mui/icons-material/FlightTakeoffOutlined";
import "./Header.css";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { countries } from "../../../AllDemoDataImporter/AllDemoDataImporter";

const Header = () => {
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
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = (e) => {
    const inputText = e.target.value;
    setSearchTerm(inputText);
    const filteredSuggestions =
      inputText !== ""
        ? countries.filter((country) =>
            country.label.toLowerCase().startsWith(inputText.toLowerCase())
          )
        : [];

    setSuggestions(filteredSuggestions);
  };

  const handleSuggestionClick = (selectedCountry) => {
    setSearchTerm(selectedCountry.label);
    setSuggestions([]);
  };
  return (
    <div className="absolute z-50 w-full bg-black bg-opacity-60 lg:h-[85px] text-white p-4">
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
                {menuItems}
              </ul>
            )}
          </div>
          <Link to={"/"} className="lg:text-3xl text-lg flex items-center">
            <FlightTakeoffOutlinedIcon className="mr-3"></FlightTakeoffOutlinedIcon>
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
                {suggestions.slice(0, 8).map((country, index) => (
                  <li
                    key={index}
                    onClick={() => handleSuggestionClick(country)}
                  >
                    <button className="pb-2">{country.label}</button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
