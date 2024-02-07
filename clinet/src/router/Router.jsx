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
import SignIn from "../pages/authentication/SignIn";
import SignUp from "../pages/authentication/SignUp";
import ClientPrivateRoute from "./ClientRoute";
import AdminRoute from "./AdminRoute";
import DeniedPage from "../pages/DeniedPage";
import UpdateTourGuide from "../pages/dashboard/TourGuide/action/UpdateTourGuide";
import Destination from "../pages/Destination/Destination";
import AddTourSpotPlaceForGuide from "../pages/dashboard/TourGuide/action/AddTourSpotPlaceForGuide";
import AddTourGuideContributionDetail from "../pages/dashboard/TourGuide/action/AddTourGuideContributionDetail";
import Country from "../components/countries/Country";
import About from "../pages/About";

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
        path: "/country/:id",
        element: <Country />,
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
      {
        path: "/denied",
        element: <DeniedPage />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/destination/:id",
        element: <Destination />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <ClientPrivateRoute>
        <DashboardLayout />
      </ClientPrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <Dashborad />,
      },
      {
        path: "/dashboard/tourSpot",
        element: (
          <AdminRoute>
            <ManageTourSpot />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/UpdateTourSpot/:id",
        element: (
          <AdminRoute>
            <UpdateTourSpot />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/tourguide/profile-update/:id",
        element: <UpdateTourGuide />,
      },
      {
        path: "/dashboard/tourguide/addtourspotplace/:id",
        element: <AddTourSpotPlaceForGuide />,
      },
      {
        path: "/dashboard/tourguide/addTourGuideContributionDetail/:id",
        element: <AddTourGuideContributionDetail />,
      },

      {
        path: "/dashboard/ManageContinents",
        element: (
          <AdminRoute>
            <ManageContinents />
          </AdminRoute>
        ),
      },
    ],
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
]);
