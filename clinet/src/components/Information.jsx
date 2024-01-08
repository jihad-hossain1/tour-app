import React from "react";
import { Link } from "react-router-dom";

const Information = () => {
  return (
    <main className="flex justify-center items-center h-[70vh]">
      <div className="text-center">
        <h4 className="text-2xl flex flex-col">
          Ops, Sorry For That , Your feature are not implement{" "}
          <span className="text-green-600 font-bold">
            we are working on it....
          </span>
        </h4>
        <div className="text-center mt-10  ">
          <Link
            to={"#"}
            className="text-blue-700  font-semibold border p-2 rounded-md shadow-sm hover:shadow hover:bg-slate-100 transition-all duration-300"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Information;
