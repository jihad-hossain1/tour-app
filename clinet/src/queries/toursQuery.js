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
      photo
      description
      city {
        name
      }
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
      photo
      perfectTourTime
      howToGoThere
      howToStayThere
      howDoHere
      whereToEat
      tourTipsGuide
      topTourPlace
      cityId
      city {
        id
        name
      }
      reviews {
      id
      name
      title
      email
      img
      rating
      createdAt
      content
      replies {
        id
        name
        email
        img
        createdAt
        content
      }
    }
    }
  }
`;

const GET_SINGLE_TOURSPOT = gql`
  #graphql
  query getSingleTourspot($id: ID!) {
    singleTourspot(id: $id) {
      id
      name
      description
      photo
      countryId
      cityId
      divisionId
      perfectTourTime
      howToGoThere
      howToStayThere
      howDoHere
      whereToEat
      tourTipsGuide
      topTourPlace
    }
  }
`;

const GET_RELATED_TOURSPOTS = gql`
  #graphql
  query getRelatedTourSpot($cityId: ID!) {
    relatedTourSpots(cityId: $cityId) {
      id
      name
      photo
      description
    }
  }
`;

export {
  GET_SINGLE_COUNTRY_TOURSPOT_LIST,
  GET_SINGLE_TOURSPOT_DETAILS,
  GET_TOURSPOTS,
  GET_SINGLE_TOURSPOT,
  GET_RELATED_TOURSPOTS,
};
