import useInput from "../../hooks/use-input";
import classes from "./LoginForm.module.css";
import { useState, useContext, useCallback } from "react";

import DarkContext from "../../store/DarkMode";
import { useHistory } from "react-router-dom";
import UserContext from "../../store/user-context";

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@");
const isAge = (value) => {
    const enteredAge = +value;
    return enteredAge > 0 && enteredAge < 100;
};

const LoginForm = () => {

    const darkCtx = useContext(DarkContext);
    const userCtx = useContext(UserContext);

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

    const [userNameExists, setUserNameExists] = useState(true);
    const [passwordIsCorrect, setPasswordIsCorrect] = useState(true);
    const [isLoggingIn, setIsLogginIn] = useState(false);

    let formIsValid = false;
    if (userNameIsValid && passwordIsValid) formIsValid = true;

    const normalClasses =
        classes["input__field"] +
        (darkCtx.theme.mode === "dark"
            ? " " + classes["input__field__dark"]
            : "");
    const errorClasses = `${normalClasses} ${classes["input__error"]}`;

    const userNameInputClasses =
        userNameInputHasError || !userNameExists ? errorClasses : normalClasses;

    const passwordInputClasses =
        passwordInputHasError || !passwordIsCorrect
            ? errorClasses
            : normalClasses;

    const masterUserNameChangeHandler = (event) => {
        userNameChangeHandler(event);
        setUserNameExists(true);
    };

    const masterPasswordChangeHandler = (event) => {
        passwordChangeHandler(event);
        setPasswordIsCorrect(true);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        if (!formIsValid) return;

        const data = { userName, password };
        console.log(data);
        const state = {
            username: userName,
            password: password,
        };

        setIsLogginIn(true);

        fetch("https://composit-api.herokuapp.com/signin", {
            method: "POST",
            body: JSON.stringify(state),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.userRegistered === "true") {
                    setUserNameExists(true);
                    userCtx.onLogin(data);
                    resetUserName();
                    resetPassword();
                } else {
                    setUserNameExists(false);
                }
                setIsLogginIn(false);
            })
            .catch((e) => console.log(e));
    };

    return (
        <>
            {isLoggingIn ? <h1>Logging in...</h1> : <form
                className={`${classes["form"]}`}
                autoComplete="off"
                onSubmit={submitHandler}
            >
                <h1
                    className={
                        darkCtx.theme.mode === "dark"
                            ? `${classes["form__title"]} ${classes["form__title-dark"]}`
                            : classes["form__title"]
                    }
                >
                    {/* <h1 className={classes["form__title"]}>*/}Login to
                    Composit
                </h1>
                <div className={`${classes["form__inputs"]}`}>
                    <div
                        className={
                            darkCtx.theme.mode === "dark"
                                ? `${classes["input"]} ${classes["input-dark"]}`
                                : classes["input"]
                        }
                    >
                        {/* <div className={`${classes["input"]}`}> */}
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
                            name="username"
                            onChange={masterUserNameChangeHandler}
                            onBlur={userNameInputBlurHandler}
                        />
                        {(userNameInputHasError || !userNameExists) && (
                            <p className={`${classes["input__message"]}`}>
                                {userNameExists
                                    ? "Username must not be empty."
                                    : "Username does not exist."}
                            </p>
                        )}
                    </div>

                    <div
                        className={
                            darkCtx.theme.mode === "dark"
                                ? `${classes["input"]} ${classes["input-dark"]}`
                                : classes["input"]
                        }
                    >
                        {/* <div className={`${classes["input"]}`}> */}
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
                            name="password"
                            onChange={masterPasswordChangeHandler}
                            onBlur={passwordInputBlurHandler}
                        />
                        {(passwordInputHasError || !passwordIsCorrect) && (
                            <p className={`${classes["input__message"]}`}>
                                {passwordIsCorrect
                                    ? "Password cannot be empty."
                                    : "Incorrect Password."}
                                ;
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
            </form>}
        </>
    );
};

export default LoginForm;
