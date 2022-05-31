import PropTypes from "prop-types";

import useGetLocationCount from "../../hooks/locations/useGetLocationCount";

import Locations from "../../components/Locations/Locations";
import Wallpaper from "../../components/ui/wallpaper/Wallpaper";
import Loading from "../../components/ui/loading/Loading";

const LocationsPage = ({ title }) => {
  const { data, loading } = useGetLocationCount();
  return (
    <>
      <Wallpaper title={title} />
      <main>
        <div className="container">
          {loading && <Loading />}
          {data && <Locations count={data.locations.info.count} />}
        </div>
      </main>
    </>
  );
};

LocationsPage.propTypes = {
  title: PropTypes.string.isRequired,
};

export default LocationsPage;
