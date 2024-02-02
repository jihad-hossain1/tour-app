import { TextField } from "@mui/material";
import React, { useState } from "react";
import toast from "react-hot-toast";

const ContributeDetailsInfoPicker = ({
  includes,
  setincludes,
  notIncludes,
  setNotIncludes,
  additionalInfo,
  setadditionalInfo,
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

  const handleInfoData = () => {
    if (info == "") {
      return toast.error("Info field required");
    }
    setadditionalInfo([...additionalInfo, infoData]);
    setinfo("");
    toast.success("Info title added");
  };

  return (
    <section className="flex flex-col  gap-4 ">
      <div>
        <TextField
          fullWidth
          onChange={(e) => setinclude(e.target.value)}
          value={include}
          type="text"
          variant="outlined"
          placeholder="Include"
          label="Include"
        />
        <button
          className="border px-2 rounded shadow-sm hover:shadow bg-green-600 text-zinc-50 mt-1"
          type="button"
          onClick={handleIncludeData}
        >
          Add
        </button>
        <div>
          {includes?.map((item, index) => (
            <p className="" key={index}>
              {item?.include}
            </p>
          ))}
        </div>
      </div>
      <div>
        <TextField
          fullWidth
          onChange={(e) => setNotInclude(e.target.value)}
          value={notInclude}
          type="text"
          variant="outlined"
          placeholder="Not Include"
          label="Not Include"
        />
        <button
          className="border px-2 rounded shadow-sm hover:shadow bg-green-600 text-zinc-50 mt-1"
          type="button"
          onClick={handleNotIncludeData}
        >
          Add
        </button>
        <div>
          {notIncludes?.map((item, index) => (
            <p className="" key={index}>
              {item?.notInclude}
            </p>
          ))}
        </div>
      </div>
      <div>
        <TextField
          fullWidth
          onChange={(e) => setinfo(e.target.value)}
          value={info}
          type="text"
          variant="outlined"
          placeholder="addition info"
          label="addition info"
        />
        <button
          className="border px-2 rounded shadow-sm hover:shadow bg-green-600 text-zinc-50 mt-1"
          type="button"
          onClick={handleInfoData}
        >
          Add
        </button>
        <div>
          {additionalInfo?.map((item, index) => (
            <p className="" key={index}>
              {item?.info}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContributeDetailsInfoPicker;
