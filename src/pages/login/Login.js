import LoginForm from "../../components/loginform/LoginForm";
import classes from "./Login.module.css";
import { useContext } from "react";

import DarkContext from '../../store/DarkMode';

const Login = () => {
    
    const {theme} = useContext(DarkContext);
    return (
        <div className={classes['container']}>
            <div className={theme.mode==='dark'? `${classes['login']} ${classes['login-dark']}`: classes["login"]}>
            {/* <div className={classes["login"]}> */}
                <div className={classes["molecule_img"]} />
                <LoginForm />
            </div>
        </div>
    );
};

export default Login;
