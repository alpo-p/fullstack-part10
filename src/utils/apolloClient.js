import { ApolloClient, InMemoryCache, createHttpLink} from '@apollo/client';
import Constants from 'expo-constants';
import { setContext } from '@apollo/client/link/context';

const base_url = Constants.manifest.extra.base_url;
const httpLink = createHttpLink({
  uri: `${base_url}/graphql`
});

export default function createApolloClient(authStorage) {
  const authLink = setContext(
    async (_, { headers }) => {
      try {
        const accessToken = await authStorage.getAccessToken(); 
        return {
          headers: {
            ...headers,
            authorization: accessToken ? `Bearer ${accessToken}` : '',
          },
        };
      } catch (e) {
        console.log(e);
        return {
          headers,
        };
      }
    }
  );

  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
  });
}

