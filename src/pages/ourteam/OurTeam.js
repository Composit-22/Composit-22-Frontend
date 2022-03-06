import TeamCard from "../../components/AboutUs/TeamCard";
import classes from "./OurTeam.module.css";
import { useContext } from "react";

import DarkContext from "../../store/DarkMode";

import gvjImg from "./imgs/gvj.jpeg";
import asImg from "./imgs/as.jpg";
import mbImg from "./imgs/mb.jpg";
import rrmImg from "./imgs/rrm.png";
import umImg from "./imgs/um.jpg";

const OurTeam = () => {
    const { theme } = useContext(DarkContext);
    return (
        <div
            className={
                theme.mode === "dark"
                    ? `${classes["team__container"]} ${classes["team__container-dark"]}`
                    : classes["team__container"]
            }
        >
            <div className={classes["team"]}>
                <h1
                    className={
                        theme.mode === "dark"
                            ? `${classes["team__heading"]} ${classes["team__heading-dark"]}`
                            : classes["team__heading"]
                    }
                >
                    Publicity Team
                </h1>
                <ul
                    className={
                        theme.mode === "dark"
                            ? `${classes["team__members"]} ${classes["team__members-dark"]}`
                            : classes["team__members"]
                    }
                >
                    <li className={classes["team__member"]}>
                        <TeamCard name="Gauri Vignesh Jawalkar" designation="Publicity Head" img={gvjImg} />
                    </li>
                    <li className={classes["team__member"]}>
                        <TeamCard name="Ananay Singh" designation="Publicity Sub Head" img={asImg}/>
                    </li>
                </ul>
            </div>
            <div className={classes["team"]}>
                <h1
                    className={
                        theme.mode === "dark"
                            ? `${classes["team__heading"]} ${classes["team__heading-dark"]}`
                            : classes["team__heading"]
                    }
                >
                    Events Team
                </h1>
                <ul
                    className={
                        theme.mode === "dark"
                            ? `${classes["team__members"]} ${classes["team__members-dark"]}`
                            : classes["team__members"]
                    }
                >
                    <li className={classes["team__member"]}>
                        <TeamCard name="Maitreyo Biswas" designation="Event Sub Head" img={mbImg}/>
                    </li>
                </ul>
            </div>
            <div className={classes["team"]}>
                <h1
                    className={
                        theme.mode === "dark"
                            ? `${classes["team__heading"]} ${classes["team__heading-dark"]}`
                            : classes["team__heading"]
                    }
                >
                    Web Team
                </h1>
                <ul
                    className={
                        theme.mode === "dark"
                            ? `${classes["team__members"]} ${classes["team__members-dark"]}`
                            : classes["team__members"]
                    }
                >
                    <li className={classes["team__member"]}>
                        <TeamCard name="Ritwik Ranjan Mallik" designation="Web Sub Head" img={rrmImg} />
                    </li>
                    <li className={classes["team__member"]}>
                        <TeamCard name="Utsav Mehta" designation="Web Sub Head" img={umImg} />
                    </li>
                </ul>
            </div>
            {/* <div className={classes["team"]}>
                <h1
                    className={
                        theme.mode === "dark"
                            ? `${classes["team__heading"]} ${classes["team__heading-dark"]}`
                            : classes["team__heading"]
                    }
                >
                    Graphics Team
                </h1>
                <ul
                    className={
                        theme.mode === "dark"
                            ? `${classes["team__members"]} ${classes["team__members-dark"]}`
                            : classes["team__members"]
                    }
                >
                    <li className={classes["team__member"]}>
                        <TeamCard />
                    </li>
                </ul>
            </div> */}
        </div>
    );
};

export default OurTeam;
