import { useApolloClient, useMutation } from "@apollo/client";
import { CREATE_REVIEW } from "../graphql/mutations";

export default function useCreateReview () {
  const [createReview, result] = useMutation(CREATE_REVIEW, {
    onError: (e) => {
      throw new Error(e);
    }
  });

  const newReview = async ({ repoName, ownerName, rating, text }) => {
    const client = useApolloClient();
    
    const { data } = await createReview({ variables: 
      { repoName, ownerName, rating, text } 
    });
    const id = data?.createReview?.repositoryId;
    
    
    client.resetStore();
    return id;
  };

  return [newReview, result];
}