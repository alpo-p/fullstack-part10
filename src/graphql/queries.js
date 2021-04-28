import { gql } from '@apollo/client';

import { REPO_DETAILS_ON_LIST, REVIEW_DETAILS } from './fragments';

export const REPOSITORIES = gql`
  query repositories(
    $first: Int!,
    $after: String
    $orderBy: AllRepositoriesOrderBy, 
    $orderDirection: OrderDirection,
    $searchKeyword: String
  ) {
    repositories(
      first: $first,
      after: $after,
      orderBy:$orderBy, 
      orderDirection:$orderDirection,
      searchKeyword: $searchKeyword
    ) {
      edges {
        node {
          ...RepoDetailsOnList
        } 
        cursor
      }
      pageInfo {
        endCursor
        startCursor
        hasNextPage
      }
    }
  }
  ${REPO_DETAILS_ON_LIST}
`;

export const REPOSITORY = gql`
  query repository($id: ID!, $first: Int, $after: String) {
    repository(id:$id) {
      ...RepoDetailsOnList
      url
      reviews(first:$first, after:$after) {
        ...reviewDetails
      }
    }
  }
  ${REPO_DETAILS_ON_LIST}
  ${REVIEW_DETAILS}
`;

export const AUTHORIZED_USER = gql`
  query authorizedUser($includeReviews: Boolean = false) {
    authorizedUser {
      id
      reviews @include(if: $includeReviews) {
        ...reviewDetails
      }
    }
  }
  ${REVIEW_DETAILS}
`;