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
  query getContinent {
    continents {
      name
      countries {
        name
        continentId
      }
    }
  }
`;

export { GET_CONTINETS, GET_CONTINET };
