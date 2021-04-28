import React from 'react';
import { View, StyleSheet } from 'react-native';
import FormikTextInput from '../FormikTextInput';
import WideButton from '../WideButton';
import theme from '../../theme';

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

export const CreateReviewForm = ({ onSubmit }) => (
  <View style={styles.container}>
    <FormikTextInput style={styles.field} name="ownerName"
      placeholder="Repository owner name" />
    <FormikTextInput style={styles.field} name="repoName"
      placeholder="Repository name" />
    <FormikTextInput style={styles.field} name="rating"
      placeholder="Rating between 0 and 100" />
    <FormikTextInput multiline style={styles.field} name="text"
      placeholder="Review" />
    <WideButton onPress={onSubmit} text='Create a review' />
  </View>
);
