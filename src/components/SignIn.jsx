import React from 'react';
import { View, Pressable, StyleSheet } from 'react-native';
import { useHistory } from 'react-router-native';

import { Formik } from 'formik';
import * as yup from 'yup';

import FormikTextInput from './FormikTextInput';
import Text from './Text';
import theme from '../theme';

import useSignIn from '../hooks/useSignIn';

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

const initialValues = {
  username: '',
  password: ''
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required'),
  password: yup
    .string()
    .required('Password is required'),
});

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput style={styles.field} name="username" placeholder="Username" />
      <FormikTextInput style={styles.field} secureTextEntry name="password" placeholder="Password" />
      <Pressable style={styles.button} onPress={onSubmit}>
        <Text bold subheading style={styles.text}>Sign in</Text>
      </Pressable>
    </View>
  );
};

const SignIn = () => {
  const [signIn] = useSignIn();
  const history = useHistory();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      await signIn({ username, password });
      history.push('/');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Formik 
      initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;