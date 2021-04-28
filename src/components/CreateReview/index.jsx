import React from 'react';
import { useHistory } from 'react-router-native';
import useCreateReview from '../../hooks/useCreateReview';

import { CreateReviewValidator } from './CreateReviewValidator';

const CreateReview = () => {
  const [newReview] = useCreateReview();
  const history = useHistory();

  const onSubmit = async (values) => {
    const { ownerName, repoName, rating, text } = values;

    try {
      const id = await newReview({ ownerName, repoName, rating: Number(rating), text });

      history.push(`/repository/${id}`);

    } catch (e) {
      console.log(e);
    }
  };

  return <CreateReviewValidator onSubmit={onSubmit} />;
};

export default CreateReview;
