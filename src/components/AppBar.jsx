import React from 'react';
import { View, StyleSheet, ScrollView, Pressable } from 'react-native';
import { Link, useHistory } from 'react-router-native';
import { useApolloClient, useQuery } from '@apollo/client';

import Constants from 'expo-constants';

import theme from '../theme';
import Text from './Text';
import { AUTHORIZED_USER } from '../graphql/queries';
import useAuthStorage from '../hooks/useAuthStorage';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingTop: Constants.statusBarHeight + 10,
    paddingBottom: 15,
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
  },
  menuItem: {
    marginLeft: 10,
    color: theme.colors.mainwhite,
    fontSize: theme.fontSizes.subheading,
    fontWeight: theme.fontWeights.bold
  }
});

const AppBarTab = ({ name, to }) => (
  <Link to={to}>
    <Text style={styles.menuItem}>{name}</Text>
  </Link>
);

const SignOutTab = ({ onPress }) => (
  <Pressable onPress={onPress}>
    <Text style={styles.menuItem}>Sign-out</Text>
  </Pressable>
);

const AppBar = () => {
  const authStorage = useAuthStorage();
  const client = useApolloClient();
  const { data, loading } = useQuery(AUTHORIZED_USER);
  const history = useHistory();

  const logout = async () => {
    history.push('/');
    await authStorage.removeAccessToken();
    client.resetStore();
  };

  const showSignInOrOut = () => {
    if (loading) {
      return null;      
    }
    if (!data.authorizedUser) {
      return <AppBarTab name='Sign-in' to='/signIn' />;
    }
    
    return <SignOutTab onPress={logout} />;
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