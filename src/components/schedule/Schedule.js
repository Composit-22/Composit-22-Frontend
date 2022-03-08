import Speaker from './Speaker';
import classes from './Schedule.module.css';
import modules from './Schedule.module.css';
import { useState, useContext } from "react";

import ScrollContext from '../../store/scroll-context';
import DarkContext from '../../store/DarkMode';

const Schedule = () => {

    const [tab, changeTab] = useState(1);

    const scrollCtx = useContext(ScrollContext);
    const { theme } = useContext(DarkContext);

    const switchTab = (newTab) => {
        changeTab(newTab);
    };

    return (
        <div className={theme.mode === 'dark' ? `${classes['container']} ${classes['container-dark']}` : classes["container"]} ref={scrollCtx.scheduleRef}>
            <h2 className={theme.mode === 'dark' ? `${classes['heading']} ${classes['heading-dark']}` : classes["heading"]}>Schedule</h2>
            <div className={classes["tab_container"]}>
                <div className={theme.mode === 'dark' ? `${classes['tab-block']} ${classes['dark-tab']}` : classes["tab-block"]}>
                    <button
                        className={`${theme.mode === 'dark' ? `${classes["tabs"]} ${classes["dark-tab"]}` : classes["tabs"]} ${tab === 1 ? classes["active-tabs"] : ''}`}
                        onClick={() => switchTab(1)}
                    >
                        <h3>Inaugration Day</h3>
                        {/* <h6>11 March</h6> */}
                    </button>
                    <button
                        className={`${tab === 2 ? `${classes["tabs"]} ${classes["active-tabs"]}` : classes["tabs"]} ${theme.mode === 'dark' ? classes["dark-tab"] : ''}`}
                        onClick={() => switchTab(2)}
                    >
                        <h3>Paper Presentation</h3>
                        {/* <h6>12 March</h6> */}
                    </button>
                    <button
                        className={`${tab === 3 ? `${classes["tabs"]} ${classes["active-tabs"]}` : classes["tabs"]} ${theme.mode === 'dark' ? classes["dark-tab"] : ''}`}
                        onClick={() => switchTab(3)}
                    >
                        <h3>Prize Distribution</h3>
                        {/* <h6>13 March</h6> */}
                    </button>
                </div>

                <div>
                    <div className={tab === 1 ? `${classes["content"]} ${classes["active-content"]}` : classes["content"]}>
                        {/* <div className={theme.mode === 'dark' ? `${classes['table-container']} ${classes['table-container-dark']}` : classes["table-container"]}>
                            <div className={theme.mode === 'dark' ? `${classes["table-heading"]} ${classes["table-heading-dark"]}` : classes["table-heading"]}>
                                <div className={theme.mode === 'dark' ? `${classes['row-cell']} ${classes['row-cell-dark']}` : classes["row-cell"]}>Time</div>
                                <div className={theme.mode === 'dark' ? `${classes['row-cell']} ${classes['row-cell-dark']}` : classes["row-cell"]}>Event</div>
                                <div className={theme.mode === 'dark' ? `${classes['row-cell']} ${classes['row-cell-dark']}` : classes["row-cell"]}>Speakers</div>
                            </div>
                            <div className={classes["row"]}>
                                <div className={theme.mode === 'dark' ? `${classes['row-cell']} ${classes['row-cell-dark']}` : classes["row-cell"]}>9 to 10 am</div>
                                <div className={theme.mode === 'dark' ? `${classes['row-cell']} ${classes['row-cell-dark']}` : classes["row-cell"]}>Inaugration Ceremony</div>
                                <div className={classes['row-cell']}>
                                    <div><Speaker name="Prof. Karabi Das" img="Avatar.png" booth="108" /></div>
                                </div>
                                <div className={theme.mode === 'dark' ? `${classes['row-cell']} ${classes['row-cell-dark']}` : classes["row-cell"]}>
                                    Starting
                                </div>
                            </div>
                            <div className={classes["row"]}>
                                <div className={theme.mode === 'dark' ? `${classes['row-cell']} ${classes['row-cell-dark']}` : classes["row-cell"]}>9 to 11 am</div>
                                <div className={theme.mode === 'dark' ? `${classes['row-cell']} ${classes['row-cell-dark']}` : classes["row-cell"]}>Inaugration Seremoney</div>
                                <div className={classes['row-cell']}>
                                    <div><Speaker name="Jayanta Das" img="Avatar1.png" booth="108" /></div>
                                    <div><Speaker name="Indrani Saha" img="Avatar2.png" booth="108" /></div>
                                    <div><Speaker name="Shiv Brat Singh" img="Avatar3.png" booth="108" /></div>
                                </div>
                                <div className={theme.mode === 'dark' ? `${classes['row-cell']} ${classes['row-cell-dark']}` : classes["row-cell"]}>
                                    Started
                                </div>
                            </div>
                            <div className={classes["row"]}>
                                <div className={theme.mode === 'dark' ? `${classes['row-cell']} ${classes['row-cell-dark']}` : classes["row-cell"]}>9 to 12 am</div>
                                <div className={theme.mode === 'dark' ? `${classes['row-cell']} ${classes['row-cell-dark']}` : classes["row-cell"]}>Inaugration Seremoni</div>
                                <div className={classes['row-cell']}>
                                    <div><Speaker name="Nirupam Chakraborty" img="Avatar4.png" booth="108" /></div>
                                    <div><Speaker name="Tapas Laha" img="Avatar5.png" booth="108" /></div>
                                </div>
                                <div className={theme.mode === 'dark' ? `${classes['row-cell']} ${classes['row-cell-dark']}` : classes["row-cell"]}>
                                    Ended
                                </div>
                            </div>
                            
                        </div> */}
                        <div className={theme.mode === 'dark' ? `${classes['temp-info']} ${classes['temp-info_dark']}` : classes['temp-info']}>
                            <div className={theme.mode === 'dark' ? `${classes['release-soon']} ${classes['release-soon_dark']}` : classes['release-soon']}>
                                Releasing Soon
                            </div>
                        </div>
                    </div>

                    <div className={tab === 2 ? `${classes["content"]} ${classes["active-content"]}` : classes["content"]}>
                        <div className={theme.mode === 'dark' ? `${classes['temp-info']} ${classes['temp-info_dark']}` : classes['temp-info']}>
                            <div className={theme.mode === 'dark' ? `${classes['release-soon']} ${classes['release-soon_dark']}` : classes['release-soon']}>
                                Releasing Soon
                            </div>
                        </div>
                    </div>

                    <div className={tab === 3 ? `${classes["content"]} ${classes["active-content"]}` : classes["content"]}>
                        <div className={theme.mode === 'dark' ? `${classes['temp-info']} ${classes['temp-info_dark']}` : classes['temp-info']}>
                            <div className={theme.mode === 'dark' ? `${classes['release-soon']} ${classes['release-soon_dark']}` : classes['release-soon']}>
                                Releasing Soon
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Schedule;