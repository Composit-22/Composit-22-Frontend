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
        const state = {
            "username": userName,
            "password": password,
        }

        fetch('http://127.0.0.1:8000/signin',{
            method: 'POST',
            body: JSON.stringify(state),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then(response=>response.json())
        .then((data)=>console.log(data))
        .catch((e)=>console.log(e));

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
                            htmlFor="userName"
                        >
                            Username
                        </label>
                        <input
                            className={userNameInputClasses}
                            id="userName"
                            type="text"
                            value={userName}
                            name='username'
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
                            htmlFor="password"
                        >
                            Password
                        </label>
                        <input
                            className={passwordInputClasses}
                            id="password"
                            type="password"
                            value={password}
                            name='password'
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
