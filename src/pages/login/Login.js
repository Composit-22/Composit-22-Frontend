import LoginForm from "../../components/loginform/LoginForm";
import classes from "./Login.module.css";
import { useContext } from "react";

import DarkContext from '../../store/DarkMode';

const Login = () => {
    
    const darkCtx = useContext(DarkContext);
    return (
        <div className={classes['container']}>
            <div className={classes['login'] + (darkCtx.theme.mode==='dark' ? " " + classes["login-dark"] : "")}>
            {/* <div className={classes["login"]}> */}
                <div className={classes["molecule_img"] + (darkCtx.theme.mode === "dark" ? " " + classes["molecule_img__dark"] : "")} />
                <LoginForm />
            </div>
        </div>
    );
};

export default Login;
