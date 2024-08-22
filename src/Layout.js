import NavBar from "@/components/Navigation/NavBar";
import Footer from "./components/Footer/Footer";
const Layout = ({ children }) => {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <div>{children}</div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
