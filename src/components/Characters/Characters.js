import { useState } from "react";

import useGetCharactersByPageId from "../../hooks/useGetCharactersByPageId";

import CharactersList from "./List/CharactersList";
import Loading from "../ui/loading/Loading";
import Button from "../ui/button/Button";

import styles from "./styles/characters.module.scss";

const Characters = ({
  charactersData,
  charactersLoading,
  pagesCount,
  next,
}) => {
  const { results: defaultResults = [] } = charactersData?.characters;
  const [results, setResults] = useState(defaultResults);
  const [pageNumber, setPageNumber] = useState(next);

  const [getNewCharacters, { data }] = useGetCharactersByPageId(pageNumber);

  const loadMore = () => {
    getNewCharacters();
    if (data) {
      const newCharacters = data?.characters?.results;
      setResults((prev) => {
        return [...prev, ...newCharacters];
      });
      setPageNumber((prev) => {
        return prev === pagesCount + 1 ? prev : prev + 1;
      });
    }
  };

  return (
    <section className={styles.characters}>
      <h1 className={styles.characters__title}>Characters</h1>
      {charactersLoading ? <Loading /> : <CharactersList data={results} />}
      {charactersData && pageNumber !== pagesCount && (
        <Button onClick={loadMore} name="Load more" />
      )}
    </section>
  );
};

export default Characters;
