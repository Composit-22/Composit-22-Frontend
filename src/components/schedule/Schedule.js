import Speaker from './Speaker';
import classes from './Schedule.module.css';
import { useState, useContext } from "react";

import ScrollContext from '../../store/scroll-context';
import DarkContext from '../../store/DarkMode';

const Schedule = () => {

    const [tab, changeTab] = useState(1);

    const scrollCtx = useContext(ScrollContext);
    const {theme} = useContext(DarkContext);

    const switchTab = (newTab) => {
        changeTab(newTab);
    };

    return (
        <div className={theme.mode==='dark'? `${classes['container']} ${classes['container-dark']}` : classes["container"]}ref={scrollCtx.scheduleRef}>
        {/* // <div className={classes["container"]} ref={scrollCtx.scheduleRef}> */}
            <h2 className={theme.mode==='dark'? `${classes['heading']} ${classes['heading-dark']}` : classes["heading"]}>
            {/* <h2 className={classes["heading"]}>*/}Schedule</h2> 
            <div className={classes["tab_container"]}>
                <div className={theme.mode==='dark'? `${classes['tab-block']} ${classes['sample_dark']}`: classes["tab-block"]}>
                {/* <div className={classes["tab-block"]}> */}
                

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
                                <div className={classes['row-cell']}>Time</div>
                                <div className={classes['row-cell']}>Event</div>
                                <div className={classes['row-cell']}>Speakers</div>
                            </div>
                            <div className={classes["row"]}>
                                <div className={classes['row-cell']}>9 to 10 am</div>
                                <div className={classes['row-cell']}>Inaugration Ceremony</div>
                                <div className={classes['row-cell']}>
                                    <div><Speaker name="Utsav Mehta" img="logo192.png" booth="108" /></div>
                                </div>
                                <div className={classes['row-cell']}>
                                    Starting
                                </div>
                            </div>
                            <div className={classes["row"]}>
                                <div className={classes['row-cell']}>9 to 11 am</div>
                                <div className={classes['row-cell']}>Inaugration Seremoney</div>
                                <div className={classes['row-cell']}>
                                    <div><Speaker name="Utsav Mehta" img="logo192.png" booth="108" /></div>
                                    <div><Speaker name="Utsav" img="logo192.png" booth="108" /></div>
                                    <div><Speaker name="Utsav Mehta" img="logo192.png" booth="108" /></div>
                                </div>
                                <div className={classes['row-cell']}>
                                    Started
                                </div>
                            </div>
                            <div className={classes["row"]}>
                                <div className={classes['row-cell']}>9 to 12 am</div>
                                <div className={classes['row-cell']}>Inaugration Seremoni</div>
                                <div className={classes['row-cell']}>
                                    <div><Speaker name="Utsav Mehta &LongName" img="logo192.png" booth="108" /></div>
                                    <div><Speaker name="Utsav Mehta" img="logo192.png" booth="108" /></div>
                                </div>
                                <div className={classes['row-cell']}>
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