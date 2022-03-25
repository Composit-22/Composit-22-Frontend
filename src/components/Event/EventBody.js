
import { useState, useEffect, useContext } from "react";
import DarkContext from "../../store/DarkMode";
import classes from "./EventBody.module.css";

import UserContext from "../../store/user-context";
const imgs = [];

const loadImages = async (n) => {
    let getter;
    for (let i = 0; i < n; i++) {
        getter = await import("./imgs/" + i + ".png").then((result) => {
            imgs.push(result.default);
        });
    }
};

const Event = (props) => {
    const userCtx = useContext(UserContext);

    const bkg = classes["bkg-" + props.colorId];

    const darkCtx = useContext(DarkContext);

    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        loadImages(6).then(() => setIsLoaded(true));
    }, []);

    function registerEvent(eventID) {
        if (userCtx.isLoggedIn) {
            //CALL BACKEND
            const state = {
                username: userCtx.user.userName,
                eventID: eventID,
            };
            console.log(state);
            fetch("https://composit-api.herokuapp.com/registerForEvent", {
                method: "POST",
                body: JSON.stringify(state),
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    Accept: "application/json",
                },
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    alert("Successfully registered for the Event!");
                })
                .catch((e) => console.log(e));
        } else {
            alert("Please login to register for the Event!");
            window.location.href = "/login";
        }
    }

    const toLink = "/event/" + props.id;
    
    return (
        <div className={`${classes["event__container"]} ${bkg}`}>
            <div
                className={
                    `${classes["event"]}` + (darkCtx.theme.mode === "dark" ? " " + classes["event__dark"] : "")
                }
            >
                <div className={classes["event-img__container"]}>
                    {isLoaded && <img src={imgs[+props.id]} alt="event-img" className={classes["event-img"]}></img>}
                </div>
                <div className={classes["event-content"]}>
                    <h1 className={classes["event-title"]}>{props.title}</h1>
                    <div className={`${classes["event-about"]}` + " " + (darkCtx.theme.mode === "dark" ? classes["block__dark"] : classes["block"])}>
                        {/* <h2 className={classes["title"]}>Coming Soon</h2> */}
                        <p className={classes["desc"]}>{props.desc}</p>
                    </div>
                    <div className={(darkCtx.theme.mode === "dark" ? classes["block__dark"] : classes["block"])}>
                        <h2 className={classes["title"]}>Team Size</h2>
                        <p className={classes["desc"]}>
                            {props.min === props.max
                                ? "Individual participation."
                                : `Minimum ${props.min} to maximum ${props.max} members`}
                        </p>
                    </div>
                    <div className={(darkCtx.theme.mode === "dark" ? classes["block__dark"] : classes["block"])}>
                        <h2 className={classes["title"]}>Who can participate</h2>
                        <p className={classes["desc"]}>{props.participant_info}</p>
                    </div>
                    <div className={classes["event-btn__group"]}>
                        <button className={classes["register-btn"]} onClick={() => registerEvent(props.id)}>
                            Register
                        </button>
                        <a href={props.Details} className={classes["details-btn"]} target="_blank">
                            Details
                        </a>
                        {
                            
                            props.submit_link === "" ? ""
                            :
                            <a href={props.submit_link} className={classes["details-btn"]} target="_blank">
                                Submit
                            </a>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Event;
