import classes from "./Sponsor.module.css";
import Button from "../UI/Button";
import jsw from "./img/jsw.svg";
import dominos from "./img/dominos.svg";
import hindalco from "./img/hindalco.jpeg";
import mycaptain from "./img/mycaptain.svg";
import collegeBol from "./img/collegeBol.svg";
import coupanswala from "./img/CWlogo.svg";
import ninthsem from "./img/ninthsem.png";
import { useContext } from "react";

import DarkContext from '../../store/DarkMode';

const Sponsor = () => {
    
    const {theme} = useContext(DarkContext);
    return (
        <div className={classes["sponsor"]}>
            <h1 className={theme.mode==='dark'? `${classes['sponsor-heading']} ${classes['sponsor-heading-dark']}`: classes["sponsor-heading"]}
                //  className={classes["sponsor-heading"]}
                 >Our Sponsors</h1>
            <div className={classes["sponsor-group"]}>
                <img src={jsw} alt="Jsw" className={classes["sponsor-logo"]} />
                <img src={dominos} alt="Dominos" className={classes["sponsor-logo"]} />
                <img src={hindalco} alt="Birla copper" className={classes["sponsor-logo"]} />
                <img src={mycaptain} alt="Mycaptain" className={classes["sponsor-logo"]} />
                <img src={collegeBol} alt="CollegeBol" className={classes["sponsor-logo"]} />
                <img src={coupanswala} alt="Coupanswala" className={classes["sponsor-logo"]} />
                <img src={ninthsem} alt="Ninthsem" className={classes["sponsor-logo"]} />
            </div>
            {/* <Button className={theme.mode==='dark'? `${classes['btn-sponsor']} ${classes['btn-sponsor-dark']}`: classes["btn-sponsor"]}>
            <Button className={classes["btn-sponsor"]}>
                Become a Sponsor</Button> */}
        </div>
    );
};

export default Sponsor;