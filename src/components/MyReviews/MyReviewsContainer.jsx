import { useQuery } from '@apollo/client';
import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { AUTHORIZED_USER } from '../../graphql/queries';
import Text from '../Text';
import SingleReviewWithRepoAsTitleContainer from './SingleReviewWithRepoAsTitleContainer';

const styles = StyleSheet.create({
  container: {
    marginBottom: 5
  }
});

const MyReviewsContainer = () => {
  const { data, loading, refetch } = useQuery(AUTHORIZED_USER, {
    variables: { includeReviews: true },
    fetchPolicy: 'cache-and-network'
  });

  if (loading) return (
    <Text>Loading...</Text>
  );

  const reviews = data.authorizedUser.reviews.edges.map(edge => edge.node);

  const renderItem = ({ item }) => (
    <SingleReviewWithRepoAsTitleContainer item={item} refetch={refetch}/>
  ); 
  
  return (
    <FlatList
      data={reviews}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      style={styles.container}
    />
  );
};

export default MyReviewsContainer;
