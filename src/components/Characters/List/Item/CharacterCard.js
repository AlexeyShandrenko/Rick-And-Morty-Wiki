import styles from "./styles/character-card.module.scss";

const CharacterCard = ({ name, image, species, locationName, originName }) => {
  return (
    <li className={styles.card}>
      <a className="card__link">
        <div className={styles.card__img}>
          <img
            className={styles.img}
            alt=""
            src={image}
          />
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
      </a>
    </li>
  );
};

export default CharacterCard;
