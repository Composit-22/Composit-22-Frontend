import RegisterForm from "../../components/registerform/RegisterForm";
import classes from "./Register.module.css";

const Register = () => {
    return (
        <div className={classes['container']}>
            <div className={classes['molecule_img']}></div>
            <div className={classes["register"]}>
                <RegisterForm />
            </div>
        </div>
    );
};

export default Register;
