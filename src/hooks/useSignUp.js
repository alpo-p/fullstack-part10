import { useApolloClient, useMutation } from "@apollo/client";
import { CREATE_USER } from '../graphql/mutations';


export default function useSignUp () {

  const client = useApolloClient();

  const [createUser, result] = useMutation(CREATE_USER, {
    onError: (e) => { 
      throw new Error(e); 
    }
  });
  
  const signUp = async ({ username, password }) => {
    const { data } = await createUser({ variables: { username, password } }); 
    client.resetStore();
    return data;
  };

  return [signUp, result];
}