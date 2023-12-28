import { gql } from "@apollo/client";


const GET_REVIEWS = gql`
  #graphql
  query getReviews($id: ID!) {
    reviesByTourSpot(id: $id) {
      id
      name
      content
      title
      rating
      email
      img
    }
  }
`;

export { GET_REVIEWS };
