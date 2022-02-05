import { useState } from "react";
import ReactDOM from "react-dom";

import Backdrop from "../UI/Backdrop";

import classes from "./Moment.module.css";

const OverlayContent = (props) => {
    return (
        <img
            src={props.image}
            alt="saturn-enlarged"
            className={classes["moment-enlarged"]}
        />
    );
};

const Moment = (props) => {
    const [isEnlarged, setIsEnlarged] = useState(false);

    const closeOverlayHandler = () => {
        setIsEnlarged(false);
    };

    const openOverlayHandler = () => {
        setIsEnlarged(true);
    };

    return (
        <>
            <div className={classes["moment"]} onClick={openOverlayHandler}>
                <img
                    src={props.image}
                    alt="saturn"
                    className={classes["moment-normal"]}
                />
            </div>
            {isEnlarged && <Backdrop onClose={closeOverlayHandler} />}
            {isEnlarged &&
                ReactDOM.createPortal(
                    <OverlayContent image={props.image}/>,
                    document.getElementById("overlay-root")
                )}
        </>
    );
};

export default Moment;
