import { useQuery, gql } from "@apollo/client";

const GET_CHARACTERS = gql`
  query getCharacters {
    characters {
      info {
        pages
        next
      }
      results {
        id
        name
        image
        species
        status
        origin {
          name
        }
        location {
          name
        }
      }
    }
  }
`;

const useGetCharacters = () => {
  const { data, loading, error } = useQuery(GET_CHARACTERS);
  return {
    data,
    loading,
    error,
  };
};

export default useGetCharacters;
