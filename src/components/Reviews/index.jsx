import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import { SingleReviewItem } from './SingleReviewItem';

const styles = StyleSheet.create({
  container: {
    marginBottom: 340
  }
});

export default function Reviews ({ reviews, onEndReach }) {
  if (!reviews || reviews.length === 0) {
    return null;
  }

  const reviewNodes = reviews
    ? reviews.edges.map(edge => edge.node)
    : [];

  const renderItem = ({ item }) => <SingleReviewItem item={item} />;

  return (
    <FlatList
      data={reviewNodes}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      style={styles.container}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.1}
    />
  );
}