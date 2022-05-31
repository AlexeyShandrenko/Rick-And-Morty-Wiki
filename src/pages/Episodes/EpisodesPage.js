import PropTypes from "prop-types";

import useGetEpisodesCount from "../../hooks/episodes/useGetEpisodesCount";

import Episodes from "../../components/Episodes/Episodes";
import Wallpaper from "../../components/ui/wallpaper/Wallpaper";
import Loading from "../../components/ui/loading/Loading";

const EpisodesPage = ({ title }) => {
  const { data, loading } = useGetEpisodesCount();
  return (
    <>
      <Wallpaper title={title} />
      <main>
        <div className="container">
          {loading && <Loading />}
          {data && <Episodes count={data.episodes.info.count} />}
        </div>
      </main>
    </>
  );
};

EpisodesPage.propTypes = {
  title: PropTypes.string.isRequired,
};

export default EpisodesPage;
