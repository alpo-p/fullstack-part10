import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Text from '../Text';

const headerStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingRight: 55
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 5
  },
  avatarContainer: {
    paddingRight: 15
  },
  infoContainer: {
    justifyContent: 'flex-start',
  },
  subText: {
    paddingTop: 5
  }
});

export const Header = ({ item }) => (
  <View style={headerStyles.container}>
    <View style={headerStyles.avatarContainer}>
      <Image style={headerStyles.avatar} source={{ uri: item.ownerAvatarUrl }} />
    </View>
    <View style={headerStyles.infoContainer}>
      <Text testID='fullName' subheading bold>{item.fullName}</Text>
      <Text testID='description' style={headerStyles.subText} color='textSecondary'>{item.description}</Text>
    </View>
  </View>
);
