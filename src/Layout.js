import NavBar from "@/components/navigation/NavBar";
const Layout = ({ children }) => {
  return (
    <main>
      <NavBar />
      <div>{children}</div>
    </main>
  );
};

export default Layout;
