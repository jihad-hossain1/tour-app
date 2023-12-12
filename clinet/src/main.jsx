import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/Router.jsx";
import Layout from "./layout/Layout.jsx";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: `${import.meta.env.VITE_BASE_URL}`,
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <ApolloProvider client={client}>
    <RouterProvider router={router}>
      <Layout />
    </RouterProvider>
  </ApolloProvider>
);
