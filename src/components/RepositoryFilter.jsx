import React from 'react';
import { Searchbar } from 'react-native-paper';

const RepositoryFilter = ({ filter, setFilter }) => {
  return (
    <Searchbar
      placeholder="Filter repositories" 
      onChangeText={v => setFilter(v)}
      value={filter}
    />
  );
};

export default RepositoryFilter;