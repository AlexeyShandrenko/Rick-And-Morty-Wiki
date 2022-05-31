import PropTypes from "prop-types";

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
            status={character.status}
            locationName={character.location.name}
            originName={character.origin.name}
          />
        );
      })}
    </ul>
  );
};

CharactersList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      id: PropTypes.string,
      name: PropTypes.string,
      image: PropTypes.string,
      species: PropTypes.string,
      status: PropTypes.string,
      locationName: PropTypes.string,
      originName: PropTypes.string,
    })
  ),
};

export default CharactersList;
