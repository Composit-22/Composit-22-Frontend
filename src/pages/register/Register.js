import RegisterForm from "../../components/registerform/RegisterForm";
import classes from "./Register.module.css";
import { useContext } from "react";

import DarkContext from '../../store/DarkMode';

const Register = () => {
    const {theme} = useContext(DarkContext);
    return (
        <div className={classes['container']}>
            <div className={classes['molecule_img']}></div>
            <div className={theme.mode==='dark'? `${classes['register']} ${classes['register-dark']}`: classes["register"]}>
            {/* <div className={classes["register"]}> */}
                <RegisterForm />
            </div>
        </div>
    );
};

export default Register;
