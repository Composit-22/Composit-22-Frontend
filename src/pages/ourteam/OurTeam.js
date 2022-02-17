import TeamCard from "../../components/AboutUs/TeamCard";
import classes from "./OurTeam.module.css";
import { useContext } from "react";

import DarkContext from '../../store/DarkMode';

const OurTeam = () => {
    const {theme} = useContext(DarkContext);
    return (
        <div className={theme.mode==='dark'? `${classes['team__container']} ${classes['team__container-dark']}`: classes["team__container"]}>
        {/* <div className={classes["team__container"]}> */}
            <div className={classes["team"]}>
                <h1 className={theme.mode==='dark'? `${classes['team__heading']} ${classes['team__heading-dark']}`: classes["team__heading"]}>
                {/* <h1 className={classes["team__heading"]}>*/}Web Team</h1> 
                <ul className={theme.mode==='dark'? `${classes['team__members']} ${classes['team__members-dark']}`: classes["team__members"]}>
                {/* <ul className={classes["team__members"]}> */}
                    <li className={classes["team__member"]}><TeamCard /></li>
                    <li className={classes["team__member"]}><TeamCard /></li>
                    <li className={classes["team__member"]}><TeamCard /></li>
                </ul>
            </div>
            <div className={classes["team"]}>
            <h1 className={theme.mode==='dark'? `${classes['team__heading']} ${classes['team__heading-dark']}`: classes["team__heading"]}>
                {/* <h1 className={classes["team__heading"]}>*/}Graphics Team</h1>
                <ul className={theme.mode==='dark'? `${classes['team__members']} ${classes['team__members-dark']}`: classes["team__members"]}>
                {/* <ul className={classes["team__members"]}> */}
                    <li className={classes["team__member"]}><TeamCard /></li>
                    <li className={classes["team__member"]}><TeamCard /></li>
                    <li className={classes["team__member"]}><TeamCard /></li>
                </ul>
            </div>
            <div className={classes["team"]}>
            <h1 className={theme.mode==='dark'? `${classes['team__heading']} ${classes['team__heading-dark']}`: classes["team__heading"]}>
                {/* <h1 className={classes["team__heading"]}>*/}Logistics Team</h1>
            <ul className={theme.mode==='dark'? `${classes['team__members']} ${classes['team__members-dark']}`: classes["team__members"]}>
                {/* <ul className={classes["team__members"]}> */}
                    <li className={classes["team__member"]}><TeamCard /></li>
                    <li className={classes["team__member"]}><TeamCard /></li>
                    <li className={classes["team__member"]}><TeamCard /></li>
                </ul>
            </div>
        </div>
    );
};

export default OurTeam;