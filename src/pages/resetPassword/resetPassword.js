import ResetPwd from "../../components/resetPwd/ResetPwd";
import classes from "./resetPassword.module.css";
import { useContext } from "react";

import DarkContext from '../../store/DarkMode';

const Reset = () => {
    
    const darkCtx = useContext(DarkContext);
    return (
        <div className={classes['container']}>
            <div className={classes['reset'] + (darkCtx.theme.mode==='dark' ? " " + classes["reset-dark"] : "")}>
                <div className={darkCtx.theme.mode === 'dark' ? classes['molecule_img__dark']: classes['molecule_img']}/>
                <ResetPwd />
            </div>
        </div>
    );
};

export default Reset;
