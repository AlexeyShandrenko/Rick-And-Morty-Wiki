import PropTypes from "prop-types";

import { useEffect, useState, ef } from "react";

import styles from "./styles/episodes.module.scss";

import {
  EPISODE_NAME,
  EPISODE_AIR_DATE,
} from "../../config/constants/constants";

import useGetEpisodeById from "../../hooks/episodes/useGetEpisodeById";

import CharactersList from "../Characters/List/CharactersList";
import Picker from "../ui/picker/Picker";

const Episodes = ({ count }) => {
  const [episodeId, setEpisodeId] = useState(1);

  useEffect(() => {
    getEpisodeById();
  }, []);

  const selectEpisode = (event) => {
    const { value } = event.target;
    setEpisodeId(+value);
    getEpisodeById();
  };
  const [getEpisodeById, { data }] = useGetEpisodeById(episodeId);

  return (
    <section className={styles.episodes}>
      <h1 className={styles.episodes__title}>
        <span>{EPISODE_NAME}</span>
        {data && data.episode.name}
      </h1>
      <h2 className={styles.episodes__subtitle}>
        <span>{EPISODE_AIR_DATE}</span>
        {data && data.episode.air_date}
      </h2>
      <Picker count={count} name="Episode" select={selectEpisode} />
      {data && <CharactersList data={data.episode.characters} />}
    </section>
  );
};

Episodes.propTypes = {
  count: PropTypes.number.isRequired,
};

export default Episodes;
