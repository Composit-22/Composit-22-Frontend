import LoginForm from "../../components/loginform/LoginForm";
import classes from "./Login.module.css";

const Login = () => {
    return (
        <div className={classes['container']}>
            <div className={classes["login"]}>
                <div className={classes["molecule_img"]} />
                <LoginForm />
            </div>
        </div>
    );
};

export default Login;
