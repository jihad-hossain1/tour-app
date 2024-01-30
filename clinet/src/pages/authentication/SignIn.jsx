import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_CLIENT } from "../../mutation/clientMutation";
// import { GET_CLIENTS } from "../../queries/clientsQuery";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate, useNavigation } from "react-router-dom";
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


const SignIn = () => {
  const [isClient, setClient] = useState(getClient());
  const navigate = useNavigate();
  if (isClient) {
    return <AlertAlreadySignIn />;
  }

  const scafolding = {
    email: "",
    password: "",
  };

  const [formData, setFormData] = useState(scafolding);
  const [loginClient, { data, error, loading }] = useMutation(LOGIN_CLIENT, {
    variables: { email: formData?.email, password: formData?.password },
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

    const { email, password } = formData;
    loginClient(email, password);

    const client = data?.loginClient;
    // console.log(client);

    if (client) {
      toast.success("login successfull");
      localStorage.setItem("client", JSON.stringify(data?.loginClient));
      setTimeout(() => {
        navigate("/dashboard");
      }, 1500);
    }
  };

  // console.log(isClient);

  return (
    <div className="min-h-screen">
      <Toaster />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in for client
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              defaultValue={formData?.email}
              onChange={handleChange}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              defaultValue={formData?.password}
              onChange={handleChange}
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link to="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default SignIn;
