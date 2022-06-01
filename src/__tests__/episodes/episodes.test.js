import { gql } from "@apollo/client";
import { render, cleanup } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import "@testing-library/jest-dom";
import Episodes from "./../../components/Episodes/Episodes";

describe("Episodes component", () => {
  afterEach(cleanup);

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
          id: 2,
        },
      },
      result: {
        data: {
          episode: {
            id: "2",
            name: "Lawnmower Dog",
            air_date: "December 9, 2013",
            characters: [
              {
                id: "1",
                name: "Rick Sanchez",
                species: "Human",
                status: "Alive",
                image:
                  "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
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
                image:
                  "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
                origin: {
                  name: "unknown",
                },
                location: {
                  name: "Citadel of Ricks",
                },
              },
              {
                id: "38",
                name: "Beth Smith",
                species: "Human",
                status: "Alive",
                image:
                  "https://rickandmortyapi.com/api/character/avatar/38.jpeg",
                origin: {
                  name: "Earth (C-137)",
                },
                location: {
                  name: "Earth (C-137)",
                },
              },
              {
                id: "46",
                name: "Bill",
                species: "Animal",
                status: "unknown",
                image:
                  "https://rickandmortyapi.com/api/character/avatar/46.jpeg",
                origin: {
                  name: "Earth (Replacement Dimension)",
                },
                location: {
                  name: "unknown",
                },
              },
              {
                id: "63",
                name: "Centaur",
                species: "Mythological Creature",
                status: "Alive",
                image:
                  "https://rickandmortyapi.com/api/character/avatar/63.jpeg",
                origin: {
                  name: "unknown",
                },
                location: {
                  name: "Mr. Goldenfold's dream",
                },
              },
              {
                id: "80",
                name: "Creepy Little Girl",
                species: "Human",
                status: "Alive",
                image:
                  "https://rickandmortyapi.com/api/character/avatar/80.jpeg",
                origin: {
                  name: "unknown",
                },
                location: {
                  name: "Mr. Goldenfold's dream",
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
                id: "221",
                name: "Melissa",
                species: "Mythological Creature",
                status: "Alive",
                image:
                  "https://rickandmortyapi.com/api/character/avatar/221.jpeg",
                origin: {
                  name: "Mr. Goldenfold's dream",
                },
                location: {
                  name: "Mr. Goldenfold's dream",
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
                id: "246",
                name: "Mrs. Pancakes",
                species: "Human",
                status: "Alive",
                image:
                  "https://rickandmortyapi.com/api/character/avatar/246.jpeg",
                origin: {
                  name: "Earth (C-137)",
                },
                location: {
                  name: "Mr. Goldenfold's dream",
                },
              },
              {
                id: "304",
                name: "Scary Brandon",
                species: "Mythological Creature",
                status: "Alive",
                image:
                  "https://rickandmortyapi.com/api/character/avatar/304.jpeg",
                origin: {
                  name: "Mr. Goldenfold's dream",
                },
                location: {
                  name: "Mr. Goldenfold's dream",
                },
              },
              {
                id: "305",
                name: "Scary Glenn",
                species: "Mythological Creature",
                status: "Alive",
                image:
                  "https://rickandmortyapi.com/api/character/avatar/305.jpeg",
                origin: {
                  name: "Mr. Goldenfold's dream",
                },
                location: {
                  name: "Mr. Goldenfold's dream",
                },
              },
              {
                id: "306",
                name: "Scary Terry",
                species: "Mythological Creature",
                status: "Alive",
                image:
                  "https://rickandmortyapi.com/api/character/avatar/306.jpeg",
                origin: {
                  name: "Mr. Goldenfold's dream",
                },
                location: {
                  name: "Mr. Goldenfold's dream",
                },
              },
              {
                id: "329",
                name: "Snuffles (Snowball)",
                species: "Animal",
                status: "Alive",
                image:
                  "https://rickandmortyapi.com/api/character/avatar/329.jpeg",
                origin: {
                  name: "Earth (C-137)",
                },
                location: {
                  name: "unknown",
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
                id: "396",
                name: "Scary Teacher",
                species: "Mythological Creature",
                status: "Alive",
                image:
                  "https://rickandmortyapi.com/api/character/avatar/396.jpeg",
                origin: {
                  name: "Mr. Goldenfold's dream",
                },
                location: {
                  name: "Mr. Goldenfold's dream",
                },
              },
              {
                id: "397",
                name: "Fido",
                species: "Animal",
                status: "Alive",
                image:
                  "https://rickandmortyapi.com/api/character/avatar/397.jpeg",
                origin: {
                  name: "Snuffles' Dream",
                },
                location: {
                  name: "Snuffles' Dream",
                },
              },
              {
                id: "398",
                name: "Accountant dog",
                species: "Animal",
                status: "Alive",
                image:
                  "https://rickandmortyapi.com/api/character/avatar/398.jpeg",
                origin: {
                  name: "Snuffles' Dream",
                },
                location: {
                  name: "Snuffles' Dream",
                },
              },
              {
                id: "405",
                name: "Trunkphobic suspenders guy",
                species: "Human",
                status: "Alive",
                image:
                  "https://rickandmortyapi.com/api/character/avatar/405.jpeg",
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

  it("renders locations", async () => {
    const { findByText } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Episodes />
      </MockedProvider>
    );
    // const episodeName = await findByText("Lawnmower Dog");
    const airDate = await findByText("December 9, 2013");
    expect(episodeName).toBeInTheDocument();

    expect(airDate).toBeInTheDocument();
  });
});
