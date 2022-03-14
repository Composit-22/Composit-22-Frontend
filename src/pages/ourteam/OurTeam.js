import TeamCard from "../../components/AboutUs/TeamCard";
import classes from "./OurTeam.module.css";
import { useContext } from "react";

import DarkContext from "../../store/DarkMode";

// import gvjImg from "./imgs/gvj.jpeg";
// import asImg from "./imgs/as.jpg";
// import mbImg from "./imgs/mb.jpg";
// import rrmImg from "./imgs/rrm.png";
// import umImg from "./imgs/um.jpg";

import akImg from "./imgs/Heads/ak.png";
import amImg from "./imgs/Heads/am.jpg";
import arImg from "./imgs/Heads/ar.jpg";
import gvjImg from "./imgs/Heads/gvj.jpeg";
import mbImg from "./imgs/Heads/mb.jpg";
import hvdImg from "./imgs/Heads/hvd.jpg";
import pkImg from "./imgs/Heads/pk.jpg";
import rbImg from "./imgs/Heads/rb.jpg";
import mpImg from "./imgs/Heads/mp.jpg";
import srImg from "./imgs/Heads/sr.jpg";

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
                    Professors in Charge
                </h1>
                <ul
                    className={
                        theme.mode === "dark"
                            ? `${classes["team__members"]} ${classes["team__members-dark"]}`
                            : classes["team__members"]
                    }
                >
                    <li className={classes["team__member"]}>
                        <TeamCard
                            name="Prof. Manas Paliwal"
                            designation="Professor"
                            img={mpImg}
                        />
                    </li>
                    <li className={classes["team__member"]}>
                        <TeamCard
                            name="Prof. Siddhartha Roy"
                            designation="Professor"
                            img={srImg}
                        />
                    </li>
                </ul>
                <h1
                    className={
                        theme.mode === "dark"
                            ? `${classes["team__heading"]} ${classes["team__heading-dark"]}`
                            : classes["team__heading"]
                    }
                >
                    Coordinators
                </h1>
                <ul
                    className={
                        theme.mode === "dark"
                            ? `${classes["team__members"]} ${classes["team__members-dark"]}`
                            : classes["team__members"]
                    }
                >
                    <li className={classes["team__member"]}>
                        <TeamCard
                            name="Harsh Vardhan Dubey"
                            designation="Coordinator"
                            img={hvdImg}
                        />
                    </li>
                    <li className={classes["team__member"]}>
                        <TeamCard
                            name="Pranav Krishnan"
                            designation="Coordinator"
                            img={pkImg}
                        />
                    </li>
                </ul>
                <h1
                    className={
                        theme.mode === "dark"
                            ? `${classes["team__heading"]} ${classes["team__heading-dark"]}`
                            : classes["team__heading"]
                    }
                >
                    Heads
                </h1>
                <ul
                    className={
                        theme.mode === "dark"
                            ? `${classes["team__members"]} ${classes["team__members-dark"]}`
                            : classes["team__members"]
                    }
                >
                    <li className={classes["team__member"]}>
                        <TeamCard
                            name="Abhishek Roy"
                            designation="Events Head"
                            img={arImg}
                        />
                    </li>
                    <li className={classes["team__member"]}>
                        <TeamCard
                            name="Maitreyo Biswas"
                            designation="Events Head"
                            img={mbImg}
                        />
                    </li>
                    <li className={classes["team__member"]}>
                        <TeamCard
                            name="Abhishek Kumar"
                            designation="Graphics Head"
                            img={akImg}
                        />
                    </li>
                    <li className={classes["team__member"]}>
                        <TeamCard
                            name="Ananya Mahato"
                            designation="Web Head"
                            img={amImg}
                        />
                    </li>
                    <li className={classes["team__member"]}>
                        <TeamCard
                            name="Gauri Vignesh Jawalkar"
                            designation="Publicity Head"
                            img={gvjImg}
                        />
                    </li>
                    <li className={classes["team__member"]}>
                        <TeamCard
                            name="Riyan Biswas"
                            designation="Publicity Head"
                            img={rbImg}
                        />
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
                        <TeamCard
                            name="Maitreyo Biswas"
                            designation="Event Sub Head"
                            img={mbImg}
                        />
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
                        <TeamCard
                            name="Ritwik Ranjan Mallik"
                            designation="Web Sub Head"
                            img={rrmImg}
                        />
                    </li>
                    <li className={classes["team__member"]}>
                        <TeamCard
                            name="Utsav Mehta"
                            designation="Web Sub Head"
                            img={umImg}
                        />
                    </li>
                </ul>
            </div> */}
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
