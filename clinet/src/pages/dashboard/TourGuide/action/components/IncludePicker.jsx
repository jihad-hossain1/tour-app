import { TextField } from "@mui/material";
import React, { useState } from "react";
import toast from "react-hot-toast";

const IncludePicker = ({
  includes,
  setincludes,
  notIncludes,
  setNotIncludes,
}) => {
  const [include, setinclude] = useState("");
  const [notInclude, setNotInclude] = useState("");
  const [info, setinfo] = useState("");

  const includeData = { include };
  const notIncludeData = { notInclude };
  const infoData = { info };

  const handleIncludeData = () => {
    if (include == "") {
      return toast.error("Include field required");
    }
    setincludes([...includes, includeData]);
    setinclude("");
    toast.success("Include title added");
  };

  const handleNotIncludeData = () => {
    if (notInclude == "") {
      return toast.error("NOtInclude field required");
    }
    setNotIncludes([...notIncludes, notIncludeData]);
    setNotInclude("");
    toast.success("NotInclude title added");
  };

  return (
    <section className="flex flex-col lg:flex-row  gap-4 ">
      <div>
        <TextField
          onChange={(e) => setinclude(e.target.value)}
          value={include}
          type="text"
          variant="outlined"
          placeholder="Include"
          label="Include"
        />
        <button type="button" onClick={handleIncludeData}>
          Add
        </button>
      </div>
      <div>
        <TextField
          onChange={(e) => setNotInclude(e.target.value)}
          value={notInclude}
          type="text"
          variant="outlined"
          placeholder="Not Include"
          label="Not Include"
        />
        <button type="button" onClick={handleNotIncludeData}>
          Add
        </button>
      </div>
    </section>
  );
};

export default IncludePicker;
