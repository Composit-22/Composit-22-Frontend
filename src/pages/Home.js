import { useCallback, useContext, useRef } from "react";

import Welcome from "../components/welcome/Welcome";
import EventCarousel from "../components/events/EventCarousel";
import Gallery from "../components/gallery/Gallery";
import Sponsor from "../components/sponsor/Sponsor";
import Schedule from "../components/schedule/Schedule";
import Landingabout from "../components/landingabout/Landingabout";

import ScrollContext from "../store/scroll-context";

const Home = (props) => {
    
    const scrollCtx = useContext(ScrollContext);

    return (
        <>
            <Welcome />
            <EventCarousel ref={scrollCtx.eventCarouselRef}/>
            <Schedule />
            <Gallery ref={scrollCtx.galleryRef} />
            <Landingabout />
            <Sponsor />
        </>
    );
};

export default Home;
