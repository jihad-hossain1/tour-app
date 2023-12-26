import React from "react";
import ManageNav from "../../../components/dashboard/Navbar/ManageNav";
import AddCountry from "./AddCountry";

const AddContinent = () => {
  return (
    <div>
      <ManageNav>
        <div className=" ">
          <div className="flex justify-end">
            <AddCountry />
          </div>
        </div>
      </ManageNav>
    </div>
  );
};

export default AddContinent;
