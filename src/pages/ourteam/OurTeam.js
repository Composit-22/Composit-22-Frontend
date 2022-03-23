import TeamCard from "../../components/AboutUs/TeamCard";
import classes from "./OurTeam.module.css";
import { useContext } from "react";

import DarkContext from "../../store/DarkMode";
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
import kbImg from "./imgs/SubHeads/Karabi.jpg";
import umImg from "./imgs/SubHeads/um.jpg";
import rrmImg from "./imgs/SubHeads/rrm.png";
import asImg from "./imgs/SubHeads/Ananay Singh.jpg";
import prImg from "./imgs/SubHeads/Priya.jpeg";
import aaImg from "./imgs/SubHeads/Abhyuday.jpg";
import lhpImg from "./imgs/SubHeads/lhp.jpg";

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
                            linkedIn = "manas.paliwal@metal.iitkgp.ac.in"
                        />
                    </li>
                    <li className={classes["team__member"]}>
                        <TeamCard
                            name="Prof. Siddhartha Roy"
                            designation="Professor"
                            img={srImg}
                            linkedIn = "siddhartha@metal.iitkgp.ac.in"
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
                            linkedIn = "https://www.linkedin.com/in/harsh-vardhan-dubey-0a36b8182"
                        />
                    </li>
                    <li className={classes["team__member"]}>
                        <TeamCard
                            name="Pranav Krishnan"
                            designation="Coordinator"
                            img={pkImg}
                            linkedIn = "https://www.linkedin.com/in/pranav-krishnan-97080a160"
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
                            linkedIn = "https://www.linkedin.com/in/abhishek-roy-0bb427132"
                        />
                    </li>
                    <li className={classes["team__member"]}>
                        <TeamCard
                            name="Maitreyo Biswas"
                            designation="Events Head"
                            img={mbImg}
                            linkedIn = "https://www.linkedin.com/in/maitreyo-biswas-949b1b216"
                        />
                    </li>
                    <li className={classes["team__member"]}>
                        <TeamCard
                            name="Abhishek Kumar"
                            designation="Graphics Head"
                            img={akImg}
                            linkedIn = ""
                        />
                    </li>
                    <li className={classes["team__member"]}>
                        <TeamCard
                            name="Ananya Mahato"
                            designation="Web Head"
                            img={amImg}
                            linkedIn = "https://www.linkedin.com/in/ananyaiit123"
                        />
                    </li>
                    <li className={classes["team__member"]}>
                        <TeamCard
                            name="Gouri Vignesh Jawalkar"
                            designation="Publicity Head"
                            img={gvjImg}
                            linkedIn = "https://www.linkedin.com/in/gouri-vignesh-jawalkar-626258200"
                        />
                    </li>
                    <li className={classes["team__member"]}>
                        <TeamCard
                            name="Riyan Biswas"
                            designation="Publicity Head"
                            img={rbImg}
                            linkedIn = "https://www.linkedin.com/in/riyan-biswas-4178981bb"
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
                    Sub Heads
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
                            name="Karabi"
                            designation="Events Sub Head"
                            img={kbImg}
                            linkedIn="https://www.linkedin.com/in/karabisaha/"
                        />
                    </li>
                    <li className={classes["team__member"]}>
                        <TeamCard
                            name="Priya"
                            designation="Events Sub Head"
                            img={prImg}
                            linkedIn="https://www.linkedin.com/in/priya-kumari-6554aa226/"
                        />
                    </li>
                    <li className={classes["team__member"]}>
                        <TeamCard
                            name="Abhyuday Agrawal"
                            designation="Events Sub Head"
                            img={aaImg}
                            linkedIn="https://www.linkedin.com/in/abhyuday-agrawal-8b0b7b211/"
                        />
                    </li>
                    <li className={classes["team__member"]}>
                        <TeamCard
                            name="Lalam Prasad"
                            designation="Publicity Sub Head"
                            img={lhpImg}
                            linkedIn="https://www.linkedin.com/in/lalam-hari-prasad-b93820217/"
                        />
                    </li>
                    <li className={classes["team__member"]}>
                        <TeamCard
                            name="Ritwik Ranjan Mallik"
                            designation="Web Sub Head"
                            img={rrmImg}
                            linkedIn="https://www.linkedin.com/in/ritwik-mallik-894ba8187"
                        />
                    </li>
                    <li className={classes["team__member"]}>
                        <TeamCard
                            name="Ananay Singh"
                            designation="Publicity Sub Head"
                            img={asImg}
                            linkedIn="https://www.linkedin.com/in/ananay-singh-120666211/"
                        />
                    </li>
                    <li className={classes["team__member"]}>
                        <TeamCard
                            name="Utsav Mehta"
                            designation="Web Sub Head"
                            img={umImg}
                            linkedIn="https://www.linkedin.com/in/utsav-mehta-7957aa205"
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
