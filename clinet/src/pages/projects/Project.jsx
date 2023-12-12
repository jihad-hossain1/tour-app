import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { GET_PROJECT } from "../../queries/projectsQuery";
import ClientInfo from "./ClientInfo";
import DeleteProject from "./DeleteProject";
import EditProject from "./EditProject";

const Project = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_PROJECT, {
    variables: { id },
  });

  if (loading) {
    return <div>Loading....</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div className="max-w-screen-xl mx-auto p-2">
      <h4 className="my-4 text-center font-semibold">Project Details</h4>
      <div className=" p-4 md:p-10 rounded border border-zinc-800">
        <div className=" flex justify-between items-center">
          <div className="flex flex-col gap-2">
            <h4 className="text-3xl font-semibold">{data?.project.name}</h4>
            <p className="text-sm font-sans ">{data?.project.details}</p>
            <div className="px-1 text-xs bg-indigo-700 w-fit rounded shadow">
              {data?.project.status}
            </div>
          </div>
          <div>
            <h4 className="underline mb-3">client-Info:</h4>
            <ClientInfo client={data?.project.client}></ClientInfo>
          </div>
        </div>
        <div className="">
          <DeleteProject pid={data.project.id} />
          <EditProject project={data.project} />
        </div>
      </div>
    </div>
  );
};

export default Project;
