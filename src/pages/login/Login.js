import LoginForm from "../../components/loginform/LoginForm";
import classes from "./Login.module.css";
import { useContext } from "react";

import DarkContext from '../../store/DarkMode';

const Login = () => {
    
    const darkCtx = useContext(DarkContext);
    return (
        <div className={classes['container']}>
            <div className={classes['login'] + (darkCtx.theme.mode==='dark' ? " " + classes["login-dark"] : "")}>
                <div className={darkCtx.theme.mode === 'dark' ? classes['molecule_img__dark']: classes['molecule_img']}/>
                <LoginForm />
            </div>
        </div>
    );
};

export default Login;
