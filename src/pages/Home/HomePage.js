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

export default HomePage;
