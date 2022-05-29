import { useState } from "react";

import styles from "./styles/search.module.scss";

import { SEARCH_TEXT } from "../../../config/constants/constants";
import searchSchema from "./../../../validations/search/SeacrhValidation";

const Search = ({ changeSearchText, submitSearchField }) => {
  const [isValid, setIsValid] = useState(false);

  const changeSearchField = async (event) => {
    const { value } = event.target;
    let formData = {
      search: value,
    };
    const isValid = await searchSchema.isValid(formData);
    setIsValid(isValid);
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
      <button disabled={!isValid}>{SEARCH_TEXT}</button>
    </form>
  );
};

export default Search;
