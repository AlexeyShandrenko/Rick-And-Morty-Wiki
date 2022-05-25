import { useQuery, gql } from "@apollo/client";

const GET_EPISODES_COUNT = gql`
  query {
    episodes {
      info {
        count
      }
    }
  }
`;

const useGetEpisodesCount = () => {
  const { data, loading, error } = useQuery(GET_EPISODES_COUNT);
  return {
    data,
    loading,
    error,
  };
};

export default useGetEpisodesCount;
