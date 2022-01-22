import Welcome from "../components/welcome/Welcome";
import EventCarousel from "../components/events/EventCarousel";
import classes from "./Home.module.css";

const Home = () => {
    return (
        <>
            <Welcome />
            <EventCarousel />
        </>
    );
};

export default Home;
