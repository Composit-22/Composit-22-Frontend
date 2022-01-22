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
        slidesToShow: 4,
        slidesToScroll: 2,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };

    return (
        <div className={classes["carousel-container"]}>
            <h1 className={classes["carousel-heading"]}>Events</h1>
            <Slider className={classes["carousel"]} {...settings}>
                <div className={classes["carousel-item"]}>
                    <Event text="1" />
                </div>
                <div className={classes["carousel-item"]}>
                    <Event text="2" />
                </div>
                <div className={classes["carousel-item"]}>
                    <Event text="3" />
                </div>
                <div className={classes["carousel-item"]}>
                    <Event text="4" />
                </div>
                <div className={classes["carousel-item"]}>
                    <Event text="5" />
                </div>
                <div className={classes["carousel-item"]}>
                    <Event text="6" />
                </div>
                <div className={classes["carousel-item"]}>
                    <Event text="7" />
                </div>
                <div className={classes["carousel-item"]}>
                    <Event text="8" />
                </div>
            </Slider>
            <div className={classes["dummy"]}></div>
        </div>
    );
};

export default EventCarousel;
