import { useLazyQuery, gql } from "@apollo/client";

const GET_EPISODE_BY_ID = gql`
  query ($id: ID!) {
    episode(id: $id) {
      id
      name
      air_date
      characters {
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

const useGetEpisodeById = (id) => {
  const [getEpisodeById, { data, loading, error }] = useLazyQuery(
    GET_EPISODE_BY_ID,
    {
      variables: {
        id,
      },
    }
  );
  return [getEpisodeById, { data, loading, error }];
};

export default useGetEpisodeById;
