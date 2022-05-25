import styles from "./styles/button.module.scss";

const Button = ({ name, onClick }) => {
  return (
    <div className={styles.button__container}>
      <button className={styles.button} onClick={onClick}>
        {name}
      </button>
    </div>
  );
};

export default Button;
