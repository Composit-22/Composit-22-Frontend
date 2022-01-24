import Slider from "react-slick";
import classes from "./EventCarousel.module.css";
import Event from "./Event";

function SampleNextArrow(props) {
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
                zIndex: "5000",
            }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
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
                zIndex: "5000",
            }}
            onClick={onClick}
        />
    );
}

const EventCarousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 2,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };

    return (
        <div className={classes["carousel-container"]}>
            <h1 className={classes["carousel-heading"]}>Events</h1>
            <Slider className={classes["carousel"]} {...settings}>
                <div className={classes["carousel-item"]}>
                    <Event quote="Get ready for a wonderful treasurehunt" isRed="1"/>
                </div>
                <div className={classes["carousel-item"]}>
                    <Event quote="Get ready for a wonderful treasurehunt" isRed="2" />
                </div>
                <div className={classes["carousel-item"]}>
                    <Event quote="Get ready for a wonderful treasurehunt" isRed="3" />
                </div>
                <div className={classes["carousel-item"]}>
                    <Event quote="Get ready for a wonderful treasurehunt" isRed="4"/>
                </div>
                <div className={classes["carousel-item"]}>
                    <Event quote="Get ready for a wonderful treasurehunt" isRed="5" />
                </div>
                <div className={classes["carousel-item"]}>
                    <Event quote="Get ready for a wonderful treasurehunt" isRed="6"/>
                </div>
                <div className={classes["carousel-item"]}>
                    <Event quote="Get ready for a wonderful treasurehunt" isRed="6"/>
                </div>
                <div className={classes["carousel-item"]}>
                    <Event quote="Get ready for a wonderful treasurehunt"isRed="6" />
                </div>
            </Slider>
            <div className={classes["dummy"]}></div>
        </div>
    );
};

export default EventCarousel;
