import React from 'react';
import { Picker } from '@react-native-community/picker';

const RepositorySorter = ({ selectedSorter, setSelectedSorter }) => {

  return (
    <Picker
    selectedValue={selectedSorter}
    onValueChange={(value) => setSelectedSorter(value)}>

      <Picker.Item label="Latest repositories" value="latest" />
      <Picker.Item label="Highest rated repositories" value="highest" />
      <Picker.Item label="Lowest rated repositories" value="lowest" />

    </Picker>
  );
};

export default RepositorySorter;