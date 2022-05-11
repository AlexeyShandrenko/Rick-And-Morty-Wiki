import useCharacters from "../hooks/useCharacters";

const CharactersList = () => {
  const { error, data, loading } = useCharacters();

  return <div></div>;
};

export default CharactersList;
