import Welcome from "../components/welcome/Welcome";
import EventCarousel from "../components/events/EventCarousel";
import Gallery from "../components/gallery/Gallery";
import Sponsor from "../components/sponsor/Sponsor";
import Schedule from "../components/schedule/Schedule";

const Home = () => {
    return (
        <>
            <Welcome />
            <EventCarousel />
            <Schedule />
            <Gallery />
            <Sponsor />
        </>
    );
};

export default Home;
