import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";


const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
          <section className="min-h-screen">
          <Outlet></Outlet>
          </section>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;