import { useApolloClient, useMutation } from "@apollo/client";
import { AUTHORIZE } from '../graphql/mutations';

import useAuthStorage from '../hooks/useAuthStorage';

export default function useSignIn () {
  const authStorage = useAuthStorage();
  const client = useApolloClient();

  const [authorize, result] = useMutation(AUTHORIZE, {
    onError: (e) => { 
      throw new Error(e); 
    }
  });

  const signIn = async ({ username, password }) => {
    const { data } = await authorize({ variables: { username, password } }); 
    const accessToken = data?.authorize?.accessToken;
    await authStorage.setAccessToken(accessToken);

    client.resetStore();

    return accessToken;
  };

  
  return [signIn, result];
}