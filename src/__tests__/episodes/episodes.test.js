import { MockedProvider } from "@apollo/client/testing";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import { gql } from "@apollo/client";
import Episodes from "../../components/Episodes/Episodes";
import {
  EPISODE_NAME,
  EPISODE_AIR_DATE,
} from "../../config/constants/constants";

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
        status
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

const mocks = [
  {
    request: {
      query: GET_EPISODE_BY_ID,
      variables: {
        id: 1,
      },
    },
    result: {
      data: {
        episode: {
          id: "1",
          name: "Pilot",
          air_date: "December 2, 2013",
          characters: [
            {
              id: "1",
              name: "Rick Sanchez",
              species: "Human",
              status: "Alive",
              image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
              origin: {
                name: "Earth (C-137)",
              },
              location: {
                name: "Citadel of Ricks",
              },
            },
            {
              id: "2",
              name: "Morty Smith",
              species: "Human",
              status: "Alive",
              image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
              origin: {
                name: "unknown",
              },
              location: {
                name: "Citadel of Ricks",
              },
            },
            {
              id: "35",
              name: "Bepisian",
              species: "Alien",
              status: "Alive",
              image: "https://rickandmortyapi.com/api/character/avatar/35.jpeg",
              origin: {
                name: "Bepis 9",
              },
              location: {
                name: "Bepis 9",
              },
            },
            {
              id: "38",
              name: "Beth Smith",
              species: "Human",
              status: "Alive",
              image: "https://rickandmortyapi.com/api/character/avatar/38.jpeg",
              origin: {
                name: "Earth (C-137)",
              },
              location: {
                name: "Earth (C-137)",
              },
            },
            {
              id: "62",
              name: "Canklanker Thom",
              species: "Alien",
              status: "Dead",
              image: "https://rickandmortyapi.com/api/character/avatar/62.jpeg",
              origin: {
                name: "Gromflom Prime",
              },
              location: {
                name: "unknown",
              },
            },
            {
              id: "92",
              name: "Davin",
              species: "Human",
              status: "Dead",
              image: "https://rickandmortyapi.com/api/character/avatar/92.jpeg",
              origin: {
                name: "Earth (C-137)",
              },
              location: {
                name: "Earth (C-137)",
              },
            },
            {
              id: "127",
              name: "Frank Palicky",
              species: "Human",
              status: "Dead",
              image:
                "https://rickandmortyapi.com/api/character/avatar/127.jpeg",
              origin: {
                name: "Earth (C-137)",
              },
              location: {
                name: "Earth (C-137)",
              },
            },
            {
              id: "144",
              name: "Glenn",
              species: "Alien",
              status: "Dead",
              image:
                "https://rickandmortyapi.com/api/character/avatar/144.jpeg",
              origin: {
                name: "unknown",
              },
              location: {
                name: "Interdimensional Customs",
              },
            },
            {
              id: "158",
              name: "Hookah Alien",
              species: "Alien",
              status: "Alive",
              image:
                "https://rickandmortyapi.com/api/character/avatar/158.jpeg",
              origin: {
                name: "unknown",
              },
              location: {
                name: "Interdimensional Customs",
              },
            },
            {
              id: "175",
              name: "Jerry Smith",
              species: "Human",
              status: "Alive",
              image:
                "https://rickandmortyapi.com/api/character/avatar/175.jpeg",
              origin: {
                name: "Earth (C-137)",
              },
              location: {
                name: "Earth (C-137)",
              },
            },
            {
              id: "179",
              name: "Jessica",
              species: "Cronenberg",
              status: "Alive",
              image:
                "https://rickandmortyapi.com/api/character/avatar/179.jpeg",
              origin: {
                name: "Earth (C-137)",
              },
              location: {
                name: "Earth (C-137)",
              },
            },
            {
              id: "181",
              name: "Jessica's Friend",
              species: "Human",
              status: "Alive",
              image:
                "https://rickandmortyapi.com/api/character/avatar/181.jpeg",
              origin: {
                name: "Earth (C-137)",
              },
              location: {
                name: "Earth (Replacement Dimension)",
              },
            },
            {
              id: "239",
              name: "Mr. Goldenfold",
              species: "Cronenberg",
              status: "Alive",
              image:
                "https://rickandmortyapi.com/api/character/avatar/239.jpeg",
              origin: {
                name: "Earth (C-137)",
              },
              location: {
                name: "Earth (C-137)",
              },
            },
            {
              id: "249",
              name: "Mrs. Sanchez",
              species: "Human",
              status: "unknown",
              image:
                "https://rickandmortyapi.com/api/character/avatar/249.jpeg",
              origin: {
                name: "unknown",
              },
              location: {
                name: "unknown",
              },
            },
            {
              id: "271",
              name: "Principal Vagina",
              species: "Cronenberg",
              status: "Alive",
              image:
                "https://rickandmortyapi.com/api/character/avatar/271.jpeg",
              origin: {
                name: "Earth (C-137)",
              },
              location: {
                name: "Earth (C-137)",
              },
            },
            {
              id: "338",
              name: "Summer Smith",
              species: "Human",
              status: "Alive",
              image:
                "https://rickandmortyapi.com/api/character/avatar/338.jpeg",
              origin: {
                name: "Earth (C-137)",
              },
              location: {
                name: "Earth (C-137)",
              },
            },
            {
              id: "394",
              name: "Davin",
              species: "Cronenberg",
              status: "Dead",
              image:
                "https://rickandmortyapi.com/api/character/avatar/394.jpeg",
              origin: {
                name: "Earth (C-137)",
              },
              location: {
                name: "Earth (C-137)",
              },
            },
            {
              id: "395",
              name: "Greebybobe",
              species: "Alien",
              status: "Alive",
              image:
                "https://rickandmortyapi.com/api/character/avatar/395.jpeg",
              origin: {
                name: "Girvonesk",
              },
              location: {
                name: "Worldender's lair",
              },
            },
            {
              id: "435",
              name: "Pripudlian",
              species: "Alien",
              status: "Alive",
              image:
                "https://rickandmortyapi.com/api/character/avatar/435.jpeg",
              origin: {
                name: "unknown",
              },
              location: {
                name: "Earth (Replacement Dimension)",
              },
            },
          ],
        },
      },
    },
  },
];

afterAll(cleanup);

it("renders episodes component", async () => {
  const { findByText, getByText } = render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Episodes count={51} />
    </MockedProvider>
  );
  expect(getByText(EPISODE_NAME)).toBeInTheDocument();
  const episodeName = await findByText("Pilot");
  expect(episodeName).toBeInTheDocument();
});
