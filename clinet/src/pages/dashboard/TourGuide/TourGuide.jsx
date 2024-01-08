import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { getClient } from "../../../router/ClientRoute";
import { useQuery } from "@apollo/client";
import { GET_CLIENT } from "../../../queries/clientsQuery";

const TourGuide = () => {
  const [isClient, setClient] = useState(getClient());
  const [toggel, setToggle] = useState(false);

  const cid = isClient?.id;
  const { loading, error, data } = useQuery(GET_CLIENT, {
    variables: { id: cid },
  });
  console.log(data?.client);

  const scafolding = {
    any: "",
  };
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
  return (
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
  );
};

export default TourGuide;
