//import { useState, useEffect } from 'react';
//import Constants from 'expo-constants';
import { useQuery } from '@apollo/client';
import { REPOSITORIES } from '../graphql/queries';

const useRepositories = () => {
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

  const { data, error, loading } = useQuery(REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
  });
  let repositories = null;
  if (!loading) {
    repositories = data.repositories;
  }
  
  if(error) console.log(error);
  
  const fetchRepositories = () => console.log("refetch");
  
  return { repositories, loading, refetch: fetchRepositories };
};

export default useRepositories;