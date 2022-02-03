import Speaker from './Speaker';
import classes from './Schedule.module.css';
import { useState } from "react";

const Schedule = () => {

    const [tab, changeTab] = useState(1);

    const switchTab = (newTab) => {
        changeTab(newTab);
    };

    return (
        <div className={classes["container"]}>
            <h2>SCHEDULE</h2>
            <div className={classes["tab_container"]}>
                <div className={classes["tab-block"]}>
                    <button
                        className={tab === 1 ? `${classes["tabs"]} ${classes["active-tabs"]}` : classes["tabs"]}
                        onClick={() => switchTab(1)}
                    >
                        <h3>Inaugration Day</h3>
                        <h6>11 March</h6>
                    </button>
                    <button
                        className={tab === 2 ? `${classes["tabs"]} ${classes["active-tabs"]}` : classes["tabs"]}
                        onClick={() => switchTab(2)}
                    >
                        <h3>Paper Presentation</h3>
                        <h6>12 March</h6>
                    </button>
                    <button
                        className={tab === 3 ? `${classes["tabs"]} ${classes["active-tabs"]}` : classes["tabs"]}
                        onClick={() => switchTab(3)}
                    >
                        <h3>Prize Distribution</h3>
                        <h6>13 March</h6>
                    </button>
                </div>

                <div>
                    <div className={tab === 1 ? `${classes["content"]} ${classes["active-content"]}` : classes["content"]}>
                        <div className={classes["table-container"]}>
                            <div className={`${classes["table-heading"]} ${classes["row"]}`}>
                                <div>Time</div>
                                <div>Event</div>
                                <div>Speakers</div>
                            </div>
                            <div className={classes["row"]}>
                                <div>9 to 10 am</div>
                                <div>Inaugration Ceremony</div>
                                <div>
                                    <Speaker name="Utsav Mehta" img="logo192.png" booth="108" />
                                </div>
                                <div>
                                    Starting
                                </div>
                            </div>
                            <div className={classes["row"]}>
                                <div>9 to 11 am</div>
                                <div>Inaugration Seremoney</div>
                                <div>
                                    <div><Speaker name="Utsav Mehta" img="logo192.png" booth="108" /></div>
                                    <div><Speaker name="Utsav Mehta" img="logo192.png" booth="108" /></div>
                                    <div><Speaker name="Utsav Mehta" img="logo192.png" booth="108" /></div>
                                </div>
                                <div>
                                    Started
                                </div>
                            </div>
                            <div className={classes["row"]}>
                                <div>9 to 12 am</div>
                                <div>Inaugration Seremoni</div>
                                <div>
                                    <div><Speaker name="Utsav Mehta" img="logo192.png" booth="108" /></div>
                                    <div><Speaker name="Utsav Mehta" img="logo192.png" booth="108" /></div>
                                </div>
                                <div>
                                    Ended
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={tab === 2 ? `${classes["content"]} ${classes["active-content"]}` : classes["content"]}>
                        <h2>*Website Presentation.</h2>
                    </div>

                    <div className={tab === 3 ? `${classes["content"]} ${classes["active-content"]}` : classes["content"]}>
                        <h2>No money for prize.</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Schedule;