import React from "react";
import { Link } from "react-router-dom";

const DeniedPage = () => {
  return (
    <div className="flex justify-center items-center h-[70vh]">
      <div>
        <h4 className="uppercase text-pink-700 text-2xl">Your are not allow</h4>
        <div className="mt-5 text-center">
          <Link
            to={"/"}
            className="border px-3 rounded bg-gray-50 hover:bg-slate-100 transition-all duration-300 shadow-sm hover:shadow py-1"
          >
            Back Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DeniedPage;
