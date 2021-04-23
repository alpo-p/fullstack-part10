import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Text from './Text';

import theme from '../theme';

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
  subText : {
    paddingTop: 5
  }
});

const Header = ({ item }) => (
  <View style={headerStyles.container}>
    <View style={headerStyles.avatarContainer}>
      <Image style={headerStyles.avatar} source={{ uri: item.ownerAvatarUrl }} />
    </View>
    <View style={headerStyles.infoContainer}>
      <Text subheading bold>{item.fullName}</Text>
      <Text style={headerStyles.subText} color='textSecondary'>{item.description}</Text>
    </View>
  </View>
);

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

const LanguageTag = ({ item }) => (
  <View style={langTagStyles.box}>
    <Text bold style={langTagStyles.text}>{item.language}</Text>
  </View>
);

const footerBoxStyle = StyleSheet.create({
  container: {
    flexDirection: 'column'
  }
});

const FooterBox = ({ number, text }) => {
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

const footerStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
});

const Footer = ({ item }) => (
  <View style={footerStyle.container}>
    <FooterBox number={item.stargazersCount} text={'Stars'} />
    <FooterBox number={item.forksCount} text={'Forks'} />
    <FooterBox number={item.reviewCount} text={'Reviews'} />
    <FooterBox number={item.ratingAverage} text={'Rating'} />
  </View>
);


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