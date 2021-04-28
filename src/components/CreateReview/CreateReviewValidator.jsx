import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';

import { CreateReviewForm } from './CreateReviewForm';

const initialValues = {
  ownerName: '',
  repoName: '',
  rating: '',
  text: ''
};

const validationSchema = yup.object().shape({
  ownerName: yup
    .string()
    .required('Repository owner name is required')
    .test('len', 'Must be 3 characters or longer',  x => x ? x.length > 2 : false),
  repoName: yup
    .string()
    .required('Repository name is required')
    .test('len', 'Must be 3 characters or longer',  x => x ? x.length > 2 : false),
  rating: yup
    .number()
    .min(0)
    .max(100)
    .required('Rating is required'),
});

export const CreateReviewValidator = ({ onSubmit }) => (
  <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={onSubmit}>
    {({ handleSubmit }) => <CreateReviewForm onSubmit={handleSubmit} />}
  </Formik>
);
