import classes from "./Speaker.module.css";
import {useContext} from "react";
import DarkContext from '../../store/DarkMode';

const Speaker = (props) => {
    const { theme } = useContext(DarkContext);
    return (
        <div className={classes["speaker"]}>
            <img src={props.img} alt="Speaker-Img"/>
            <div className={theme.mode === 'dark' ? `${classes['info']} ${classes['info-dark']}` : classes["info"]}>
                <span>{props.name}</span>
                <p>Booth: <strong>{props.booth}</strong></p>
            </div>
        </div>
    );
};

export default Speaker;