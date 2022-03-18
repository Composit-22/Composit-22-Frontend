import classes from "./TeamCard.module.css";

import { useState } from "react";

const TeamCard = function (props) {
    const [onState, setOnState] = useState(false);
    const [offState, setOffState] = useState(true);
    const enterhoverHandler = function () {
        setOnState(true);
        setOffState(false);
    };
    const leavehoverHandler = function () {
        setOnState(false);
        setOffState(true);
    };
    return (
        <div
            onMouseOver={enterhoverHandler}
            onMouseOut={leavehoverHandler}
            className={`${classes.card}`}
        >
            <div className={`${classes["card-img__container"]}  ${onState ? classes.mouseOn : ""
                } ${offState ? classes.mouseOff : ""}`}>
                <img
                    className={`${classes.cardimage}  ${onState ? classes.mouseOn : ""
                        } ${offState ? classes.mouseOff : ""}`}
                    src={props.img}
                ></img>
            </div>
            <div
                className={`${classes.offHoverCardText} ${onState ? classes.cardText : ""
                    }`}
            >
                <div>{props.name}</div>
                <br />
                <div>{props.designation}</div>
                <br />
                {props.linkedIn.includes('@') ? <div className={classes.cardLink_email}>{props.linkedIn}</div> : <div><a href={props.linkedIn} className={classes.cardLink}>LinkedIn	&#x2192;</a></div>}
            </div>
        </div>
    );
};
export default TeamCard;
