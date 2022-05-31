import PropTypes from "prop-types";

import Home from "../../components/Home/Home";
import Wallpaper from "../../components/ui/wallpaper/Wallpaper";

const HomePage = ({ title }) => {
  return (
    <>
      <Wallpaper title={title} />
      <main>
        <div className="container">
          <Home />
        </div>
      </main>
    </>
  );
};

HomePage.propTypes = {
  title: PropTypes.string.isRequired,
};

export default HomePage;
