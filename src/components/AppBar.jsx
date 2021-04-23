import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Link } from 'react-router-native';

import Constants from 'expo-constants';

import theme from '../theme';
import Text from './Text';

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

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab name={'Repositories'} to='/' />
        <AppBarTab name={'Sign-in'} to='signIn' />
      </ScrollView>
    </View>
  );
};

export default AppBar;