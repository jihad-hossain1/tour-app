import React from "react";
import ManageNav from "../../../components/dashboard/Navbar/ManageNav";
import AddCountry from "./AddCountry";
import AddDivision from "./AddDivision";
import AddCity from "./AddCity";

const AddContinent = () => {
  return (
    <div>
      <ManageNav>
        <div className=" ">
          <div className="flex justify-end gap-6">
            <AddCountry />
            <AddDivision />
            <AddCity />
          </div>
        </div>
      </ManageNav>
    </div>
  );
};

export default AddContinent;
