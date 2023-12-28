import { gql } from "@apollo/client";

const ADD_REVIEW = gql`
  #graphql
  mutation AddReview(
    $name: String!
    $content: String!
    $tourSpotId: ID!
    $title: String!
    $email: String!
    $img: String!
    $rating: Int!
  ) {
    addReview(
      name: $name
      content: $content
      tourSpotId: $tourSpotId
      title: $title
      email: $email
      img: $img
      rating: $rating
    
    ) {
      id
      name
      
    }
  }
`;


export { ADD_REVIEW };