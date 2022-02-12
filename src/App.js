import { Route, Switch, Redirect } from "react-router-dom";
import TeamCard from "./components/AboutUs/TeamCard";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import ScrollToTop from "./components/scrolltotop/ScrollToTop";
import EventBody from "./components/Event/EventBody";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Event from "./pages/event/Event";
import ComingSoon from "./pages/comingsoon/ComingSoon";

import Profile from "./components/myprofile/Profile";

const App = () => {
  return (
    <>
      {/* <TeamCard></TeamCard> */}
      <Navbar />

      <ScrollToTop />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/home" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/event/:eventId" component={Event} />
        <Route path="*" component={ComingSoon} />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
