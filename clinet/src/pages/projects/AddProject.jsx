import { useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { GET_PROJECTS } from "../../queries/projectsQuery";
import { GET_CLIENTS } from "../../queries/clientsQuery";
import { ADD_PROJECT } from "../../mutation/projectMutations";

const AddProject = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [details, setDetails] = useState("");
  const [clientId, setClientId] = useState("");
  const [status, setStatus] = useState("new");

  const [addProject] = useMutation(ADD_PROJECT, {
    variables: { name, details, clientId, status },
    refetchQueries: [{ query: GET_PROJECTS }],
  });

  const { loading, error, data } = useQuery(GET_CLIENTS);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || details === "" || status === "") {
      return alert("please fill all fields");
    }

    addProject(name, details, status, clientId);

    setName("");
    setDetails("");
    setClientId("");
    setStatus("new");

    toast.success(`successfull added project: ${name}`);
    setTimeout(() => {
      navigate("/projects");
    }, 2000);
  };

  if (loading) return null;
  if (error) return "something went wrong";

  return (
    <div>
      <Toaster />
      <h4 className="text-center">Add Project Form</h4>
      {!loading && !error && (
        <>
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
            <label htmlFor="details">details</label>
            <textarea
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              type="text"
              name="details"
              className="bg-zinc-500 border border-orange-400 focus:outline-none p-2 w-full"
            />
            <label htmlFor="details">status</label>
            <select
              onChange={(e) => setStatus(e.target.value)}
              name="status"
              value={status}
              id=""
              className="bg-zinc-500 border border-orange-400 focus:outline-none p-2 w-full"
            >
              <option value="new">not started</option>
              <option value="progress">in progress</option>
              <option value="completed">complete</option>
            </select>
            <label htmlFor="details">select client</label>
            <select
              onChange={(e) => setClientId(e.target.value)}
              name="status"
              value={clientId}
              id=""
              className="bg-zinc-500 border border-orange-400 focus:outline-none p-2 w-full"
            >
              {data?.clients.map((client) => (
                <option value={client?.id} key={client?.id}>
                  {client?.name}
                </option>
              ))}
            </select>
            <div className="my-4">
              <button className="bg-green-600 p-2 w-fit" type="submit">
                Submit
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default AddProject;
