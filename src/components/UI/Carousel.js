import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import classes from "./Carousel.module.css";

import DarkContext from "../../store/DarkMode";
import { useContext } from "react";

import React from "react";

const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                display: "block",
                fontSize: "4rem",
                background: "transaparent",
                position: "absolute",
                top: "50%",
                right: "3rem",
                transform: "translateY(-50%) scale(3.2)",
                zIndex: "1000",
            }}
            onClick={onClick}
        />
    );
}

const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                display: "block",
                fontSize: "4rem",
                color: "red",
                background: "transparent",
                position: "absolute",
                top: "50%",
                left: "3rem",
                transform: "translateY(-50%) scale(3.2)",
                zIndex: "1000",
            }}
            onClick={onClick}
        />
    );
}

const Carousel = React.forwardRef((props, ref) => {

    const darkCtx = useContext(DarkContext);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 2,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1276,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 720,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            }
        ],
    };

    return (
        <div className={classes["carousel-container"] + (darkCtx.theme.mode === "dark" ? " " + classes["carousel-container__dark"] : "")} ref={ref}>
            <h1 className={classes["carousel-heading"] + (darkCtx.theme.mode === "dark" ? " " + classes["carousel-heading__dark"] : "")}>{props.heading}</h1>
            <Slider className={classes["carousel"]} {...settings}>
                {props.children}
            </Slider>
        </div>
    );
});

export default Carousel;
