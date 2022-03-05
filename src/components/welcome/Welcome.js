import classes from "./Welcome.module.css";
import Button from "../UI/Button";
import {useContext} from "react";


import molekule from "./imgs/molekule.png";
import DarkContext from '../../store/DarkMode';

const Welcome = () => {

    const {theme} = useContext(DarkContext);

    return (
       <section className={theme.mode==='dark'? `${classes['welcome']} ${classes['welcome-dark']}`: classes["welcome"]}> 
            {/* className={classes["welcome"]}> */}
            <h2 className={theme.mode==='dark'? `${classes['heading-medium']} ${classes['heading-medium-dark']}`: classes["heading-medium"]}>
                {/* className={classes["heading-medium"]}> */}
                IIT Kharagpur</h2>
            <h3 className={theme.mode==='dark'? `${classes['heading-small']} ${classes['heading-small-dark']}`: classes["heading-small"]}>
                {/* className={classes["heading-small"]}> */}
                Presents 27th Edition of</h3>
            <h1 className={theme.mode==='dark'? `${classes['heading-large']} ${classes['heading-large-dark']}`: classes["heading-large"]}>
                {/* className={classes["heading-large"]}> */}
                Composit</h1>
            <div className={classes["welcome-btn__group"]}>
                {/* <Button className={theme.mode==='dark'? `${classes['welcome-btn']} ${classes['welcome-btn__left-dark']}` : `${classes['welcome-btn']} ${classes['welcome-btn__left']}`> */}
                <Button className={`${classes["welcome-btn"]} ${classes["welcome-btn__left"]}`}>Get Started</Button>
                <Button className={`${classes["welcome-btn"]} ${classes["welcome-btn__right"]}`}>Event Promo</Button>
                {/* <img src={molekule} alt="molekule" className={classes["molekule"]} /> */}
            </div>
       </section> 
    )
};

export default Welcome;