import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import About from "./components/about/About";
import Landingabout from "./components/landingabout/Landingabout";

// import About from "./components/about/About";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      {/* <About /> */}
      <Landingabout />
      <Footer />
    </>
  );
};

export default App;
