import { Outlet } from "react-router-dom";

import Header from "./../Header/Header";
import Wallpaper from "../ui/wallpaper/Wallpaper";
import Footer from "./../Footer/Footer";

const Layout = () => {
  return (
    <div className="wrapper">
      <Header />
      {/* <Wallpaper /> */}
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
