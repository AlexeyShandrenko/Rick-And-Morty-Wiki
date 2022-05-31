import PropTypes from "prop-types";

import Character from "../../components/Character/Character";
import Wallpaper from "../../components/ui/wallpaper/Wallpaper";

const CharacterPage = ({ title }) => {
  return (
    <>
      <Wallpaper title={title} />
      <main>
        <div className="container">
          <Character />
        </div>
      </main>
    </>
  );
};

CharacterPage.propTypes = {
  title: PropTypes.string.isRequired,
};

export default CharacterPage;
