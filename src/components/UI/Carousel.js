import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import classes from "./Carousel.module.css";

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
                right: "2rem",
                transform: "translateY(-50%)",
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
                background: "transparent",
                position: "absolute",
                top: "50%",
                left: "2rem",
                transform: "translateY(-50%)",
                zIndex: "1000",
            }}
            onClick={onClick}
        />
    );
}

const Carousel = React.forwardRef((props, ref) => {
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
        ],
    };

    return (
        <div className={classes["carousel-container"]} ref={ref}>
            <h1 className={classes["carousel-heading"]}>{props.heading}</h1>
            <Slider className={classes["carousel"]} {...settings}>
                {props.children}
            </Slider>
        </div>
    );
});

export default Carousel;
