import { Route, Switch, Redirect } from "react-router-dom";

import ScrollToTop from "./components/scrolltotop/ScrollToTop";
import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import About from "./components/about/About";
import ComingSoon from "./components/comingsoon/ComingSoon";

const App = () => {

    return (
        <>
            <Navbar/>
            <ScrollToTop />
            <Switch>
                <Route path="/" exact>
                    <Redirect to="/home" />
                </Route>
                <Route path="/home" component={Home} exact />
                <Route path="/about" component={About} />
                <Route path="*" component={ComingSoon} />
            </Switch>
            <Footer />
        </>
    );
};

export default App;
