import classes from "./About.module.css";
// import ScrollContext from "../../store/scroll-context";
import DarkContext from "../../store/DarkMode";
import { useContext } from "react";

const About = () => {
    // const scrollCtx = useContext(ScrollContext);
    const { theme } = useContext(DarkContext);
    return (
        <div className={classes["container"]}>
            <div
                className={
                    theme.mode === "dark"
                        ? `${classes["bkg"]} ${classes["bkg-dark"]}`
                        : classes["bkg"]
                }
            >
                {/* <div className={classes["bkg"]}> */}
                <div className={classes["left_img"]} />
                <div
                    className={
                        theme.mode === "dark"
                            ? `${classes["content"]} ${classes["content-dark"]}`
                            : classes["content"]
                    }
                >
                    {/* <div className={classes["content"]}> */}
                    <h2>COMPOSIT ’22</h2>

                    <p>
                        <br />
                        The Society of Metallurgical Engineers (SME), IIT
                        Kharagpur is the official departmental society of the
                        Department of Metallurgical and Materials Engineering,
                        IIT Kharagpur, SME strives to ensure the betterment of
                        the UG, PG, and RS community of MME students by working
                        on 3 fronts: Research, Academics, and Welfare. SME aims
                        to promote Materials Science research among each of the
                        student communities while enabling collaboration and
                        ideation. SME also works to facilitate MSE research
                        among the UG.
                        <br />
                        <br />
                        The Society of Metallurgical Engineers, IIT Kharagpur is
                        the conducting body of the annual departmental fest,
                        COMPOSIT, to promote the field of Materials Science in
                        India by providing a platform for students to showcase
                        their research work, thinking abilities, and reasoning
                        aptitude. The largest fest in the genre all over India,
                        it is a unique congregation of students, professionals,
                        academicians, and eminent personalities sharing the
                        belief that materials will define the next revolution; a
                        path-breaking concept to compile and share knowledge and
                        enthusiasm for the development of ‘Science of
                        Materials’.
                        <br />
                        <br />
                        Congress of Metallurgical Professionals involving
                        Students, Industry and Teachers (COMPOSIT) is a national
                        meet conducted by the Society of Metallurgical Engineers
                        (SME), Department of Metallurgical and Materials
                        Engineering, Indian Institute of Technology Kharagpur.
                        The idea of COMPOSIT was conceived in 1994 to provide a
                        common platform for fostering interactions and invoking
                        innovations among those involved in the field of
                        Metallurgical and Materials Engineering. At COMPOSIT we
                        aim to encourage the young and enthusiastic
                        metallurgists from all over the country to showcase
                        their talent. It also gives them an opportunity of a
                        lifetime to interact with the stalwarts in the field who
                        share their expertise. After being stagnant for two
                        consecutive years COMPOSIT'22 is back with a bang.
                        <br />
                        <br />
                        IIT Kharagpur is all set to witness yet another edition
                        of COMPOSIT which guarantees all its trademark features
                        and events.
                    </p>
                </div>
                <div className={classes["right_img"]} />
            </div>
        </div>
    );
};

export default About;
