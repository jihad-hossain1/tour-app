import React from "react";

import ManageTS from "./ManageTS";
import AddTourSpot from "./AddTourSpot";

const ManageTourSpot = () => {
  return (
    <div className="">
      <div>
        <AddTourSpot />
      </div>

      <main>
        <ManageTS />
      </main>
    </div>
  );
};

export default ManageTourSpot;
