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
import Test from "../components/test/Test";
import ManageContinents from "../pages/dashboard/Continents/ManageContinents";
import TourGuide from "../pages/tourGuide/TourGuide";
import TourGuideDetails from "../components/TourGuide/TourGuideDetails";
import GuidePersonReview from "../components/TourGuide/GuidePerson/GuidePersonReview";

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
        path: "/test",
        element: <Test />,
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
      {
        path: "/tourGuide",
        element: <TourGuide />,
      },
      {
        path: "/tourGuide/tourGuideDetails/:id",
        element: <TourGuideDetails />,
      },
      {
        path: "/tourGuide/guide/review/:id",
        element: <GuidePersonReview />,
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
      {
        path: "/dashboard/ManageContinents",
        element: <ManageContinents />,
      },
    ],
  },
]);
