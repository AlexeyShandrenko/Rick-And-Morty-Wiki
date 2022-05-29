import { useLazyQuery, gql } from "@apollo/client";

const GET_CHARACTERS_BY_FILTER_NAME = gql`
  query getCharactersByFilterName($name: String!, $page: Int!) {
    characters(filter: { name: $name }, page: $page) {
      info {
        count
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

const useGetCharactersByFilterName = (name, page) => {
  const [getCharactersByFilterName, { data, loading, error }] = useLazyQuery(
    GET_CHARACTERS_BY_FILTER_NAME,
    {
      variables: {
        name,
        page
      },
    }
  );
  return [getCharactersByFilterName, { data, loading, error }];
};

export default useGetCharactersByFilterName;
