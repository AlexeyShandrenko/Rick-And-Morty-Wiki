import { useState } from "react";

import styles from "./styles/episodes.module.scss";

import useGetEpisodeById from "../../hooks/episodes/useGetEpisodeById";

import CharactersList from "../Characters/List/CharactersList";
import Picker from "../ui/picker/Picker";

const Episodes = ({ count }) => {
  const [episodeId, setEpisodeId] = useState(null);

  const selectEpisode = (event) => {
    const { value } = event.target;
    setEpisodeId(+value);
    getEpisodeById();
  };
  const [getEpisodeById, { data }] = useGetEpisodeById(episodeId);

  return (
    <section className={styles.episodes}>
      <h1 className="episodes__title">
        <span>Episode name: </span>
        {data && data.episode.name}
      </h1>
      <h2 className="episodes__title">
        <span>Air date: </span>
        {data && data.episode.air_date}
      </h2>
      <Picker count={count} name="Episode" select={selectEpisode} />
      {data && <CharactersList data={data.episode.characters} />}
    </section>
  );
};

export default Episodes;
