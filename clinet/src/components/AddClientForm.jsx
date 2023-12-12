import { useMutation } from "@apollo/client";
import { ADD_CLIENT } from "../mutation/clientMutation";
import { useState } from "react";
import { GET_CLIENTS } from "../queries/clientsQuery";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const AddClientForm = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const [addClient] = useMutation(ADD_CLIENT, {
    variables: { name, phone },
    refetchQueries: [{ query: GET_CLIENTS }],
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || phone === "") {
      return alert("please fill all fields");
    }
    addClient(name, phone);
    setName("");
    setPhone("");
    toast.success(`successfull added client: ${name}`);
    setTimeout(() => {
      navigate("/clients");
    }, 2000);
  };

  return (
    <div>
      <Toaster />
      <h4 className="text-center">AddClientForm</h4>
      <form
        onSubmit={handleSubmit}
        className="max-w-[500px] mx-auto flex flex-col gap-3"
      >
        <label htmlFor="name">Name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          name="name"
          className="bg-zinc-500 border border-orange-400 focus:outline-none p-2 w-full"
        />
        <label htmlFor="phone">phone</label>
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          type="text"
          name="phone"
          className="bg-zinc-500 border border-orange-400 focus:outline-none p-2 w-full"
        />
        <div className="my-4">
          <button className="bg-green-600 p-2 w-fit" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddClientForm;
