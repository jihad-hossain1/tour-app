import { Avatar, Button, Rating, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { Link } from "react-router-dom";

const GuideReserve = () => {
  const [people, setpeople] = useState("");

  const handleChange = (event) => {
    setpeople(event.target.value);
  };

  return (
    <div className="border border-zinc-200 p-4 min-w-[390px] rounded-lg shadow-md">
      <div className="flex gap-3 items-center">
        <h4 className="font-semibold">{`${"Cultural day tour of Tangier".slice(
          0,
          16
        )}...`}</h4>
        <h4 className="bg-black/10 px-3 py-1 rounded text-xs">{`Tangier`}</h4>
        <h4 className="bg-black/10 px-3 py-1 rounded text-xs">{`${6} hours ${20} min`}</h4>
      </div>
      <hr className="h-[1px] bg-slate-200 w-full my-4" />
      <div className="flex flex-col gap-4">
        <TextField type="date" name="data" fullWidth />
        <div className="flex flex-col gap-4">
          <FormControl sx={{ m: 0, minWidth: 120 }} fullWidth>
            <InputLabel id="demo-controlled-open-select-label">
              People
            </InputLabel>
            <Select
              fullWidth
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              value={people}
              placeholder="People"
              label="People"
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={2}>Two</MenuItem>
              <MenuItem value={3}>Three</MenuItem>
              <MenuItem value={4}>Four</MenuItem>
            </Select>
          </FormControl>

          <FormControl sx={{ m: 0, minWidth: 120 }} fullWidth>
            <InputLabel id="demo-controlled-open-select-label">
              Start Time
            </InputLabel>
            <Select
              fullWidth
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              // value={people}
              placeholder="Start Time"
              label="Start Time"
              // onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={9}>9.00 AM</MenuItem>
              <MenuItem value={10}>10.00 AM</MenuItem>
              <MenuItem value={11}>11.00 AM</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      <hr className="h-[1px] bg-slate-200 w-full my-4" />
      <div className="flex flex-col gap-5">
        <Button
          fullWidth
          style={{
            paddingBottom: "13px",
            paddingTop: "13px",
            borderRadius: "20px",
          }}
          variant="contained"
          color="info"
        >
          Message Rabebe E.
        </Button>
        <Button
          fullWidth
          style={{
            paddingBottom: "13px",
            paddingTop: "13px",
            borderRadius: "20px",
            backgroundColor: "#f59e0b",
          }}
          variant="contained"
        >
          Reserve
        </Button>
      </div>
      <div className="mt-5 flex justify-center flex-col items-center gap-3">
        <div className="flex gap-1 items-center text-xs">
          <div className="w-fit flex items-center gap-1">
            <Rating value={5} readOnly />
            <span className="font-semibold"> {`${5.0}/5`}</span>
          </div>
          <div className="w-fit font-bold">{`(${1} reviews)`}</div>
        </div>
        <div className="w-fit flex flex-col items-center">
          <h4 className="text-2xl font-semibold">{`$${190}`}</h4>
          <h5 className="text-sm">per group</h5>
        </div>
        <Link to={"#"} className="flex items-center gap-2">
          <IoIosCheckmarkCircle className="text-green-700" size={23} />
          <span className="hover:underline hover:text-blue-500">
            FREE cancellation 8 days prior
          </span>
        </Link>
      </div>
    </div>
  );
};
export default GuideReserve;
