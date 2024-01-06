import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_CLIENT } from "../../mutation/clientMutation";
// import { GET_CLIENTS } from "../../queries/clientsQuery";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate, useNavigation } from "react-router-dom";
import { getClient } from "../../router/ClientRoute";

const SignUp = () => {
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
    console.log(client);

    if (client) {
      toast.success("account create successfull");
      localStorage.setItem("client", JSON.stringify(data?.addClient?.id));
      setFormData("");
      setTimeout(() => {
        navigate("/");
      }, 1500);
    }
  };

  // console.log(error);

  return (
    <div className="bg-zinc-800 min-h-screen text-zinc-100">
      <Toaster />
      <div className="max-w-screen-md mx-auto px-4  pt-10 lg:pt-20">
        <h4>SignUp</h4>
        <form action="" onSubmit={handleSubmit} className="flex flex-col gap-2">
          <label htmlFor="">name</label>
          <input
            className="text-zinc-800"
            required
            type="text"
            name="name"
            defaultValue={formData?.name}
            onChange={handleChange}
            placeholder="name"
            id="3"
          />

          <label htmlFor="">phone</label>
          <input
            className="text-zinc-800"
            required
            type="phone"
            name="phone"
            defaultValue={formData?.phone}
            onChange={handleChange}
            placeholder="phone"
            id="3"
          />

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

          <label htmlFor="">photo url</label>
          <input
            className="text-zinc-800"
            required
            type="text"
            name="image"
            defaultValue={formData?.image}
            onChange={handleChange}
            placeholder="image"
            id="3"
          />

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
          <label htmlFor="clientType">User Type </label>
          <select
            onChange={handleChange}
            name="clientType"
            defaultValue={formData?.clientType}
            id=""
            className="bg-zinc-500 border border-orange-400 focus:outline-none p-2 w-full"
          >
            <option value="TourGuide">Tour Guide</option>
            <option value="CarRent">Car Rent</option>
            <option value="ParkingShare">Parking Share</option>
            <option value="ReturantManagement">Returant Management</option>
            <option value="HotelManagement">Hotel Management</option>
            <option value="Blogger">Blogger</option>
          </select>
          <div>
            <button type="submit">
              {loading ? (
                <span>Loading....</span>
              ) : (
                <span className="border bg-violet-600 text-white px-3">
                  create
                </span>
              )}
            </button>
          </div>
        </form>
        {error && <p className="text-sm text-red-500">{error?.message}</p>}
        <div className="flex justify-end">
          <Link to={"/signup"} className="hover:text-blue-600 hover:underline">
            create a new account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
