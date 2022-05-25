import { useQuery, gql } from "@apollo/client";

const GET_LOCATION_COUNT = gql`
  query getLocationCount {
    locations {
      info {
        count
      }
    }
  }
`;

const useGetLocationCount = () => {
  const { data, loading, error } = useQuery(GET_LOCATION_COUNT);
  return { data, loading, error };
};

export default useGetLocationCount;
