import React from "react";
import { Link } from "react-router-dom";

const AlertAlreadySignIn = () => {
  return (
    <main className="flex justify-center items-center h-[80vh]">
      <div className=" uppercase">
        <h4 className="text-2xl font-semibold text-green-600">
          {" "}
          you are already SignIn{" "}
        </h4>
        <div className="text-center mt-5">
          <Link to={"/"} className="underline hover:text-blue-600">
            Go home
          </Link>
        </div>
      </div>
    </main>
  );
};

export default AlertAlreadySignIn;
