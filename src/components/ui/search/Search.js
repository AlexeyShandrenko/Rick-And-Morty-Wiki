import PropTypes from "prop-types";
import { useState } from "react";

import styles from "./styles/search.module.scss";

import { SEARCH_TEXT } from "../../../config/constants/constants";
import searchSchema from "./../../../validations/search/SeacrhValidation";

const Search = ({ changeSearchText, submitSearchField }) => {
  const [isValid, setIsValid] = useState(false);
  const [search, setSearch] = useState(null);

  const changeSearchField = async (event) => {
    const { value } = event.target;
    let formData = {
      search: value,
    };
    const isValid = await searchSchema.isValid(formData);
    setSearch(value);
    setIsValid(isValid);
    changeSearchText(value);
  };

  return (
    <form className={styles.search} onSubmit={submitSearchField}>
      <input
        data-testid="search-input"
        type="search"
        name="search"
        placeholder="Search..."
        onChange={changeSearchField}
        value={search}
      />
      <button
        data-testid={isValid ? "button" : "button-disabled"}
        disabled={!isValid}
      >
        {SEARCH_TEXT}
      </button>
    </form>
  );
};

Search.propTypes = {
  changeSearchText: PropTypes.func.isRequired,
  submitSearchField: PropTypes.func.isRequired,
};

export default Search;
