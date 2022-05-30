import { useParams } from "react-router-dom";

import useGetCharacterById from "../../hooks/characters/useGetCharacterById";

import CharacterInformation from "./information/CharacterInformation";
import Loading from "../ui/loading/Loading";

import styles from "./styles/character.module.scss";

const Character = () => {
  const { id } = useParams();
  const { data, loading } = useGetCharacterById(+id);

  return (
    <section className={styles.character}>
      {loading ? (
        <Loading />
      ) : (
        <CharacterInformation character={data.character} />
      )}
    </section>
  );
};

export default Character;
