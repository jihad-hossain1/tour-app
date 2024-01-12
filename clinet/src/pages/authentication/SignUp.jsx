import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_CLIENT } from "../../mutation/clientMutation";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { getClient } from "../../router/ClientRoute";
import AlertAlreadySignIn from "../../components/AlertAlreadySignIn";

// from my design

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";



const SignUp = () => {
  const [isClient, setClient] = useState(getClient());
  const navigate = useNavigate();
  if (isClient) {
    return <AlertAlreadySignIn />;
  }

  const scafolding = {
    name: "",
    phone: "",
    email: "",
    password: "",
    image: "",
    clientType: "",
  };

  const [formData, setFormData] = useState(scafolding);
  const [addClient, { data, error, loading }] = useMutation(ADD_CLIENT, {
    variables: {
      email: formData?.email,
      password: formData?.password,
      phone: formData?.phone,
      image: formData?.image,
      name: formData?.name,
      clientType: formData?.clientType,
    },
    // refetchQueries: [{ query: GET_CLIENTS }],
  });

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
    // console.log(formData);
    const { email, password, phone, image, name, clientType } = formData;
    addClient(email, password, phone, image, name, clientType);

    const client = data?.addClient;
    // console.log(client);

    if (client) {
      toast.success("account create successfull");
      localStorage.setItem("client", JSON.stringify(client));
      setFormData("");
      setTimeout(() => {
        navigate("/");
      }, 1500);
    }
  };

  // console.log(error);

  return (
    <>
      <Toaster />
      <Container component="main" maxHeight="xs" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  defaultValue={formData?.name}
                  onChange={handleChange}
                  autoFocus
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  defaultValue={formData?.email}
                  onChange={handleChange}
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="phone"
                  label="Phone Number"
                  name="phone"
                  defaultValue={formData?.phone}
                  onChange={handleChange}
                  autoComplete="phone"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  defaultValue={formData?.password}
                  onChange={handleChange}
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl sx={{ m: 0, minWidth: 120 }} fullWidth>
                  <InputLabel id="demo-simple-select-label">Client Type</InputLabel>
                  <Select
                    item xs={12}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    defaultValue={formData?.clientType}
                    label="Client Type"
                    onChange={handleChange}
                    name="clientType"
                  >
                    <MenuItem value="TourGuide">Tour Guide</MenuItem>
                    <MenuItem value="CarRent">Car Rent</MenuItem>
                    <MenuItem value="ParkingShare">Parking Share</MenuItem>
                    <MenuItem value="ReturantManagement">Returant Management</MenuItem>
                    <MenuItem value="HotelManagement">Hotel Management</MenuItem>
                    <MenuItem value="Blogger">Blogger</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="image"
                  label="Image Url"
                  type="text"
                  id="image"
                  defaultValue={formData?.image}
                  onChange={handleChange}
                  autoComplete="new-image"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/signin" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default SignUp;
