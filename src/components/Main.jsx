import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppBar from './AppBar';
import theme from '../theme';
import Routes from './Routes';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.colors.mainBackground,
  }
});

export default function Main () {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes />
    </View>
  );
}
