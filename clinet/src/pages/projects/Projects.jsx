import { useQuery } from "@apollo/client";
import { GET_PROJECTS } from "../../queries/projectsQuery";
import { Link } from "react-router-dom";

const Projects = () => {
  const { loading, error, data } = useQuery(GET_PROJECTS);

  if (loading) {
    return <div>Loadnig......</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div className="max-w-screen-xl mx-auto p-2">
      <div>
        <div className="my-6 flex justify-between">
          <div>
            <Link
              to={"/addProject"}
              className="p-2 rounded shadow bg-green-700"
            >
              <span>Add Project</span>
            </Link>
          </div>
          <h4 className="text-2xl font-bold ">Projects</h4>
        </div>

        <div>
          {!loading && !error && (
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 bg-zinc-700 p-2">
              {data?.projects.map((project) => (
                <div
                  key={project?.id}
                  className="w-fit flex gap-4 items-center border rounded border-orange-400 p-3 bg-zinc-800"
                >
                  <div className="flex flex-col gap-3">
                    <h4 className="font-semibold">{project?.name}</h4>
                    <div className="px-1 text-xs bg-indigo-700 w-fit rounded shadow">
                      {project?.status}
                    </div>
                  </div>
                  <div>
                    <Link
                      to={`/project/${project?.id}`}
                      className="border p-2 rounded"
                    >
                      view
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
