import { useEffect, useState } from "react";

import styles from "./styles/location.module.scss";

import {
  LOCATION_NAME,
  LOCATION_DIMENSION,
  LOCATION_TYPE,
} from "../../config/constants/constants";

import useGetLocationById from "../../hooks/locations/useGetLocationById";

import CharactersList from "../Characters/List/CharactersList";
import Picker from "../ui/picker/Picker";

const Locations = ({ count }) => {
  const [locationId, setLocationId] = useState(1);

  useEffect(() => {
    getLocationById();
  }, []);

  const selectLocation = (event) => {
    const { value } = event.target;
    setLocationId(+value);
    getLocationById();
  };

  const [getLocationById, { data }] = useGetLocationById(locationId);
  console.log(data);

  return (
    <section className={styles.locations}>
      <h1 className={styles.locations__title}>
        <span>{LOCATION_NAME}</span>
        {data && data.location.name}
      </h1>
      <h2 className={styles.locations__subtitle}>
        <span>{LOCATION_DIMENSION}</span>
        {data && data.location.dimension}
      </h2>
      <h3 className={styles.locations__type}>
        <span>{LOCATION_TYPE}</span>
        {data && data.location.type}
      </h3>
      <Picker count={count} name="Location" select={selectLocation} />
      {data && <CharactersList data={data.location.residents} />}
    </section>
  );
};

export default Locations;
