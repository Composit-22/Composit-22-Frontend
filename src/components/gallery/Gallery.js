import Carousel from "../UI/Carousel";
import Moment from "./Moment";

import classes from "./Gallery.module.css";

import mercury from "./imgs/mercury.jpg";
import venus from "./imgs/venus.jpg";
import earth from "./imgs/earth.jpg";
import mars from "./imgs/mars.jpg";
import jupiter from "./imgs/jupiter.jpg";
import saturn from "./imgs/saturn.jpg";
import uranus from "./imgs/uranus.jpg";
import neptune from "./imgs/neptune.jpg";


const Gallery = () => {
    return (
        <Carousel heading="Gallery">
            <div className={classes["gallery__item"]}>
                <Moment image={mercury}/>
            </div>
            <div className={classes["gallery__item"]}>
                <Moment image={venus}/>
            </div>
            <div className={classes["gallery__item"]}>
                <Moment image={earth}/>
            </div>
            <div className={classes["gallery__item"]}>
                <Moment image={mars}/>
            </div>
            <div className={classes["gallery__item"]}>
                <Moment image={jupiter}/>
            </div>
            <div className={classes["gallery__item"]}>
                <Moment image={saturn}/>
            </div>
            <div className={classes["gallery__item"]}>
                <Moment image={uranus}/>
            </div>
            <div className={classes["gallery__item"]}>
                <Moment image={neptune}/>
            </div>
        </Carousel>
    );
};

export default Gallery;