import { useLazyQuery, gql } from "@apollo/client";

const GET_LOCATION_BY_ID = gql`
  query getLocationById($id: ID!) {
    location(id: $id) {
      id
      name
      dimension
      type
      residents {
        id
        name
        species
        image
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

const useGetLocationById = (id) => {
  const [getLocationById, { data, loading, error }] = useLazyQuery(
    GET_LOCATION_BY_ID,
    {
      variables: {
        id,
      },
    }
  );
  return [getLocationById, { data, loading, error }];
};

export default useGetLocationById;
