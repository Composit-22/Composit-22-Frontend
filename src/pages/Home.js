import Welcome from "../components/welcome/Welcome";
import EventCarousel from "../components/events/EventCarousel";
import Gallery from "../components/gallery/Gallery";
import Sponsor from "../components/sponsor/Sponsor";

const Home = () => {
    return (
        <>
            <Welcome />
            <EventCarousel />
            <Gallery />
            <Sponsor />
        </>
    );
};

export default Home;
