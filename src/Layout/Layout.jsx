    // Layout.js
    import { Outlet } from "react-router-dom";
import Header from "../Component/Header";
import SideBar from "../Component/SideBar";

    const Layout = () => {
      return (
        <>
        <div className="flex">
          <div className="xs:hidden xl:block lg:block md:blocks sm:block 2xs:hidden 3xs:hidden xl:w-[25%] lg:w-[25%] md:w-[25%] sm:w-[30%]">
            <SideBar />
          </div>
            <div className="flex-1 bg-primary w-full h-screen overflow-y-auto">
                <Header />
                <main className="">
                <Outlet />
                </main>
            </div>
        </div>
          
        </>
      );
    };

    export default Layout;