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
  mutation deleteReply($reviewId: ID!) {
    deleteReviewWithReply(reviewId: $reviewId) {
      id
    }
  }
`;
// deleteReviewWithReply



const DELETE_REPLY = gql`
  #graphql
  mutation deleteReply($replyId: ID!) {
    deleteReply(replyId: $replyId) 
  }
`;
// deleteReply(replyId: "")



const UPDATE_REVIEW = gql`
  #graphql
  mutation updateReview(
    $reviewId: ID!
    $newContent: String!
    
  ) {
    updateReview(reviewId: $reviewId, newContent: $newContent) {
      id
      content
    }
  }
`;

// updateReview

export { ADD_REVIEW,ADD_REPLY,DELETE_REVIEW_WITH_REPLY,DELETE_REPLY,UPDATE_REVIEW };