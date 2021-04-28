import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import theme from '../theme';
import Text from './Text';

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    padding: 10,
    borderRadius: 5,
  },
  text: {
    color: theme.colors.mainwhite
  }
});

const WideButton = ({ text, onPress, style }) => {
  const buttonStyle = [styles.button, style];

  return (
    <Pressable style={buttonStyle} onPress={onPress}>
      <Text bold subheading style={styles.text}>{text}</Text>
    </Pressable>
  );
};

export default WideButton;