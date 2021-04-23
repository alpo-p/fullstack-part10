import { Platform } from 'react-native';

const theme = {
  colors: {
    textPrimary: '#24292e',
    textSecondary: '#586069',
    primary: '#0366d6',
    mainBackground: '#e1e4e8',
    listItemBackground: 'white',
    mainwhite: '#edf1f5',
    error: '#d73a4a',
  },
  fontSizes: {
    body: 14,
    subheading: 16,
  },
  fonts: {
    //android: Roboto
    //ios: Arial
    //default System
    main: Platform.select({
      android: 'Roboto',
      ios: 'Arial',
      default: 'System'
    }) 
  },
  fontWeights: {
    normal: '400',
    bold: '700',
  },
};

export default theme;