import React from "react";
import DeleteTourSpot from "./DeleteTourSpot";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { Link } from "react-router-dom";

const ManageSingleTourSpot = ({ tourSpot }) => {
  return (
    <main className=" p-3 rounded shadow flex justify-between">
      <div className="flex flex-col gap-1">
        <h4 className="font-semibold">{tourSpot?.name}</h4>
        <h5 className="text-xs">{tourSpot?.id}</h5>
      </div>
      <div className="flex flex-col items-center">
        <DeleteTourSpot id={tourSpot?.id} />
        <Link to={`/dashboard/UpdateTourSpot/${tourSpot?.id}`}>
          <HiOutlinePencilSquare size={25} />
        </Link>
      </div>
    </main>
  );
};

export default ManageSingleTourSpot;
