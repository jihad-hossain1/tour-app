import { useMutation } from "@apollo/client";
import { FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { GET_PROJECTS } from "../../queries/projectsQuery";
import { DELETE_PROJECT } from "../../mutation/projectMutations";
import toast, { Toaster } from "react-hot-toast";

const DeleteProject = ({ pid }) => {
  const navigate = useNavigate();

  const [deleteProject] = useMutation(DELETE_PROJECT, {
    variables: { id: pid },
    onCompleted: () => {
      toast.success("project has deleted");
      setTimeout(() => {
        navigate("/projects");
      }, 1500);
    },
    refetchQueries: [{ query: GET_PROJECTS }],
  });
  return (
    <div>
      <Toaster />
      <button onClick={deleteProject}>
        <FaTrash size={25} className="text-orange-600" />
      </button>
    </div>
  );
};

export default DeleteProject;
