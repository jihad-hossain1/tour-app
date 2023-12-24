import { gql } from "@apollo/client";

const ADD_TOURSPOT = gql`
  #graphql
  mutation addTourSpot(
    $name: String
    $description: String
    $photo: String
    $countryId: ID!
    $divisionId: ID!
    $cityId: ID!
    $tourTipsGuide: String
    $howDoHere: String
    $howToGoThere: String
    $howToStayThere: String
    $whereToEat: String
    $topTourPlace: String
    $perfectTourTime: String
  ) {
    addTourSpot(
      name: $name
      photo: $photo
      description: $description
      countryId: $countryId
      divisionId: $divisionId
      cityId: $cityId
      tourTipsGuide: $tourTipsGuide
      howDoHere: $howDoHere
      howToGoThere: $howToGoThere
      whereToEat: $whereToEat
      perfectTourTime: $perfectTourTime
      howToStayThere: $howToStayThere
      topTourPlace: $topTourPlace
    ) {
      photo
      name
      description
    }
  }
`;
export { ADD_TOURSPOT };
