import React from 'react';
import { View, StyleSheet } from 'react-native';

import theme from '../../theme';
import { Header } from './Header';
import { LanguageTag } from './LanguageTag';
import { Footer } from './Footer';

const repoItemStyles = StyleSheet.create({
  flexContainer : {
    alignItems: 'stretch',
    backgroundColor: theme.colors.listItemBackground,
  },
  paddingContainer: {
    padding: 15
  }
});

const RepositoryItem = ({ item }) => {
  return (
    <View style={repoItemStyles.flexContainer}>
      <View style={repoItemStyles.paddingContainer}>
        <Header item={item} />
        <LanguageTag item={item} />
        <Footer item={item} />
      </View>
    </View>
  );
};

export default RepositoryItem;