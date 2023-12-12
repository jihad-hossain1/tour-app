import { useMutation } from "@apollo/client";
import { FaTrash } from "react-icons/fa";
import { DELETE_CLIENT } from "../mutation/clientMutation";
import { GET_CLIENTS } from "../queries/clientsQuery";
import toast, { Toaster } from "react-hot-toast";
import { GET_PROJECTS } from "../queries/projectsQuery";

const DeleteClient = ({ cid }) => {
  const [deleteClient] = useMutation(DELETE_CLIENT, {
    variables: { id: cid },
    refetchQueries: [{ query: GET_CLIENTS }, { query: GET_PROJECTS }],
  });

  return (
    <>
      <Toaster />
      <button onClick={deleteClient} className="text-orange-500">
        <FaTrash />
      </button>
    </>
  );
};

export default DeleteClient;
