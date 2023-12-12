import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Layout from "../layout/Layout";
import Clients from "../components/clients/Clients";
import AddClientForm from "../components/AddClientForm";
import Projects from "../pages/projects/Projects";
import Project from "../pages/projects/Project";
import AddProject from "../pages/projects/AddProject";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/clients",
        element: <Clients />,
      },
      {
        path: "/addClient",
        element: <AddClientForm />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/addProject",
        element: <AddProject />,
      },
      {
        path: "/project/:id",
        element: <Project />,
      },
    ],
  },
]);
