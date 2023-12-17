import { gql } from "@apollo/client";

const GET_CONTINETS = gql`
  #graphql
  query getContinent {
    continents {
      id
      name
      code
      countries {
        name
        continentId
      }
    }
  }
`;

const GET_CONTINET = gql`
  #graphql
  query getContinent($id: ID!) {
    singleContinent(id: $id) {
      id
      name
      description
    }
  }
`;

export { GET_CONTINETS, GET_CONTINET };
