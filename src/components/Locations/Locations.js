import { useState } from "react";

import styles from "./styles/location.module.scss";

import useGetLocationById from "../../hooks/locations/useGetLocationById";

import CharactersList from "../Characters/List/CharactersList";
import Picker from "../ui/picker/Picker";

const Locations = ({ count }) => {
  const [locationId, setLocationId] = useState(1);

  const selectLocation = (event) => {
    const { value } = event.target;
    setLocationId(+value);
    getLocationById();
  };

  const [getLocationById, { data }] = useGetLocationById(locationId);

  return (
    <section className={styles.locations}>
      <h1 className="locations__title">
        <span>Location: </span>
        {data && data.location.name}
      </h1>
      <h2 className="locations__title">
        <span>Dimension: </span>
        {data && data.location.dimension}
      </h2>
      <h3 className="locations__title">
        <span>Type: </span>
        {data && data.location.type}
      </h3>
      <Picker count={count} name="Location" select={selectLocation} />
      {data && <CharactersList data={data.location.residents}/>}
    </section>
  );
};

export default Locations;
