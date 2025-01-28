import { Outlet } from "react-router-dom";
import SideBar from "../../Component/SideBar/SideBar";

import Footer from "../../Component/Footer/Footer";
export default function MainLayout() {
  return (
    <div>
      <div className="md:flex">
        <SideBar />

        <div className="container w-full ">
          <Outlet />
        </div>
      </div>

      <Footer />
    </div>
  );
}
