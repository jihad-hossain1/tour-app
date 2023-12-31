import { gql } from "@apollo/client";

const ADD_REVIEW = gql`
  #graphql
  mutation addReviewReply(
    $name: String!
    $content: String!
    $tourSpotId: ID!
    $title: String!
    $email: String!
    $img: String!
    $rating: Int!
  ) {
    addReviewReply(
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
const ADD_REPLY = gql`
  #graphql
  mutation addReply(
    $name: String!
    $content: String!
    $reviewId: ID!
    $email: String!
    $img: String!
    
  ) {
    addReply(
      name: $name
      content: $content
      reviewId: $reviewId
      email: $email
      img: $img
    ) {
      id
      name
      
    }
  }
`;


const DELETE_REVIEW_WITH_REPLY = gql`
  #graphql
  mutation deleteReviewWithReply($reviewId: ID!) {
    deleteReviewWithReply(reviewId: $reviewId) {
      id
    }
  }
`;

// deleteReviewWithReply

export { ADD_REVIEW,ADD_REPLY,DELETE_REVIEW_WITH_REPLY };