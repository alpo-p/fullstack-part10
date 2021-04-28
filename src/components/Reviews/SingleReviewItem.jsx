import React from 'react';
import { StyleSheet, View } from 'react-native';
import { format } from 'date-fns';

import theme from '../../theme';
import Text from '../Text';

export const styles = StyleSheet.create({
  reviewContainer: {
    flexDirection: 'column',
    marginTop: 10,
    backgroundColor: theme.colors.listItemBackground
  },

  headerContainer: {
    flexDirection: 'row'
  },
  ratingContainer: {
    margin: 10,
    paddingTop: 12,
    width: 50,
    height: 50,
    borderWidth: 2,
    borderRadius: 50/2,
    borderColor: theme.colors.primary,
  },
  ratingText: {
    color: theme.colors.primary,
    alignSelf: 'center',
  },
  reviewerInfo: {
    marginTop: 15,
    flexDirection: 'column'
  },

  reviewTextContainer: {
    marginTop: -5,
    marginLeft: 70,
    marginRight: 30,
    marginBottom: 15
  },
  reviewText: {
    textAlign: 'justify'
  }
});

export const Rating = ({ rating }) => (
  <View style={styles.ratingContainer}>
    <Text subheading bold style={styles.ratingText}>{rating}</Text>
  </View>
);

export const DateText = ({ createdAt }) => {
  let date;
  try {
    date = format(new Date(createdAt), 'dd.MM.yyyy');   
  } catch(e) {
    date = '01.01.2021';
  }

  return <Text color='textSecondary'>{date}</Text>;
};

const Title = ({ item }) => (
  <View style={styles.reviewerInfo}>
    <Text style={{paddingBottom: 3}} bold>{item.user.username}</Text>
    <DateText createdAt={item.createdAt} />
  </View>
);

const Header = ({ item }) => (
  <View style={styles.headerContainer}>
    <Rating rating={item.rating} />
    <Title item={item} />
  </View>
);

export const ReviewText = ({ text }) => (
  <View style={styles.reviewTextContainer}>
    <Text style={styles.reviewText}>
      {text}
    </Text>
  </View>
);

export const SingleReviewItem = ({ item }) => (
  <View style={styles.reviewContainer}>
    <Header item={item} />
    <ReviewText text={item.text} />
  </View>
);
