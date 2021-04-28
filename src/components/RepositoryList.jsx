import React, { useState } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { useDebounce } from 'use-debounce';

import Text from './Text';
import RepositoryFilter from './RepositoryFilter';
import RepositorySorter from './RepositorySorter';
import RepositoryItemOnList from './RepositoryItemOnList';

import useRepositories from '../hooks/useRepositories';

const styles = StyleSheet.create({
  container: {
    marginBottom: 220
  },
  header: {
    padding: 10
  },
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [debouncedKeyword] = useDebounce(searchKeyword, 1000); 
  const [selectedSorter, setSelectedSorter] = useState("latest");
  const { repositories, loading, fetchMore } = useRepositories(selectedSorter, debouncedKeyword);

  if (loading) return <View><Text>Loading...</Text></View>;

  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

  const renderItem = ({ item }) => (
    <RepositoryItemOnList item={item} />
  );

  const onEndReach = () => {
    fetchMore();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <RepositoryFilter filter={searchKeyword} setFilter={setSearchKeyword} />
        <RepositorySorter 
          selectedSorter={selectedSorter}
          setSelectedSorter={setSelectedSorter} 
        />
      </View>
      <FlatList
        data={repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={renderItem}
        keyExtractor={(_, i) => i.toString()}
        onEndReached={onEndReach}
        onEndReachedThreshold={0.5}
      />
    </View> 
  );
};

export default RepositoryList;