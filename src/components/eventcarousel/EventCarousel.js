import React, { useContext } from "react";
import EventContext from "../../store/event-context";

import Carousel from "../UI/Carousel";
import EventCard from "./EventCard";

import classes from "./EventCarousel.module.css";

const EventCarousel = React.forwardRef((props, ref) => {
    const eventCtx = useContext(EventContext);

    return (
        <Carousel heading="Events" ref={ref}>
            {eventCtx.events.map((event, index) => (
                <div className={classes["event-carousel__item"]} key={event.id}>
                    <EventCard
                        quote="Get ready for a wonderful treasurehunt"
                        id={event.id}
                        colorId={index % 5}
                        title={event.title}
                    />
                </div>
            ))}
        </Carousel>
    );
});

export default EventCarousel;
