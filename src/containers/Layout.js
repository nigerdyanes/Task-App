import Heading from "../components/layouts/Heading";
import Navbar from "../components/layouts/Navbar";
const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <Navbar />
        <Heading />
      </header>
      {children}
    </div>
  );
};

export default Layout;
