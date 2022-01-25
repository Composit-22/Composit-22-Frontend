import Carousel from "../UI/Carousel";
import Event from "./Event";

import classes from "./EventCarousel.module.css";

const EventCarousel = () => {

    return (
        <Carousel heading="Events">
            <div className={classes["event-carousel__item"]}>
                <Event
                    quote="Get ready for a wonderful treasurehunt"
                    isRed="1"
                />
            </div>
            <div className={classes["event-carousel__item"]}>
                <Event
                    quote="Get ready for a wonderful treasurehunt"
                    isRed="2"
                />
            </div>
            <div className={classes["event-carousel__item"]}>
                <Event
                    quote="Get ready for a wonderful treasurehunt"
                    isRed="3"
                />
            </div>
            <div className={classes["event-carousel__item"]}>
                <Event
                    quote="Get ready for a wonderful treasurehunt"
                    isRed="4"
                />
            </div>
            <div className={classes["event-carousel__item"]}>
                <Event
                    quote="Get ready for a wonderful treasurehunt"
                    isRed="5"
                />
            </div>
            <div className={classes["event-carousel__item"]}>
                <Event
                    quote="Get ready for a wonderful treasurehunt"
                    isRed="6"
                />
            </div>
            <div className={classes["event-carousel__item"]}>
                <Event
                    quote="Get ready for a wonderful treasurehunt"
                    isRed="6"
                />
            </div>
            <div className={classes["event-carousel__item"]}>
                <Event
                    quote="Get ready for a wonderful treasurehunt"
                    isRed="6"
                />
            </div>
        </Carousel>
    );
};

export default EventCarousel
