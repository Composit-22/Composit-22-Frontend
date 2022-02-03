import classes from "./Speaker.module.css";

const Speaker = (props) => {
    return (
        <div className={classes["speaker"]}>
            <img src={props.img} alt="Speaker-Img"/>
            <div className={classes["info"]}>
                <span>&nbsp;&nbsp;{props.name}</span>
                <p>Booth: <strong>{props.booth}</strong></p>
            </div>
        </div>
    );
};

export default Speaker;