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

export default CharacterPage;
