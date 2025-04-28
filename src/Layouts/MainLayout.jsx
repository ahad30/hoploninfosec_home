import { Outlet } from "react-router-dom";
import Header from "../Shared/Header/Header";
import Footer from "../Shared/Footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <Header />
     <div className="min-h-screen bg-[#0E0E0E]">
     <Outlet/>
     </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
