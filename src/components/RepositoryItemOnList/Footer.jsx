import React from 'react';
import { View, StyleSheet } from 'react-native';
import { FooterBox } from './FooterBox';

const footerStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
});
export const Footer = ({ item }) => (
  <View style={footerStyle.container}>
    <FooterBox number={item.stargazersCount} text={'Stars'} />
    <FooterBox number={item.forksCount} text={'Forks'} />
    <FooterBox number={item.reviewCount} text={'Reviews'} />
    <FooterBox number={item.ratingAverage} text={'Rating'} />
  </View>
);
