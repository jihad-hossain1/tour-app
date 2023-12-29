const url = "https://restcountries.com/v3.1/all";

import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

import { useEffect, useState } from "react";

const SelectContinent = () => {
  const [_result, setResult] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((result) => setResult(result));
  }, []);

  console.log(_result);
  return (
    <div className="">
      <FormControl variant="outlined">
        <InputLabel id="demo-simple-select-standard-label">
          Select Continent
        </InputLabel>
        <Select
          sx={{ width: "100%" }}
          className="w-full"
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          name="continentId"
          //   defaultValue={formData?.continentId}
          //   onChange={handleChange}
          label="Select Continent"
        >
          {_result?.map((flag) => (
            <MenuItem key={flag?.id} value={flag?.id}>
              {flag?.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectContinent;
