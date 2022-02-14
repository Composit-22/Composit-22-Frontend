import RegisterForm from "../../components/registerform/RegisterForm";
import classes from "./Register.module.css";
import registerBkg from "./imgs/register-bkg.png";

const Register = () => {
    return (
        <div className={classes["register"]}>
            <RegisterForm />
        </div>
    );
};

export default Register;
