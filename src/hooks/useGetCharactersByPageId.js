import { useLazyQuery, gql } from "@apollo/client";

const GET_CHARACTERS_BY_PAGE_ID = gql`
  query getCharactersByPageId($page: Int) {
    characters(page: $page) {
      results {
        id
        name
        image
        species
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

const useGetCharactersByPageId = (page) => {
  const [getNewCharacters, { data, loading, error }] = useLazyQuery(
    GET_CHARACTERS_BY_PAGE_ID,
    {
      variables: {
        page,
      },
    }
  );

  return [
    getNewCharacters,
    {
      data,
      loading,
      error,
    },
  ];
};

export default useGetCharactersByPageId;
