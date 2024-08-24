import NavBar from "@/components/Navigation/NavBar";
import Footer from "./components/Footer/Footer";
const Layout = ({ children }) => {
  return (
    <>
      <header className="w-full sticky top-0">
        <NavBar />
      </header>
      <main className="container min-h-[65vh] mx-auto">{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
