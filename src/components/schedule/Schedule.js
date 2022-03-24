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
            <div className={classes["tab_container"]}>
                <div className={theme.mode === 'dark' ? `${classes['tab-block']} ${classes['dark-tab']}` : classes["tab-block"]}>
                    <button
                        className={`${theme.mode === 'dark' ? `${classes["tabs"]} ${classes["dark-tab"]}` : classes["tabs"]} ${tab === 1 ? classes["active-tabs"] : ''}`}
                        onClick={() => switchTab(1)}
                    >
                        <h3>Schedule</h3>
                        {/* <h6>26th March 2022 </h6> */}
                    </button>
                    {/* <button
                        className={`${tab === 2 ? `${classes["tabs"]} ${classes["active-tabs"]}` : classes["tabs"]} ${theme.mode === 'dark' ? classes["dark-tab"] : ''}`}
                        onClick={() => switchTab(2)}
                    >
                        <h3>Paper Presentation</h3>
                        <h6>12 March</h6>
                    </button> */}
                    <button
                        className={`${tab === 3 ? `${classes["tabs"]} ${classes["active-tabs"]}` : classes["tabs"]} ${theme.mode === 'dark' ? classes["dark-tab"] : ''}`}
                        onClick={() => switchTab(3)}
                    >
                        <h3>Declaration of Results</h3>
                        {/* <h6>13 March</h6> */}
                    </button>
                </div>

                <div>
                    <div className={tab === 1 ? `${classes["content"]} ${classes["active-content"]}` : classes["content"]}>
                        <div className={theme.mode === 'dark' ? `${classes['table-container']} ${classes['table-container-dark']}` : classes["table-container"]}>
                            <div className={theme.mode === 'dark' ? `${classes["table-heading"]} ${classes["table-heading-dark"]}` : classes["table-heading"]}>
                                <div className={theme.mode === 'dark' ? `${classes['row-cell']} ${classes['row-cell-dark']}` : classes["row-cell"]}>Date and Time</div>
                                <div className={theme.mode === 'dark' ? `${classes['row-cell']} ${classes['row-cell-dark']}` : classes["row-cell"]}>Event</div>
                                <div className={theme.mode === 'dark' ? `${classes['row-cell']} ${classes['row-cell-dark']}` : classes["row-cell"]}>Panel Members</div>
                                <div className={theme.mode === 'dark' ? `${classes['row-cell']} ${classes['row-cell-dark']}` : classes["row-cell"]}>Deadline for submission</div>
                            </div>
                            <div className={classes["row"]}>
                                <div className={theme.mode === 'dark' ? `${classes['row-cell']} ${classes['row-cell-dark']}` : classes["row-cell"]}>26th March<br></br>  5 to 7 pm</div>
                                <div className={theme.mode === 'dark' ? `${classes['row-cell']} ${classes['row-cell-dark']}` : classes["row-cell"]}>Case Study</div>
                                <div className={classes['row-cell']}>
                                    <div><Speaker name="Prof. Sankha Mukharjee" /></div>
                                    <div><Speaker name="Prof. Siddartha Roy" /></div>
                                </div>
                                <div className={theme.mode === 'dark' ? `${classes['row-cell']} ${classes['row-cell-dark']}` : classes["row-cell"]}>
                                    26th March (3:00 PM)
                                </div>
                            </div>
                            <div className={classes["row"]}>
                                <div className={theme.mode === 'dark' ? `${classes['row-cell']} ${classes['row-cell-dark']}` : classes["row-cell"]}>27th March<br></br>9:30 am to 10:30 am</div> 
                                <div className={theme.mode === 'dark' ? `${classes['row-cell']} ${classes['row-cell-dark']}` : classes["row-cell"]}>Tech Talk<br></br>( Ninth Sem )</div>
                                <div className={classes['row-cell']}>
                                    
                                    {/* <div><Speaker name="Prof. Siddhartha Roy"  /></div> */}
                                    {/* <div><Speaker name="Prof. Manas Paliwal" /></div> */}
                                    
                                </div>
                                <div className={theme.mode === 'dark' ? `${classes['row-cell']} ${classes['row-cell-dark']}` : classes["row-cell"]}>
                                    27th March (2 PM)
                                </div>
                            </div>
                            <div className={classes["row"]}>
                                <div className={theme.mode === 'dark' ? `${classes['row-cell']} ${classes['row-cell-dark']}` : classes["row-cell"]}>27th March<br></br>10:30 am to 1:00 pm</div> 
                                <div className={theme.mode === 'dark' ? `${classes['row-cell']} ${classes['row-cell-dark']}` : classes["row-cell"]}>Ideathon<br></br>( Business Plan )</div>
                                <div className={classes['row-cell']}>
                                    <div><Speaker name="Prof. Indrani Sen"  /></div>
                                    <div><Speaker name="Prof. Manas Paliwal" /></div>
                                    
                                </div>
                                <div className={theme.mode === 'dark' ? `${classes['row-cell']} ${classes['row-cell-dark']}` : classes["row-cell"]}>
                                26th March (11:59 PM)
                                </div>
                            </div>
                            <div className={classes["row"]}>
                                <div className={theme.mode === 'dark' ? `${classes['row-cell']} ${classes['row-cell-dark']}` : classes["row-cell"]}>27th March<br></br>1:00 pm to 2:00 pm</div> 
                                <div className={theme.mode === 'dark' ? `${classes['row-cell']} ${classes['row-cell-dark']}` : classes["row-cell"]}>Break for Lunch</div>
                                <div className={classes['row-cell']}>
                                    {/* <div><Speaker name="Prof. Siddhartha Roy"  /></div> */}
                                    {/* <div><Speaker name="Prof. Manas Paliwal" /></div> */}
                                    
                                </div>
                                <div className={theme.mode === 'dark' ? `${classes['row-cell']} ${classes['row-cell-dark']}` : classes["row-cell"]}>
                                </div>
                            </div>
                            {/* <div className={classes["row"]}>
                                <div className={theme.mode === 'dark' ? `${classes['row-cell']} ${classes['row-cell-dark']}` : classes["row-cell"]}>27th March<br></br>2:00 pm to 4:00 pm</div> 
                                <div className={theme.mode === 'dark' ? `${classes['row-cell']} ${classes['row-cell-dark']}` : classes["row-cell"]}>Excavate<br></br>( Data Analytics )</div>
                                <div className={classes['row-cell']}>
                                    
                                    
                                </div>
                                <div className={theme.mode === 'dark' ? `${classes['row-cell']} ${classes['row-cell-dark']}` : classes["row-cell"]}>
                                </div>
                            </div> */}
                            <div className={classes["row"]}>
                                <div className={theme.mode === 'dark' ? `${classes['row-cell']} ${classes['row-cell-dark']}` : classes["row-cell"]}>27th March<br></br>5:00 pm to 6:00 pm</div> 
                                <div className={theme.mode === 'dark' ? `${classes['row-cell']} ${classes['row-cell-dark']}` : classes["row-cell"]}>Prize Distribution</div>
                                <div className={classes['row-cell']}>
                                    {/* <div><Speaker name="Prof. Siddhartha Roy"  /></div> */}
                                    {/* <div><Speaker name="Prof. Manas Paliwal" /></div> */}
                                    
                                </div>
                                <div className={theme.mode === 'dark' ? `${classes['row-cell']} ${classes['row-cell-dark']}` : classes["row-cell"]}>
                                </div>
                            </div>
                     {/* <div className={classes["row"]}>
                                <div className={theme.mode === 'dark' ? `${classes['row-cell']} ${classes['row-cell-dark']}` : classes["row-cell"]}>9 to 12 am</div>
                                <div className={theme.mode === 'dark' ? `${classes['row-cell']} ${classes['row-cell-dark']}` : classes["row-cell"]}>Inaugration Seremoni</div>
                                <div className={classes['row-cell']}>
                                    <div><Speaker name="Nirupam Chakraborty" img="Avatar4.png" booth="108" /></div>
                                    <div><Speaker name="Tapas Laha" img="Avatar5.png" booth="108" /></div>
                                </div>
                                <div className={theme.mode === 'dark' ? `${classes['row-cell']} ${classes['row-cell-dark']}` : classes["row-cell"]}>
                                    Ended
                                </div>
                            </div> */}
                            
                        </div>
                    </div>

                    {/* <div className={tab === 3 ? `${classes["content"]} ${classes["active-content"]}` : classes["content"]}>
                        <div className={theme.mode === 'dark' ? `${classes['temp-info']} ${classes['temp-info_dark']}` : classes['temp-info']}>
                            <div className={theme.mode === 'dark' ? `${classes['release-soon']} ${classes['release-soon_dark']}` : classes['release-soon']}>
                                Releasing Soon
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Schedule;