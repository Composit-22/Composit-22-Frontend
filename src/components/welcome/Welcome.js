import classes from "./Welcome.module.css";
import Button from "../UI/Button";

import DarkContext from "../../store/DarkMode";
import { useContext } from "react";
import { NavLink } from "react-router-dom";

const Welcome = () => {
    const darkCtx = useContext(DarkContext);

    return (
        <section
            className={
                classes["welcome"] +
                (darkCtx.theme.mode === "dark"
                    ? " " + classes["welcome__dark"]
                    : "")
            }
        >
            <h2
                className={
                    classes["heading-medium"] +
                    (darkCtx.theme.mode === "dark"
                        ? " " + classes["heading-medium__dark"]
                        : "")
                }
            >
                IIT Kharagpur
            </h2>
            <h3
                className={
                    classes["heading-small"] +
                    (darkCtx.theme.mode === "dark"
                        ? " " + classes["heading-small__dark"]
                        : "")
                }
            >
                Presents 27th Edition of
            </h3>
            <h1
                className={
                    classes["heading-large"] +
                    (darkCtx.theme.mode === "dark"
                        ? " " + classes["heading-large__dark"]
                        : "")
                }
            >
                Composit
                <br />
                & <br />
                
                
                11'th Research Scholar's Day
            </h1>
            <div className={classes["welcome-btn__group"]}>
                {/* <Button className={theme.mode==='dark'? `${classes['welcome-btn']} ${classes['welcome-btn__left-dark']}` : `${classes['welcome-btn']} ${classes['welcome-btn__left']}`> */}
                {/* <Button
                    className={
                        `${classes["welcome-btn"]} ${classes["welcome-btn__left"]}` +
                        (darkCtx.theme.mode === "dark"
                            ? " " + classes["welcome-btn__left__dark"]
                            : "")
                    }
                >
                    <NavLink to="/register" className={classes["landing-register"]}>Get Started</NavLink>
                </Button> */}
                {/* <Button
                    className={
                        `${classes["welcome-btn"]} ${classes["welcome-btn__right"]}` +
                        (darkCtx.theme.mode === "dark"
                            ? " " + classes["welcome-btn__right__dark"]
                            : "")
                    }
                >
                    Event Promo
                </Button> */}
                {/* <img src={molekule} alt="molekule" className={classes["molekule"]} /> */}
            </div>
        </section>
    );
};

export default Welcome;
