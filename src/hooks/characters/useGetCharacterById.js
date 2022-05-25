import { useQuery, gql } from "@apollo/client";

const GET_CHARACTER_BY_ID = gql`
  query getCharacterById($id: ID!) {
    character(id: $id) {
      id
      name
      status
      species
      type
      gender
      origin {
        name
      }
      location {
        name
      }
      image
      episode {
        id
        name
        episode
      }
    }
  }
`;

const useGetCharacterById = (id) => {
  const { data, loading, error } = useQuery(GET_CHARACTER_BY_ID, {
    variables: {
      id,
    },
  });

  return {
    data,
    loading,
    error,
  };
};

export default useGetCharacterById;
