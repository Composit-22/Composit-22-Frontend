import RegisterForm from "../../components/registerform/RegisterForm";
import classes from "./Register.module.css";
import { useContext } from "react";

import DarkContext from '../../store/DarkMode';

const Register = () => {
    const darkCtx = useContext(DarkContext);
    return (
        <div className={classes['container']}>
            <div className={classes['molecule_img']}></div>
            <div className={classes["register"] + (darkCtx.theme.mode === "dark" ? " " + classes["register-dark"] : "")}>
                <RegisterForm />
            </div>
        </div>
    );
};

export default Register;
