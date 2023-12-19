import { useState } from "react";
import { Box, TextField, Button } from "@mui/material";

const SerachForm = () => {
  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setFormData((pre) => ({
      ...pre,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const info = {
      country: formData.country,
      checkIn: formData.checkIn,
      checkOut: formData.checkOut,
    };

    console.log(info);
  };

  const [formData, setFormData] = useState({
    country: "",
    checkIn: "",
    checkOut: "",
  });

  return (
    <>
      <Box
        onSubmit={handleSubmit}
        component="form"
        noValidate
        autoComplete="off"
        className="flex md:flex-row flex-col gap-5 items-center bg-zinc-50 w-fit px-4 py-4 rounded-2xl"
      >
        <TextField
          color="info"
          variant="outlined"
          required
          id="outlined-required"
          label="Required"
          type="text"
          className="w-full"
          name="country"
          defaultValue={formData.value}
          onChange={handleChange}
        />

        <TextField
          required
          className="w-full"
          variant="outlined"
          id="outlined-required2"
          type="date"
          name="checkIn"
          defaultValue={formData.value}
          onChange={handleChange}
        />

        <TextField
          required
          variant="outlined"
          id="outlined-required3"
          type="date"
          name="checkOut"
          className="w-full"
          defaultValue={formData.value}
          onChange={handleChange}
        />
        <button
          type="submit"
          className=" bg-[#0288d1] px-6 py-4 rounded-lg w-full"
        >
          Search
        </button>
      </Box>
    </>
  );
};

export default SerachForm;
