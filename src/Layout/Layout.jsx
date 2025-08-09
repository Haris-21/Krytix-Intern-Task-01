    // Layout.js
    import { Outlet } from "react-router-dom";
import Header from "../Component/Header";
import SideBar from "../Component/SideBar";

    const Layout = () => {
      return (
        <>
        <div className="flex">
            <SideBar />
            <div className="flex-1 bg-primary">
                <Header />
                <main className="p-4">
                <Outlet />
                </main>
            </div>
        </div>
          
        </>
      );
    };

    export default Layout;