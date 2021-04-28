//import { useState, useEffect } from 'react';
//import Constants from 'expo-constants';
import { useQuery } from '@apollo/client';
import { REPOSITORIES } from '../graphql/queries';

const useRepositories = (selectedSorter, searchKeyword) => {
  /*
  ** Previous part

  const [repositories, setRepositories] = useState();
  const [loading, setLoading] = useState(false);

  const fetchRepositories = async () => {
    setLoading(true);

    const base_url = Constants.manifest.extra.base_url;
    const url = `${base_url}/api/repositories`;
    const response = await fetch(url);
    const json = await response.json();

    setLoading(false);
    setRepositories(json);
  };
  
  useEffect(() => {
    fetchRepositories();
  }, []);
  */

  const getSorterObject = () => {
    switch(selectedSorter) {
      case 'latest':
        return ({});
      case 'highest':
        return ({
          orderBy:'RATING_AVERAGE',
          orderDirection:'DESC'
        });
      case 'lowest':
        return ({
          orderBy:'RATING_AVERAGE',
          orderDirection:'ASC'
        });
    }
  };
  const amountToFetch = 8;
  const variables = { first: amountToFetch, searchKeyword, ...getSorterObject() };

  const { data, error, loading, fetchMore, ...result } = useQuery(REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    variables 
  });

  let repositories;

  if (!loading) {
    repositories = data.repositories;
  }
  
  if (error) {
    throw new Error(error);
  }

  const handleFetchMore = () => {
    console.log(data.repositories.pageInfo.endCursor);
    const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage;

    if (!canFetchMore) return;

    fetchMore({
      variables: {
        after: data.repositories.pageInfo.endCursor,
        ...variables
      }
    });
  };
  
  return { repositories, loading, fetchMore: handleFetchMore, ...result };
};

export default useRepositories;