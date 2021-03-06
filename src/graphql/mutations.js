import { gql } from "@apollo/client";

export const AUTHORIZE = gql`
  mutation authorize($username: String!, $password: String!) {
    authorize(credentials: {
      username:$username,
      password:$password
    }) {
      accessToken
    }
  }
`;

export const CREATE_USER = gql`
  mutation createUser(
    $username: String!
    $password: String!
  ) {
    createUser(
      user: {
        username: $username
        password: $password
      }
    ) {
      username
    }
  }
`;

export const CREATE_REVIEW = gql`
  mutation createReview(
    $repoName: String!
    $ownerName: String!
    $rating: Int!
    $text: String
  ) {
    createReview(
      review: {
        repositoryName: $repoName
        ownerName: $ownerName
        rating: $rating
        text: $text
      }
    ) {
      repositoryId
    }
  }
`;

export const DELETE_REVIEW = gql`
  mutation deleteReview($reviewId:ID!) {
    deleteReview(id:$reviewId) 
  }
`;