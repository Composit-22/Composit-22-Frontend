import React, { useEffect, useState } from "react";

import Carousel from "../UI/Carousel";
import Moment from "./Moment";

import classes from "./Gallery.module.css";
import DarkContext from '../../store/DarkMode';
import { useContext } from 'react';

const imgs = [];

const loadImages = async (n) => {
    let getter;
    for (let i = 0; i < n; i++) {
        getter = await import("./imgs/" + i + ".jpg").then(result => {imgs.push(result.default);});
    }
};

const Gallery = React.forwardRef((props, ref) => {
    const [isLoaded, setIsLoaded] = useState(false);
    
    useEffect(() => {
        loadImages(5).then(() => setIsLoaded(true));
    }, []);

    const {theme} = useContext(DarkContext);
    return (
        <div className={theme.mode==='dark'? `${classes['bkg']} ${classes['bkg-dark']}`: classes["bkg"]}>
        {/* <div className={classes["bkg"]}> */}
        {/* <h2 className={classes["heading"]}>Gallery</h2> */}
        <Carousel heading="Gallery" ref={ref}>
            {console.log(imgs.length)}
            {imgs.map((img, index) => {
                return (
                    <div className={classes["gallery__item"]}>
                        <Moment key={index} image={img} />
                    </div>
                )
            })}
        </Carousel>
         </div>
    );
});

export default Gallery;
