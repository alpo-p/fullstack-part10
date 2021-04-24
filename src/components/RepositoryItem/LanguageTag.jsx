import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from '../Text';
import theme from '../../theme';

const langTagStyles = StyleSheet.create({
  box: {
    backgroundColor: theme.colors.primary,
    alignItems: 'center',
    alignSelf: 'flex-start',
    padding: 5,
    borderRadius: 5,
    marginLeft: 65,
    marginTop: 10,
    marginBottom: 10,
  },
  text: {
    color: theme.colors.listItemBackground,
  },
});
export const LanguageTag = ({ item }) => (
  <View style={langTagStyles.box}>
    <Text bold style={langTagStyles.text}>{item.language}</Text>
  </View>
);
