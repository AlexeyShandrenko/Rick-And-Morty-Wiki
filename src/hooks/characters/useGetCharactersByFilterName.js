import { useLazyQuery, gql } from "@apollo/client";

const GET_CHARACTERS_BY_FILTER_NAME = gql`
  query getCharactersByFilterName($name: String!) {
    characters(filter: { name: $name }) {
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

const useGetCharactersByFilterName = (name) => {
  const [getCharactersByFilterName, { data, loading, error }] = useLazyQuery(
    GET_CHARACTERS_BY_FILTER_NAME,
    {
      variables: {
        name,
      },
    }
  );
  return [getCharactersByFilterName, { data, loading, error }];
};

export default useGetCharactersByFilterName;
