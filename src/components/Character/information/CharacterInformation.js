import { Link } from "react-router-dom";

import styles from "./styles/character-info.module.scss";

const CharacterInformation = ({ character }) => {
  const getEpisodes = () => {
    const { episode } = character;
    let result = "";
    episode.map((ep) => {
      result += `${ep.name} (${ep.episode}), `;
    });
    return result;
  };

  return (
    <div className="character__information">
      <div className={styles.character__img}>
        <img src={character.image} alt="" />
        <p
          className={
            character.status === "Alive"
              ? `${styles.character__status_alive}`
              : character.status === "Dead"
              ? `${styles.character__status_dead}`
              : `${styles.character__status_unknown}`
          }
        >
          {character.status}
        </p>
      </div>
      <p className={styles.character__name}>{character.name}</p>
      <ul className={styles.list}>
        <li className={styles.list__item}>
          <span className="list__highlight">Gender: </span>
          {character.gender}
        </li>
        {character.type && (
          <li className={styles.list__item}>
            <span>Type: </span>
            {character.type}
          </li>
        )}
        <li className={styles.list__item}>
          <span>First seen in: </span>
          <Link to="/locations">{character.origin.name}</Link>
        </li>
        <li className={styles.list__item}>
          <span>Last known location: </span>
          <Link to="/locations">{character.location.name}</Link>
        </li>
        <li className={styles.list__item}>
          <span>Episodes: </span>
          <Link to="/episodes">{getEpisodes()}</Link>
        </li>
      </ul>
    </div>
  );
};

export default CharacterInformation;
