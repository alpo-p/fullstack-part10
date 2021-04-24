import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from '../Text';

const footerBoxStyle = StyleSheet.create({
  container: {
    flexDirection: 'column'
  }
});
export const FooterBox = ({ number, text }) => {
  let numToRender = number;
  if (number > 1000) {
    numToRender = (number / 1000).toFixed(1);
    numToRender = String(numToRender) + 'k';
  }
  return (
    <View style={footerBoxStyle}>
      <Text subheading bold>{numToRender}</Text>
      <Text color='textSecondary'>{text}</Text>
    </View>
  );
};
