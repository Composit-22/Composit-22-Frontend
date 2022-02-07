import React from "react";

import Carousel from "../UI/Carousel";
import EventCard from "./EventCard";

import classes from "./EventCarousel.module.css";

const EVENTS = [
    {
        title: "Metallomania",
    },
    {
        title: "Enigma",
    },
    {
        title: "Metaclix",
    },
    {
        title: "Technova",
    },
    {
        title: "Excavate",
    },
    {
        title: "Metallomania",
    },
    {
        title: "Enigma",
    },
    {
        title: "Metaclix",
    },
    {
        title: "Technova",
    },
    {
        title: "Excavate",
    }
];

const EventCarousel = React.forwardRef((props, ref) => {
    return (
        <Carousel heading="Events" ref={ref}>
            {EVENTS.map((event, index) => (
                <div className={classes["event-carousel__item"]} key={index}>
                    <EventCard
                        quote="Get ready for a wonderful treasurehunt"
                        colorId={index}
                        title={event.title}
                    />
                </div>
            ))}
        </Carousel>
    );
});

export default EventCarousel;
