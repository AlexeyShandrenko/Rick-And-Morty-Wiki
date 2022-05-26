import CharacterCard from "./Item/CharacterCard";

import styles from "./styles/characters-list.module.scss";

const CharactersList = ({ data }) => {

  return (
    <ul className={styles.list}>
      {data.map((character) => {
        return (
          <CharacterCard
            key={character.id}
            id={character.id}
            name={character.name}
            image={character.image}
            species={character.species}
            locationName={character.location.name}
            originName={character.origin.name}
          />
        );
      })}
    </ul>
  );
};

export default CharactersList;
