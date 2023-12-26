import { gql } from "@apollo/client";

const GET_CONTINETS = gql`
  #graphql
  query getContinent {
    continents {
      id
      name
      code
      img
      countries {
        name
        continentId
      }
    }
  }
`;

const GET_CONTINETS_MANAGEMENTS = gql`
  #graphql
  query getContinents {
    continents {
    id
    name
    countries{
      id
      name
      division{
        id
        name
        cities{
          id
          name
          touristSpots{
            id
            name
          }
        }
        
      }
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

export { GET_CONTINETS, GET_CONTINET,GET_CONTINETS_MANAGEMENTS };
