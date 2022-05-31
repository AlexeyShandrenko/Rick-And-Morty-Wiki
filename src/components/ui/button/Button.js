import PropTypes from "prop-types";

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

Button.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
