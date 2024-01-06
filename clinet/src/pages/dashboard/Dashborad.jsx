import { Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getClient } from "../../router/ClientRoute";
import { Link } from "react-router-dom";

const Dashborad = () => {
  const [isClient, setClient] = useState(getClient());
  const [toggel, setToggle] = useState(false);
  const scafolding = {
    any: "",
  };
  console.log(isClient);
  const [formData, setFormData] = useState(scafolding);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(Object.values(formData).length);
  };

  const manageTourist =
    isClient?.clientType == "TourGuide" || isClient?.role == "admin";
  // const admin = isClient?.role == "admin";
  // console.log(isClient?.role);
  return (
    <>
      {manageTourist ? (
        <>
          <Button
            color="info"
            variant="contained"
            onClick={() => setToggle(!toggel)}
          >
            Manage Profile
          </Button>
          <div className="mt-5 lg:mt-10">
            {toggel && (
              <div className="max-w-screen-md mx-auto px-2">
                <form action="" onSubmit={handleSubmit}>
                  <TextField
                    placeholder="any"
                    label="any"
                    name="any"
                    // required
                    fullWidth
                    variant="outlined"
                    type="text"
                    defaultValue={formData?.any}
                    onChange={handleChange}
                  />
                  <div className="flex justify-end">
                    <Button
                      sx={{ marginTop: { sm: "10px", md: "20px" } }}
                      type="submit"
                      variant="contained"
                      color="success"
                    >
                      Submit
                    </Button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </>
      ) : (
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
      )}
    </>
  );
};

export default Dashborad;
