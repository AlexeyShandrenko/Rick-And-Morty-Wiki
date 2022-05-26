import { useState } from "react";

import useGetCharactersByPageId from "../../hooks/characters/useGetCharactersByPageId";

import CharactersList from "./List/CharactersList";
import Loading from "../ui/loading/Loading";
import Button from "../ui/button/Button";

import styles from "./styles/characters.module.scss";
import Search from "../ui/search/Search";
import useGetCharactersByFilterName from "../../hooks/characters/useGetCharactersByFilterName";

const Characters = ({
  charactersData,
  charactersLoading,
  pagesCount,
  next,
}) => {
  const pages = pagesCount + 1;
  const { results: defaultResults = [] } = charactersData?.characters;
  const [results, setResults] = useState(defaultResults);
  const [pageNumber, setPageNumber] = useState(next);
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState(null);

  const [getNewCharacters, { data }] = useGetCharactersByPageId(pageNumber);
  const [getCharactersByFilterName, { data: searchCharacters }] =
    useGetCharactersByFilterName(searchText);

  const loadMore = () => {
    getNewCharacters();
    if (data) {
      const newCharacters = data?.characters?.results;
      setResults((prev) => {
        return [...prev, ...newCharacters];
      });
      setPageNumber((prev) => {
        return prev === pages ? prev : prev + 1;
      });
    }
  };

  const changeSearchText = (value) => {
    setSearchText(value);
    if (value === "") {
      setSearchResults(null);
    }
  };

  const submitSearchField = (event) => {
    event.preventDefault();
    getCharactersByFilterName();
    setSearchResults(searchCharacters.characters.results);
  };

  return (
    <section className={styles.characters}>
      <h1 className={styles.characters__title}>Characters</h1>
      <Search
        changeSearchText={changeSearchText}
        submitSearchField={submitSearchField}
      />
      {searchResults ? (
        <CharactersList data={searchResults} />
      ) : charactersLoading ? (
        <Loading />
      ) : (
        <CharactersList data={results} />
      )}
      {charactersData && pageNumber !== pages && !searchResults && (
        <Button onClick={loadMore} name="Load more" />
      )}
    </section>
  );
};

export default Characters;
