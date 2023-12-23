import { gql } from "@apollo/client";

const GET_TOURSPOTS = gql`
  #graphql
  query getTourSpots {
    tourSpots {
      id
      name
    }
  }
`;
const GET_SINGLE_COUNTRY_TOURSPOT_LIST = gql`
  #graphql
  query getSingleCountryTourspotList($id: ID!) {
    singleCountryTourspotList(id: $id) {
      id
      name
    }
  }
`;
const GET_SINGLE_TOURSPOT_DETAILS = gql`
  #graphql
  query getSingleTourspotDetails($id: ID!) {
    singleTourspotDetails(id: $id) {
      id
      name
      description
    }
  }
`;

export {
  GET_SINGLE_COUNTRY_TOURSPOT_LIST,
  GET_SINGLE_TOURSPOT_DETAILS,
  GET_TOURSPOTS,
};
