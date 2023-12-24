import { createBrowserRouter } from "react-router-dom";
// import App from "../App";
import Layout from "../layout/Layout";
import Clients from "../components/clients/Clients";
import AddClientForm from "../components/AddClientForm";
import Projects from "../pages/projects/Projects";
import Project from "../pages/projects/Project";
import AddProject from "../pages/projects/AddProject";
import Home from "../pages/home/Home";
import Continent from "../pages/home/Continent";
import CountryListByTour from "../pages/tours/CountryListByTour";
import SingleToursportDetails from "../pages/tours/SingleToursportDetails";
import DashboardLayout from "../layout/DashboardLayout";
import Dashborad from "../pages/dashboard/Dashborad";
import ManageTourSpot from "../pages/dashboard/TourSpot/ManageTourSpot";
import UpdateTourSpot from "../pages/dashboard/TourSpot/UpdateTourSpot";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
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
      {
        path: "/continent/:id",
        element: <Continent />,
      },
      {
        path: "/countryListByTour/:id",
        element: <CountryListByTour />,
      },
      {
        path: "/singleToursportDetails/:id",
        element: <SingleToursportDetails />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashborad />,
      },
      {
        path: "/dashboard/tourSpot",
        element: <ManageTourSpot />,
      },
      {
        path: "/dashboard/UpdateTourSpot/:id",
        element: <UpdateTourSpot />,
      },
    ],
  },
]);
