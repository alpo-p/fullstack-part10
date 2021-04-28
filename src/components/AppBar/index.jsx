import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { useQuery } from '@apollo/client';

import Constants from 'expo-constants';

import { AppBarTab } from './AppBarTab';
import { SignOutTab } from './SignOutTab';

import { AUTHORIZED_USER } from '../../graphql/queries';
import Text from '../Text';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingTop: Constants.statusBarHeight + 10,
    paddingBottom: 15,
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
  },
});

const AppBar = () => {
  const { data, loading } = useQuery(AUTHORIZED_USER);

  const showSignInOrOut = () => {
    if (loading) {
      return <Text>Loading...</Text>;
    }

    if (!loading && !data?.authorizedUser) {
      return (
        <>
          <AppBarTab name='Sign in' to='/signIn' />
          <AppBarTab name='Sign up' to='/signUp' />
        </>
      );
    }
    
    return (
      <>
        <AppBarTab name='Create a review' to='/create_review' />
        <AppBarTab name='My reviews' to='/my_reviews' />
        <SignOutTab />
      </>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab name='Repositories' to='/' />
        {showSignInOrOut()}
      </ScrollView>
    </View>
  );
};

export default AppBar;