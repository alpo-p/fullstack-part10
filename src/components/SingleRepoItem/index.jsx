import React from 'react';
import { View } from 'react-native';
import { useParams } from 'react-router';

import { useQuery } from '@apollo/client';
import { REPOSITORY } from '../../graphql/queries';

import Text from '../Text';
import { RepositoryItemContainer } from '../RepositoryItemOnList';
import OpenInGithubButton from './OpenInGithubButton';
import Reviews from '../Reviews';

const SingleRepoItem = () => {
  const { id } = useParams();

  const first = 4;
  const variables = { id, first };
  const { data, error, loading, fetchMore } = useQuery(REPOSITORY, {
    variables,
    fetchPolicy: 'cache-and-network'
  });

  if (loading) return <View><Text>Loading...</Text></View>;
  if (error) return <View><Text>Error...</Text></View>;

  const item = data.repository;

  const handleOnEndReach = () => {
    if(loading || !data?.repository.reviews.pageInfo.hasNextPage) return;

    fetchMore({
      variables: {
        after: data.repository.reviews.pageInfo.endCursor,
        ...variables
      }
    });
  };

  return (
    <View>
      <RepositoryItemContainer item={item} /> 
      <OpenInGithubButton url={item.url} />
      <Reviews reviews={item.reviews} onEndReach={handleOnEndReach} />
    </View>
  );
};

export default SingleRepoItem;