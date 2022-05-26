import styles from "./styles/picker.module.scss";

import { SEARCH_TITLE } from "../../../config/constants/constants";

const Picker = ({ count, name, select }) => {
  const createList = (count) => {
    let result = [];
    for (let i = 1; i <= count; i++) {
      result.push(i);
    }
    return result;
  };

  return (
    <div className={styles.select}>
      <select onChange={select}>
        <option selected disabled>
          {SEARCH_TITLE}
        </option>
        {createList(count).map((value) => {
          return (
            <option key={value} value={value}>
              {name} - {value}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Picker;
