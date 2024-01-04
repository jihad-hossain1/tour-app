import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_CLIENT } from "../../mutation/clientMutation";
// import { GET_CLIENTS } from "../../queries/clientsQuery";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate, useNavigation } from "react-router-dom";
import { getClient } from "../../router/ClientRoute";

const SignIn = () => {
  const [isClient, setClient] = useState(getClient());
  const navigate = useNavigate();
  if (isClient) {
    return (
      <div className="flex items-center text-center mt-5">
        you are already SignIn{" "}
        <Link to={"/"} className="underline hover:text-blue-600">
          Go home
        </Link>
      </div>
    );
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

  //   console.log(data);

  return (
    <div className="bg-zinc-800 min-h-screen text-zinc-100">
      <Toaster />
      <div className="max-w-screen-md mx-auto px-4  pt-10 lg:pt-20">
        <h4>SignIn</h4>
        <form action="" onSubmit={handleSubmit} className="flex flex-col gap-2">
          <label htmlFor="">email</label>
          <input
            className="text-zinc-800"
            required
            type="email"
            name="email"
            defaultValue={formData?.email}
            onChange={handleChange}
            placeholder="email"
            id="3"
          />
          {error && <p className="text-sm text-red-500">{error?.message}</p>}
          <label htmlFor="">password</label>
          <input
            className="text-zinc-800"
            required
            type="password"
            name="password"
            defaultValue={formData?.password}
            onChange={handleChange}
            placeholder="password"
            id="2"
          />
          {error && <p className="text-sm text-red-500">{error?.message}</p>}
          <div>
            <button type="submit">
              {loading ? (
                <span>Loading....</span>
              ) : (
                <span className="border bg-violet-600 text-white px-3">
                  submit
                </span>
              )}
            </button>
          </div>
        </form>
        <div className="flex justify-end">
          <Link to={"/signup"} className="hover:text-blue-600 hover:underline">
            create a new account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
