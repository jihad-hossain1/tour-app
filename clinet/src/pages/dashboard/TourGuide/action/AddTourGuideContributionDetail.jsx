import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { GET_CLIENT } from "../../../../queries/clientsQuery";
import { useQuery } from "@apollo/client";
import { Button, Input, TextField } from "@mui/material";
import IncludePicker from "./components/IncludePicker";

const AddTourGuideContributionDetail = () => {
  const [includes, setincludes] = useState([]);
  const [notIncludes, setNotIncludes] = useState([]);

  const { id } = useParams();
  const {
    loading,
    error,
    data: userData,
  } = useQuery(GET_CLIENT, {
    variables: { id },
  });

  const clientProfileID = userData?.client?.clientProfile?.id;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(clientProfileID, includes, notIncludes);
  };
  return (
    <main>
      <h4 className="text-xl text-center my-3">
        Add TourGuide Contribution Detail
      </h4>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <TextField
          fullWidth
          multiline
          name=""
          type="text"
          variant="outlined"
          placeholder="Important Notice"
          label="Important Notice"
        />
        <IncludePicker
          includes={includes}
          setincludes={setincludes}
          notIncludes={notIncludes}
          setNotIncludes={setNotIncludes}
        />
        <Button variant="contained" color="success" type="submit">
          Submit
        </Button>
      </form>
    </main>
  );
};

export default AddTourGuideContributionDetail;
