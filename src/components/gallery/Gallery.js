import Carousel from "../UI/Carousel";
import Moment from "./Moment";

import classes from "./Gallery.module.css";

const Gallery = () => {
    return (
        <Carousel heading="Gallery">
            <div className={classes["gallery__item"]}>
                <Moment />
            </div>
            <div className={classes["gallery__item"]}>
                <Moment />
            </div>
            <div className={classes["gallery__item"]}>
                <Moment />
            </div>
            <div className={classes["gallery__item"]}>
                <Moment />
            </div>
            <div className={classes["gallery__item"]}>
                <Moment />
            </div>
            <div className={classes["gallery__item"]}>
                <Moment />
            </div>
            <div className={classes["gallery__item"]}>
                <Moment />
            </div>
            <div className={classes["gallery__item"]}>
                <Moment />
            </div>
        </Carousel>
    );
};

export default Gallery;