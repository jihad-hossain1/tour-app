import { gql } from "@apollo/client";

const GET_PROJECTS = gql`
  #graphql
  query getProjects {
    projects {
      id
      name
      status
    }
  }
`;

const GET_PROJECT = gql`
  #graphql
  query getProject($id: ID!) {
    project(id: $id) {
      id
      name
      details
      status
      client {
        id
        name
        phone
      }
    }
  }
`;

export { GET_PROJECTS, GET_PROJECT };
