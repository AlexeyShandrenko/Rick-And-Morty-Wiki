import { useState } from "react";
import PropTypes from "prop-types";

import styles from "./styles/characters.module.scss";

import useGetCharactersByPageId from "../../hooks/characters/useGetCharactersByPageId";
import useGetCharactersByFilterName from "../../hooks/characters/useGetCharactersByFilterName";

import CharactersList from "./List/CharactersList";
import Loading from "../ui/loading/Loading";
import Button from "../ui/button/Button";
import Search from "../ui/search/Search";

const Characters = ({
  charactersData,
  charactersLoading,
  pagesCount,
  next,
}) => {
  const pages = pagesCount + 1;
  const { results: defaultResults = [] } =
    charactersData?.characters ?? undefined;
  const [results, setResults] = useState(defaultResults);
  const [pageNumber, setPageNumber] = useState(next);
  const [searchText, setSearchText] = useState("");
  const [searchPage, setSearchPage] = useState(1);
  const [searchResults, setSearchResults] = useState(null);

  const [getNewCharacters, { data }] = useGetCharactersByPageId(pageNumber);
  const [getCharactersByFilterName, { data: searchCharacters }] =
    useGetCharactersByFilterName(searchText, searchPage);

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

  const loadSearchMore = () => {
    setSearchPage((prev) => {
      return searchCharacters?.characters?.info?.next !== null
        ? prev + 1
        : prev;
    });
    getCharactersByFilterName();
    if (searchCharacters) {
      const newCharacters = searchCharacters?.characters?.results;
      setSearchResults((prev) => {
        return [...prev, ...newCharacters];
      });
    }
  };

  const changeSearchText = (value) => {
    setSearchText(value);
    if (value === "") {
      setSearchResults(null);
      setSearchPage(1);
    }
  };

  const submitSearchField = (event) => {
    event.preventDefault();
    getCharactersByFilterName();
    setSearchResults(searchCharacters.characters.results);
    setSearchPage((prev) => {
      return searchCharacters?.characters?.info?.next !== null
        ? prev + 1
        : prev;
    });
  };

  return (
    <section className={styles.characters}>
      <h1 className={styles.characters__title}>Characters</h1>
      <Search
        changeSearchText={changeSearchText}
        submitSearchField={submitSearchField}
      />
      {searchResults ? (
        <div>
          <CharactersList data={searchResults} />
          {searchCharacters?.characters?.info?.count !==
            searchResults.length && (
            <Button onClick={loadSearchMore} name="Load more" />
          )}
        </div>
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

Characters.propTypes = {
  charactersData: PropTypes.shape({
    characters: PropTypes.shape({
      info: PropTypes.shape({
        next: PropTypes.number,
        pages: PropTypes.number,
      }),
      results: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string,
          image: PropTypes.string,
          location: PropTypes.shape({
            name: PropTypes.string,
          }),
          origin: PropTypes.shape({
            name: PropTypes.string,
          }),
          name: PropTypes.string,
          species: PropTypes.string,
          status: PropTypes.string,
        })
      ),
    }),
  }),
  next: PropTypes.number,
  pagesCount: PropTypes.number,
  charactersLoading: PropTypes.bool,
};

export default Characters;
