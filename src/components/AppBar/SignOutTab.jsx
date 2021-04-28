import React from 'react';
import { Pressable } from 'react-native';
import { useHistory } from 'react-router-native';
import { useApolloClient } from '@apollo/client';
import useAuthStorage from '../../hooks/useAuthStorage';
import Text from '../Text';
import { styles } from './AppBarTab';

const SignOutTabContainer = ({ handlePress }) => (
  <Pressable onPress={handlePress}>
    <Text style={styles.menuItem}>Sign-out</Text>
  </Pressable>
);

export const SignOutTab = () => {
  const authStorage = useAuthStorage();
  const client = useApolloClient();
  const history = useHistory();

  const logout = async () => {
    history.push('/');
    await authStorage.removeAccessToken();
    client.resetStore();
  };

  return (
    <SignOutTabContainer handlePress={logout} />
  );
};
