import React from 'react';
import { Link } from 'react-router-native';
import Text from '../Text';
import theme from '../../theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  menuItem: {
    marginLeft: 5,
    marginRight: 15,
    color: theme.colors.mainwhite,
    fontSize: theme.fontSizes.subheading,
    fontWeight: theme.fontWeights.bold
  }
});

export const AppBarTab = ({ name, to }) => (
  <Link to={to}>
    <Text style={styles.menuItem}>{name}</Text>
  </Link>
);
