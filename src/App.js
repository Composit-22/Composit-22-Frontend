import { Route, Switch, Redirect } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import ScrollToTop from "./components/scrolltotop/ScrollToTop";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Event from "./pages/event/Event";
import ComingSoon from "./pages/comingsoon/ComingSoon";
import Login from "./pages/login/Login";
import Profile from "./components/myprofile/Profile";
import Register from "./pages/register/Register";
import OurTeam from "./pages/ourteam/OurTeam";

const App = () => {
  return (
    <>
      <Navbar />
      <ScrollToTop />
            <Switch>
                <Route path="/" exact>
                    <Redirect to="/home" />
                </Route>
                <Route path="/home" component={Home} exact />
                <Route path="/about" component={About} />
                <Route path="/event/:eventId" component={Event} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/team" component={OurTeam} />
                <Route path="*" component={ComingSoon} />
            </Switch>
      <Footer />
    </>
  );
};

export default App;
