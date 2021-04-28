import React from 'react';
import WideButton from '../WideButton';
import theme from '../../theme';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingBottom: 15 
  },
  deleteButton: {
    width: '45%',
    backgroundColor: theme.colors.error
  },
  viewButton : {
    width: '45%'
  }
});

const ViewButton = ({ onPress }) => (
  <WideButton 
    style={styles.viewButton}
    onPress={onPress}
    text='View repository'
  />
);

const DeleteButton = ({ onPress }) => (
  <WideButton 
    style={styles.deleteButton}
    onPress={onPress}
    text='Delete review'
  />
);

export default function Buttons ({ handleView, handleDelete }) {
  return (
    <View style={styles.container}>
      <ViewButton onPress={handleView} />
      <DeleteButton onPress={handleDelete} />
    </View>
  );
}