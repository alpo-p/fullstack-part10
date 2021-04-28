import React from 'react';
import { useMutation } from "@apollo/client";
import { Alert, View } from 'react-native';
import { useHistory } from 'react-router-native';

import Text from '../Text';
import { DateText, ReviewText, styles as reviewItemStyles } from '../Reviews/SingleReviewItem';
import { Rating } from '../Reviews/SingleReviewItem';

import Buttons from './Buttons';
import { DELETE_REVIEW } from '../../graphql/mutations';

const Title = ({ item }) => (
  <View style={reviewItemStyles.reviewerInfo}>
    <Text style={{paddingBottom: 3}} bold>{item.repository.fullName}</Text>
    <DateText createdAt={item.createdAt} />
  </View>
);

const Header = ({ item }) => (
  <View style={reviewItemStyles.headerContainer}>
    <Rating rating={item.rating} />
    <Title item={item} />
  </View>
);

const SingleReviewWithRepoAsTitle = ({ item, handleView, handleDelete }) => (
  <View style={reviewItemStyles.reviewContainer}>
    <Header item={item} />
    <ReviewText text={item.text} />
    <Buttons handleView={handleView} handleDelete={handleDelete} />
  </View>
);

const SingleReviewWithRepoAsTitleContainer = ({ item, refetch }) => {
  const history = useHistory();

  const [deleteReview] = useMutation(DELETE_REVIEW, {
    onError: (e) => {
      throw new Error(e);
    }
  });

  const handleView = () => {
    const repositoryId = item.repository.id;
    history.push(`/repository/${repositoryId}`);
  };

  const handleDelete = () => {
    const onPress = async () => {
      const reviewId = item.id;
      await deleteReview({
        variables: {reviewId}
      });
      refetch();
    };

    Alert.alert(
      'Delete review',
      'Are you sure you want to delete this review?',
      [
        {
          text: 'Cancel',
          style: 'cancel'
        },
        {
          text: 'Delete',
          onPress
        }
      ]
    );
  };

  return (
    <SingleReviewWithRepoAsTitle
      item={item}
      handleView={handleView}
      handleDelete={handleDelete}
    />
  );
};

export default SingleReviewWithRepoAsTitleContainer ;
