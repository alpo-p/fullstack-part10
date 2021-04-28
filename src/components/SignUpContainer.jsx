import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useHistory } from 'react-router-native';

import { Formik } from 'formik';
import * as yup from 'yup';

import useSignIn from '../hooks/useSignIn';
import useSignUp from '../hooks/useSignUp';

import FormikTextInput from './FormikTextInput';
import theme from '../theme';

import WideButton from './WideButton';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.listItemBackground,
    padding: 20
  },
  field: {
    height: 50,
    padding: 10,
    borderWidth: 1,
    borderColor: theme.colors.mainBackground,
    borderRadius: 5,
    marginBottom: 10,
  },
  button: {
    backgroundColor: theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    padding: 10,
    borderRadius: 5,
  },
  text: {
    color: theme.colors.mainwhite
  }
});

const SignUpForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput style={styles.field} name="username" placeholder="Username" />
      <FormikTextInput style={styles.field} secureTextEntry name="password" placeholder="Password" />
      <FormikTextInput style={styles.field} secureTextEntry name="confirmation" placeholder="Password confirmation" />
      <WideButton onPress={onSubmit} text='Sign up' />
    </View>
  );
};

const initialValues = {
  username: '',
  password: '',
  confirmation: ''
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required')
    .test('len', 'Must be between 1 and 30 characters',  x => x 
      ? (x.length < 31) : false),
  password: yup
    .string()
    .required('Password is required')
    .test('len', 'Must be between 5 and 50 characters',  x => x 
      ? (x.length > 4 && x.length < 51) : false),
  confirmation: yup
    .string()
    .required('Password confirmation is required')
    .oneOf([yup.ref('password'), null], `Passwords don't match!`)
});

export const SignUpView = ({ onSubmit }) => (
  <Formik 
    initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
    {({ handleSubmit }) => 
      <SignUpForm onSubmit={handleSubmit} />
    }
  </Formik>
);

const SignUpContainer = () => {
  const [signUp] = useSignUp();
  const [signIn] = useSignIn();
  const history = useHistory();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      console.log(username, password);
      await signUp({ username, password });
      
      await signIn({ username, password });
      history.push('/');
    } catch (e) {
      console.log(e);
    }
  };

  return <SignUpView onSubmit={onSubmit} />;
};

export default SignUpContainer;