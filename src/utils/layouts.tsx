import { Outlet } from "react-router";

// Components
import Header from "./header";
import NavMenu from "./menu";
import Footer from "./footer";

const DefaultLayout: React.FC = () => {
    return (
        <>
            <Header />
            <NavMenu />
            <div className="bg-gray-300 min-h-screen"> 
                <div className="container mx-auto p-4"> 
                    <Outlet />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default DefaultLayout;