import PropTypes from "prop-types";

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
import NotFound from "../ui/notFound/NotFound";

const Locations = ({ count }) => {
  const [locationId, setLocationId] = useState(1);

  useEffect(() => {
    getLocationById();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const selectLocation = (event) => {
    const { value } = event.target;
    setLocationId(+value);
    getLocationById();
  };

  const [getLocationById, { data }] = useGetLocationById(locationId);

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
      {data && data.location.residents.length !== 0 ? (
        <CharactersList data={data.location.residents} />
      ) : (
        <NotFound />
      )}
    </section>
  );
};

Locations.propTypes = {
  count: PropTypes.number.isRequired,
};

export default Locations;
