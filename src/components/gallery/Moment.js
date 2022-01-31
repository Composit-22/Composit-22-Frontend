import { useState } from "react";
import ReactDOM from "react-dom";

import Backdrop from "../UI/Backdrop";

import classes from "./Moment.module.css";
import saturn from "./img/saturn.jpg";

const OverlayContent = () => {
    return <img src={saturn} alt="saturn-enlarged" className={classes["moment-enlarged"]}/>;
};

const Moment = () => {
    const [isEnlarged, setIsEnlarged] = useState(false);

    const closeOverlayHandler = () => {
        setIsEnlarged(false);
    };

    const openOverlayHandler = () => {
        setIsEnlarged(true);
    };

    return<>
        <div className={classes["moment"]} onClick={openOverlayHandler}>
            <img
                src={saturn}
                alt="saturn"
                className={classes["moment-normal"]}
            />
        </div>
        {isEnlarged && <Backdrop onClose={closeOverlayHandler} />}
        {isEnlarged && ReactDOM.createPortal(<OverlayContent />, document.getElementById("overlay-root"))}
    </>
};

export default Moment;
