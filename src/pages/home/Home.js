import { useContext } from "react";

import Welcome from "../../components/welcome/Welcome";
import EventCarousel from "../../components/eventcarousel/EventCarousel";
import Gallery from "../../components/gallery/Gallery";
import Sponsor from "../../components/sponsor/Sponsor";
import Schedule from "../../components/schedule/Schedule";
import Landingabout from "../../components/landingabout/Landingabout";
import classes from "./Home.module.css";
import ScrollContext from "../../store/scroll-context";
// import { useState, useContext } from "react";
import DarkContext from '../../store/DarkMode';


const Home = () => {

    const scrollCtx = useContext(ScrollContext);
    const {theme} = useContext(DarkContext);


    return (
        <>
            <Welcome />
            <EventCarousel ref={scrollCtx.eventCarouselRef} />
            <Schedule />
            <Gallery ref={scrollCtx.galleryRef} />
            <div className={theme.mode==='dark'? `${classes['combined_bkg']} ${classes['combined_bkg-dark']}` : classes["combined_bkg"]}>  
            {/* <div className={classes["combined_bkg"]}> */}
                <Landingabout />
                <Sponsor />
            </div>
        </>
    );
};

export default Home;
