import TeamCard from "../../components/AboutUs/TeamCard";
import classes from "./OurTeam.module.css";

const OurTeam = () => {
    return (
        <div className={classes["team__container"]}>
            <div className={classes["team"]}>
                <h1 className={classes["team__heading"]}>Web Team</h1>
                <ul className={classes["team__members"]}>
                    <li className={classes["team__member"]}><TeamCard /></li>
                    <li className={classes["team__member"]}><TeamCard /></li>
                    <li className={classes["team__member"]}><TeamCard /></li>
                </ul>
            </div>
            <div className={classes["team"]}>
                <h1 className={classes["team__heading"]}>Graphics Team</h1>
                <ul className={classes["team__members"]}>
                    <li className={classes["team__member"]}><TeamCard /></li>
                    <li className={classes["team__member"]}><TeamCard /></li>
                    <li className={classes["team__member"]}><TeamCard /></li>
                </ul>
            </div>
            <div className={classes["team"]}>
                <h1 className={classes["team__heading"]}>Logistics Team</h1>
                <ul className={classes["team__members"]}>
                    <li className={classes["team__member"]}><TeamCard /></li>
                    <li className={classes["team__member"]}><TeamCard /></li>
                    <li className={classes["team__member"]}><TeamCard /></li>
                </ul>
            </div>
        </div>
    );
};

export default OurTeam;