import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { UPDATE_PROJECT } from "../../mutation/projectMutations";
import { GET_PROJECT } from "../../queries/projectsQuery";
import toast, { Toaster } from "react-hot-toast";
import { LuPencilLine } from "react-icons/lu";

const EditProject = ({ project }) => {
  const [isEditMode, setEditMode] = useState(false);

  const [name, setName] = useState(project?.name);
  const [details, setDetails] = useState(project?.details);
  const [status, setStatus] = useState("");

  const [updateProject] = useMutation(UPDATE_PROJECT, {
    variables: { id: project.id, name, details, status },
    refetchQueries: [{ query: GET_PROJECT, variables: { id: project.id } }],
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !details || !status) {
      return toast.error("required all fill");
    }
    updateProject(name, details, status);
    toast.success(`Successfull update ${project?.name}`);
  };
  return (
    <>
      <button
        onClick={() => setEditMode(!isEditMode)}
        className={isEditMode && "hidden"}
      >
        <LuPencilLine size={25} />
      </button>
      {isEditMode && (
        <div>
          <Toaster />
          <h4 className="text-xl font-semibold">EditProject</h4>
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

            <div className="my-4 flex justify-between items-center">
              <button className="bg-green-600 p-2 w-fit" type="submit">
                update
              </button>
              <button
                onClick={() => setEditMode(false)}
                className="bg-orange-600 p-2 w-fit"
              >
                cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default EditProject;
