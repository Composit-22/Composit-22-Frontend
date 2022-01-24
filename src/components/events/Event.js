import classes from "./Event.module.css";
import cardImg from "./event-bkg.jpg";
import Button from "../UI/Button";

const Event = (props) => {
    const styles = props.isRed === "1" ? classes["card1"] : classes["card"];
    return (
        <div className={styles}>
            <h2 className={classes["card-quote"]}>{`"${props.quote}"`}</h2>
            <h1 className={classes["card-title"]}>Metaclix</h1>
            <div className={classes["card-desc"]}>
                <div className={classes["card-desc__frag"]}>When</div>
                <div className={classes["card-desc__frag"]}>Where</div>
                <div className={classes["img-container"]}>
                    <img src={cardImg} alt="card-img" className={classes["card-img"]}/>
                </div>
            </div>
            <div className={classes["card-btn__group"]}>
                <Button className={classes["card-btn"]}>Resgister</Button>
                <Button className={classes["card-btn"]}>Know More</Button>
            </div>
            <svg viewBox="0 0 1 1">
                <defs>
                    <clipPath clipPathUnits="objectBoundingBox" id="deermask">
                        <path
                            d="M303.49,371.1l-.2-.511a.145.145,0,0,0-.188-.082l-.511.2a.145.145,0,0,0-.082.188l.2.511a.145.145,0,0,0,.188.082l.511-.2A.145.145,0,0,0,303.49,371.1Zm-.547.166a.079.079,0,0,1-.1-.045l-.109-.281a.079.079,0,0,1,.045-.1l.281-.109a.079.079,0,0,1,.1.045l.109.281a.079.079,0,0,1-.045.1Z"
                            transform="translate(-302.5 -370.5)"
                            fill="#fff"
                        />
                    </clipPath>
                </defs>
            </svg>
        </div>
    );
};

export default Event;
