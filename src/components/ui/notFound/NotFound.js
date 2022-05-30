import styles from "./styles/not-found.module.scss";

const NotFound = () => {
  return (
    <div className={styles.notFound}>
      <div className={styles.notFound__img}>
        <img src="./images/icons/logo.png" alt="" />
      </div>
      <p className={styles.notFound__text}>Not found :(</p>
    </div>
  );
};

export default NotFound;
