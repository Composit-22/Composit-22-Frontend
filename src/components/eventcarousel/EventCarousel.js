import React, { useContext, useEffect, useState } from "react";
import EventContext from "../../store/event-context";

import Carousel from "../UI/Carousel";
import EventCard from "./EventCard";

import classes from "./EventCarousel.module.css";

const imgs = [];

const loadImages = async (n) => {
    let getter;
    for (let i = 0; i < n; i++) {
        getter = await import("./imgs/" + i + ".png").then(result => {imgs.push(result.default);});
    }
};

const EventCarousel = React.forwardRef((props, ref) => {
    const [isLoaded, setIsLoaded] = useState(false);
    
    useEffect(() => {
        loadImages(5).then(() => setIsLoaded(true));
    }, []);

    return (
        <Carousel heading="Events" ref={ref}>
            {imgs.map((img, index) => (
                <div className={classes["event-carousel__item"]} key={index}>
                    <EventCard
                        id={index}
                        image={img}
                    />
                </div>
            ))}
        </Carousel>
    );
});

export default EventCarousel;
