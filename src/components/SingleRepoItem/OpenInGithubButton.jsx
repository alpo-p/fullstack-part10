import React from 'react';
import { View, StyleSheet } from 'react-native';
import WideButton from '../WideButton';
import theme from "../../theme";
import * as Linking from 'expo-linking';


const buttonStyles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.listItemBackground,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10
  },
});

export default function OpenInGithubButton ({ url }) {
  const handleOpen = () => {
    Linking.openURL(url);
  };

  return (
    <View style={buttonStyles.container}>
      <WideButton onPress={handleOpen} text='Open in GitHub' />
    </View>
  );
}
