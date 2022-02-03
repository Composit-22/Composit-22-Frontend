import classes from './Schedule.module.css'
import { useState } from "react";

const Schedule = () => {

    const [tab, changeTab] = useState(1);

    const switchTab = (newTab) => {
        changeTab(newTab);
    };

    return (
        <div className={classes["container"]}>
            <h2>SCHEDULE</h2>
            <div>
                <div className={classes["tab_container"]}>
                    <div className={classes["bloc-tabs"]}>
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

                    <div className={classes["content-tabs"]}>
                        <div
                            className={tab === 1 ? `${classes["content"]} ${classes["active-content"]}` : classes["content"]}
                        >
                            
                            </div>

                            <div
                                className={tab === 2 ? `${classes["content"]} ${classes["active-content"]}` : classes["content"]}
                            >
                                <h2>try 2</h2>
                            </div>

                            <div
                                className={tab === 3 ? `${classes["content"]} ${classes["active-content"]}` : classes["content"]}
                            >
                                <h2>try 3</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            );
};

            export default Schedule;