import classes from "./Welcome.module.css";
import Button from "../UI/Button";

const Welcome = () => {
    return (
       <section className={classes["welcome"]}>
            <h2 className={classes["heading-medium"]}>IIT Kharagpur</h2>
            <h3 className={classes["heading-small"]}>Presents 27th Edition of</h3>
            <h1 className={classes["heading-large"]}>Composit</h1>
            <div className={classes["welcome-btn__group"]}>
                <Button className={`${classes["welcome-btn"]} ${classes["welcome-btn__left"]}`}>Get Started</Button>
                <Button className={`${classes["welcome-btn"]} ${classes["welcome-btn__right"]}`}>Event Promo</Button>
            </div>
       </section> 
    )
};

export default Welcome;