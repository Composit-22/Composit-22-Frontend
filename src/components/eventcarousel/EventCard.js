import classes from "./EventCard.module.css";
import cardImg from "./event-bkg.jpg";

import { NavLink } from "react-router-dom";

const EventCard = (props) => {
    const styles = classes["bkg-" + props.colorId] + ' ' + classes['card'];
    return (
        <div className={styles}>
            <h2 className={classes["card-quote"]}>{`"${props.quote}"`}</h2>
            <h1 className={classes["card-title"]}>{props.title}</h1>
            <div className={classes["card-desc"]}>
                <div className={classes["card-desc__frag"]}>
                    <h3 className={classes["frag__title"]}>When</h3>
                    <p className={classes["frag__desc"]}>Mar 12, 2020 <br/> 8:00 PM</p>
                </div>
                <div className={classes["card-desc__frag"]}>
                    <h3 className={classes["frag__title"]}>Where</h3>
                    <p className={classes["frag__desc"]}>IIT Kharagpur <br/> West, Bengal</p>
                </div>
                <div className={classes["img-container"]}>
                    <img
                        src={cardImg}
                        alt="card-img"
                        className={classes["card-img"]}
                    />
                </div>
            </div>
            <div className={classes["card-btn__group"]}>
                <NavLink to="/register" className={classes["card-btn"]}>Resgister</NavLink>
                <NavLink to={"/event/" + props.id} className={classes["card-btn"]}>Know More</NavLink>
            </div>
            <svg viewBox="0 0 1 1">
                <defs>
                    <clipPath clipPathUnits="objectBoundingBox" id="deermask">
                        <path
                            d="M 436.649 100.701 C 396.328 56.497 282.561 46.167 239.49 73.466 C 192.215 103.429 182.964 163.155 174.955 182.998 C 153.418 243.265 185.275 353.717 247.188 394.958 C 315.037 444.802 347.266 418.408 404.085 357.065 C 431.046 327.957 432.936 319.202 447.307 282.465 C 461.678 245.728 467.759 155.851 436.649 100.701 Z"
                            transform="translate(-302.5 -370.5)"
                            fill="#fff"
                        />
                    </clipPath>
                </defs>
            </svg>
        </div>
    );
};

export default EventCard;
