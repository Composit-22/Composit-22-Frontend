import useInput from "../../hooks/use-input";
import classes from "./LoginForm.module.css";

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@");
const isAge = (value) => {
    const enteredAge = +value;
    return enteredAge > 0 && enteredAge < 100;
};

const LoginForm = () => {
    const {
        value: userName,
        isValid: userNameIsValid,
        hasError: userNameInputHasError,
        valueChangeHandler: userNameChangeHandler,
        inputBlurHandler: userNameInputBlurHandler,
        reset: resetUserName,
    } = useInput(isNotEmpty);

    const {
        value: password,
        isValid: passwordIsValid,
        hasError: passwordInputHasError,
        valueChangeHandler: passwordChangeHandler,
        inputBlurHandler: passwordInputBlurHandler,
        reset: resetPassword,
    } = useInput(isNotEmpty);

    let formIsValid = false;
    if (userNameIsValid && passwordIsValid) formIsValid = true;

    const userNameInputClasses = userNameInputHasError
        ? `${classes["input__field"]} ${classes["input__error"]}`
        : `${classes["input__field"]}`;

    const passwordInputClasses = passwordInputHasError
        ? `${classes["input__field"]} ${classes["input__error"]}`
        : `${classes["input__field"]}`;

    const submitHandler = (event) => {
        event.preventDefault();

        if (!formIsValid) return;

        const data = { userName, password };
        console.log(data);

        resetUserName();
        resetPassword();
    };

    return (
        <>
            <form
                className={`${classes["form"]}`}
                autoComplete="off"
                onSubmit={submitHandler}
            >
                <h1 className={classes["form__title"]}>Login to Composit</h1>
                <div className={`${classes["form__inputs"]}`}>
                    <div className={`${classes["input"]}`}>
                        <label
                            className={`${classes["input__label"]}`}
                            htmlFor="name"
                        >
                            Username
                        </label>
                        <input
                            className={userNameInputClasses}
                            id="name"
                            type="text"
                            value={userName}
                            onChange={userNameChangeHandler}
                            onBlur={userNameInputBlurHandler}
                        />
                        {userNameInputHasError && (
                            <p className={`${classes["input__message"]}`}>
                                Username must not be empty.
                            </p>
                        )}
                    </div>

                    <div className={`${classes["input"]}`}>
                        <label
                            className={`${classes["input__label"]}`}
                            htmlFor="userName"
                        >
                            Password
                        </label>
                        <input
                            className={passwordInputClasses}
                            id="userName"
                            type="text"
                            value={password}
                            onChange={passwordChangeHandler}
                            onBlur={passwordInputBlurHandler}
                        />
                        {passwordInputHasError && (
                            <p className={`${classes["input__message"]}`}>
                                Invalid password.
                            </p>
                        )}
                    </div>
                </div>
                <div className={`${classes["form__btn-group"]}`}>
                    <button
                        className={`${classes["form__btn"]}`}
                        // disabled={!formIsValid}
                    >
                        Login
                    </button>
                </div>
            </form>
        </>
    );
};

export default LoginForm;
