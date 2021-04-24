import { gql } from '@apollo/client';

import { REPO_DETAILS } from './fragments';

export const REPOSITORIES = gql`
  query REPOSITORIES {
    repositories {
      edges {
        node {
          ...RepoDetails
        } 
      }
    }
  }
    ${REPO_DETAILS}
`;

export const AUTHORIZED_USER = gql`
  query AUTHORIZED_USER {
    authorizedUser {
      id
    }
  }
`;