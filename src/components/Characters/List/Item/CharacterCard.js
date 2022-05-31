import PropTypes from "prop-types";

import { Link } from "react-router-dom";

import styles from "./styles/character-card.module.scss";

const CharacterCard = ({
  id,
  name,
  image,
  species,
  status,
  locationName,
  originName,
}) => {
  return (
    <li className={styles.card}>
      <Link to={`/${id}`} className="card__link">
        <div className={styles.card__img}>
          <img className={styles.img} alt="" src={image} />
          <p
            className={
              status === "Alive"
                ? `${styles.card__status_alive}`
                : status === "Dead"
                ? `${styles.card__status_dead}`
                : `${styles.card__status_unknown}`
            }
          >
            {status}
          </p>
        </div>
        <div className={styles.info}>
          <h1 className={styles.info__title}>{name}</h1>
          <p className={styles.description}>
            <span className={styles.description__highlight}>Species:</span>{" "}
            {species}
          </p>
          <p className={styles.description}>
            <span className={styles.description__highlight}>First see in:</span>{" "}
            {originName}
          </p>
          <p className={styles.description}>
            <span className={styles.description__highlight}>
              Last known location:
            </span>{" "}
            {locationName}
          </p>
        </div>
      </Link>
    </li>
  );
};

CharacterCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  locationName: PropTypes.string.isRequired,
  originName: PropTypes.string.isRequired,
};

export default CharacterCard;
