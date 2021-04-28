import { gql } from '@apollo/client';

export const REPO_DETAILS_ON_LIST = gql`
  fragment RepoDetailsOnList on Repository {
    id
    ownerAvatarUrl
    fullName
    description
    language
    stargazersCount
    forksCount
    reviewCount
    ratingAverage
  }
`;

export const REVIEW_DETAILS = gql`
  fragment reviewDetails on ReviewConnection {
    edges {
      node {
        id
        text
        rating
        createdAt
        user {
          id
          username
        }
        repository {
          fullName
          id
        }
      }
      cursor
    }
    pageInfo {
      endCursor
      startCursor
      hasNextPage
    }
  }
`;