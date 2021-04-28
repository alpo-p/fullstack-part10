import React from 'react';
import { RepositoryListContainer } from '../../components/RepositoryList';
import { render } from '@testing-library/react-native';

describe('RepositoryList', () => {
  describe('RepositoryListContainer', () => {
    it('renders repo info correctly', () => {
      const repositories = {
        totalCount: 8,
        pageInfo: {
          hasNextPage: true,
          endCursor:
            'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
        },
        edges: [
          {
            node: {
              id: 'jaredpalmer.formik',
              fullName: 'jaredpalmer/formik',
              description: 'Build forms in React, without the tears',
              language: 'TypeScript',
              stargazersCount: 21856,
              forksCount: 1619,
              reviewCount: 3,
              ratingAverage: 88,
              ownerAvatarUrl:
                'https://avatars2.githubusercontent.com/u/4060187?v=4',
            },
            cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
          },
          {
            node: {
              id: 'async-library.react-async',
              fullName: 'async-library/react-async',
              description: 'Flexible promise-based React data loader',
              language: 'JavaScript',
              stargazersCount: 1760,
              forksCount: 69,
              reviewCount: 3,
              ratingAverage: 72,
              ownerAvatarUrl:
                'https://avatars1.githubusercontent.com/u/54310907?v=4',
            },
            cursor:
              'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          },
        ],
      };
      
      const { getAllByTestId } = render(<RepositoryListContainer repositories={repositories} />);

      const fullName = getAllByTestId('fullName');
      expect(fullName[0]).toHaveTextContent('jaredpalmer/formik');
      expect(fullName[1]).toHaveTextContent('async-library/react-async');

      const description = getAllByTestId('description');
      expect(description[0]).toHaveTextContent('Build forms in React, without the tears');
      expect(description[1]).toHaveTextContent('Flexible promise-based React data loader');
      
      const language = getAllByTestId('language');
      expect(language[0]).toHaveTextContent('TypeScript');
      expect(language[1]).toHaveTextContent('JavaScript');

      const footerBoxes = getAllByTestId('footerBoxNumber');
      expect(footerBoxes[0]).toHaveTextContent('21.9k');
      expect(footerBoxes[1]).toHaveTextContent('1.6k');
      expect(footerBoxes[2]).toHaveTextContent('3');
      expect(footerBoxes[3]).toHaveTextContent('88');
      expect(footerBoxes[4]).toHaveTextContent('1.8k');
      expect(footerBoxes[5]).toHaveTextContent('69');
      expect(footerBoxes[6]).toHaveTextContent('3');
      expect(footerBoxes[7]).toHaveTextContent('72');
    });
  });
});