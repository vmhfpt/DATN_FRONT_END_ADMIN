import { Outlet } from "react-router-dom";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import Navbar from "./_components/Navbar";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";



export default function Layout() {
  const nav = useSelector((state: RootState) => state.web.nav);
 
  return (
    <>
     {/* <div
      className="app-preloader fixed z-50 grid h-full w-full place-content-center bg-slate-50 dark:bg-navy-900"
    >
      <div className="app-preloader-inner relative inline-block h-48 w-48"></div>
    </div> */}


     <div  id="root"
      className={nav ? "min-h-100vh flex grow bg-slate-50 dark:bg-navy-900 is-sidebar-open":"min-h-100vh flex grow bg-slate-50 dark:bg-navy-900" }
      x-cloak >
     <Header />
        <Navbar />
        <main className="main-content w-full px-[var(--margin-x)] pb-8 ">
          <Outlet />
        </main>
      <Footer />
     </div>
      
    </>
  );
}
