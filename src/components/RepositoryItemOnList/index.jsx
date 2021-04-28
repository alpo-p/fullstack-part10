import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';

import theme from '../../theme';
import { Header } from './Header';
import { LanguageTag } from './LanguageTag';
import { Footer } from './Footer';
import { useHistory } from 'react-router-native';

const repoItemStyles = StyleSheet.create({
  flexContainer : {
    alignItems: 'stretch',
    backgroundColor: theme.colors.listItemBackground,
  },
  paddingContainer: {
    padding: 15
  }
});

export const RepositoryItemContainer = ({ item }) => (
  <View style={repoItemStyles.flexContainer}>
    <View style={repoItemStyles.paddingContainer}>
      <Header item={item} />
      <LanguageTag item={item} />
      <Footer item={item} />
    </View>
  </View>
);

const RepositoryItemOnList = ({ item }) => {
  const history = useHistory();

  const showSingleRepo = () => {
    history.push(`/repository/${item.id}`);
  };

  return (
    <Pressable onPress={showSingleRepo}>
      <RepositoryItemContainer item={item} />
    </Pressable>
  );
};

export default RepositoryItemOnList;