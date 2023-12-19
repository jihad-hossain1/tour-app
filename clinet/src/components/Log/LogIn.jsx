import React, { useState } from "react";
import { Box, TextField, Button } from "@mui/material";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  console.log(email);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Box
      onSubmit={handleSubmit}
      component="form"
      //   sx={{
      //     "& .MuiTextField-root": { m: 1, width: "25ch" },
      //   }}
      //   noValidate
      className="my-4 flex flex-col gap-3"
      autoComplete="off"
    >
      <TextField
        className="w-full"
        name="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        required
        type="email"
        id="outlined-required"
        label="Email"
      />
      <TextField
        className="w-full"
        type="password"
        name="password"
        onChange={(e) => setpassword(e.target.value)}
        value={password}
        required
        id="outlined-required2"
        label="Password"
      />
      <Button variant="contained" color="info" type={"submit"}>
        LogIn
      </Button>
    </Box>
  );
};

export default LogIn;
