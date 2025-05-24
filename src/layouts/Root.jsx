import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const Root = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main className="container mx-auto">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Root;
