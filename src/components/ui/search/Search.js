import styles from "./styles/search.module.scss";

import { SEARCH_TEXT } from "../../../config/constants/constants";

const Search = ({ changeSearchText, submitSearchField }) => {
  const changeSearchField = (event) => {
    const { value } = event.target;
    changeSearchText(value);
  };

  return (
    <form className={styles.search} onSubmit={submitSearchField}>
      <input
        type="search"
        name="search"
        placeholder="Search..."
        onChange={changeSearchField}
      />
      <button>{SEARCH_TEXT}</button>
    </form>
  );
};

export default Search;
