import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import styles from "./styles/character-info.module.scss";

const CharacterInformation = ({ character }) => {
  const getEpisodes = () => {
    const { episode } = character || [];
    let result = "";
    episode.map((ep) => {
      result += `${ep.name} (${ep.episode}), `;
    });
    return result;
  };

  return (
    <div className="character__information">
      <div className={styles.character__img}>
        <img src={character ? character.image : ""} alt="" />
        <p
          className={
            character && character.status === "Alive"
              ? `${styles.character__status_alive}`
              : character && character.status === "Dead"
              ? `${styles.character__status_dead}`
              : `${styles.character__status_unknown}`
          }
        >
          {character && character.status}
        </p>
      </div>
      <p data-testid="name" className={styles.character__name}>
        {character && character.name}
      </p>
      <ul className={styles.list}>
        <li className={styles.list__item}>
          <span className="list__highlight">Gender: </span>
          {character && character.gender}
        </li>
        {character && character.type && (
          <li className={styles.list__item}>
            <span>Type: </span>
            {character && character.type}
          </li>
        )}
        <li className={styles.list__item}>
          <span>First seen in: </span>
          <Link to="/rick-and-morty-wiki/locations">
            {character && character.origin.name}
          </Link>
        </li>
        <li className={styles.list__item}>
          <span>Last known location: </span>
          <Link to="/rick-and-morty-wiki/locations">
            {character && character.location.name}
          </Link>
        </li>
        <li className={styles.list__item}>
          <span>Episodes: </span>
          <Link to="/rick-and-morty-wiki/episodes">{getEpisodes()}</Link>
        </li>
      </ul>
    </div>
  );
};

CharacterInformation.propTypes = {
  character: PropTypes.shape({
    episode: PropTypes.arrayOf(
      PropTypes.shape({
        episode: PropTypes.string,
        id: PropTypes.string,
        name: PropTypes.string,
      })
    ),
    location: PropTypes.shape({
      name: PropTypes.string,
    }),
    origin: PropTypes.shape({
      name: PropTypes.string,
    }),
    image: PropTypes.string,
    status: PropTypes.string,
    name: PropTypes.string,
    gender: PropTypes.string,
    type: PropTypes.string,
  }),
};

export default CharacterInformation;
