import useInput from "../../hooks/use-input";
import classes from "./RegisterForm.module.css";
import { useContext } from "react";

import DarkContext from "../../store/DarkMode";

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@");
const isAge = (value) => {
    const enteredAge = +value;
    return enteredAge > 0 && enteredAge < 100;
};

const RegisterForm = () => {
    const darkCtx = useContext(DarkContext);
    const {
        value: name,
        isValid: nameIsValid,
        hasError: nameInputHasError,
        valueChangeHandler: nameChangeHandler,
        inputBlurHandler: nameInputBlurHandler,
        reset: resetName,
    } = useInput(isNotEmpty);

    const {
        value: userName,
        isValid: userNameIsValid,
        hasError: userNameInputHasError,
        valueChangeHandler: userNameChangeHandler,
        inputBlurHandler: userNameInputBlurHandler,
        reset: resetUserName,
    } = useInput(isNotEmpty);

    const {
        value: number,
        isValid: numberIsValid,
        hasError: numberInputHasError,
        valueChangeHandler: numberChangeHandler,
        inputBlurHandler: numberInputBlurHandler,
        reset: resetNumber,
    } = useInput(isNotEmpty);

    const {
        value: email,
        isValid: emailIsValid,
        hasError: emailInputHasError,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailInputBlurHandler,
        reset: resetEmail,
    } = useInput(isEmail);

    const {
        value: collegeName,
        isValid: collegeNameIsValid,
        hasError: collegeNameInputHasError,
        valueChangeHandler: collegeNameChangeHandler,
        inputBlurHandler: collegeNameInputBlurHandler,
        reset: resetCollegeName,
    } = useInput(isNotEmpty);

    const {
        value: password,
        isValid: passwordIsValid,
        hasError: passwordInputHasError,
        valueChangeHandler: primaryPasswordChangeHandler,
        inputBlurHandler: passwordInputBlurHandler,
        reset: resetPassword,
    } = useInput(isNotEmpty);

    const isConfirmPasswordValid = (value) => {
        return value === password;
    };

    const {
        value: confirmPassword,
        isValid: confirmPasswordIsValid,
        hasError: confirmPasswordInputHasError,
        valueChangeHandler: confirmPasswordChangeHandler,
        inputBlurHandler: confirmPasswordInputBlurHandler,
        reset: resetConfirmPassword,
    } = useInput(isConfirmPasswordValid);

    const passwordChangeHandler = (event) => {
        primaryPasswordChangeHandler(event);
        resetConfirmPassword();
    };

    let formIsValid = false;
    if (
        nameIsValid &&
        userNameIsValid &&
        numberIsValid &&
        emailIsValid &&
        collegeNameIsValid &&
        passwordIsValid &&
        confirmPasswordIsValid
    )
        formIsValid = true;

    const normalClasses =
        classes["input__field"] +
        (darkCtx.theme.mode === "dark"
            ? " " + classes["input__field__dark"]
            : "");
    const errorClasses = `${normalClasses} ${classes["input__error"]}`;

    const nameInputClasses = nameInputHasError ? errorClasses : normalClasses;

    const userNameInputClasses = userNameInputHasError
        ? errorClasses
        : normalClasses;

    const numberInputClasses = numberInputHasError
        ? errorClasses
        : normalClasses;

    const emailInputClasses = emailInputHasError ? errorClasses : normalClasses;

    const collegeNameInputClasses = collegeNameInputHasError
        ? errorClasses
        : normalClasses;

    const passwordInputClasses = passwordInputHasError
        ? errorClasses
        : normalClasses;

    const confirmPasswordInputClasses = confirmPasswordInputHasError
        ? errorClasses
        : normalClasses;

    const optionInputClasses = darkCtx.theme.mode === "dark" ? classes["option__dark"] : "";

    const submitHandler = (event) => {
        event.preventDefault();

        if (!formIsValid) return;

        const data = { name, userName, email, collegeName, password };
        console.log(data);
        const state = {
            username: userName,
            name: name,
            email: email,
            collegeName: "collegeName",
            password: password,
            number: number,
            events_registered: "",
        };


        fetch('https://composit-api.herokuapp.com/signup',{
            method: 'POST',
            body: JSON.stringify(state),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                'Accept': 'application/json',
            },
        })
        .then(response=>response.json())
        .then((data)=>console.log(data))
        .catch((e) => console.log(e));
        // fetch(
        //     "http://composit-test.eba-mwzbzgpt.us-west-2.elasticbeanstalk.com/signup",
        //     {
        //         method: "POST",
        //         body: JSON.stringify(state),
        //         headers: {
        //             "Content-type": "application/json; charset=UTF-8",
        //             Accept: "application/json",
        //         },
        //     }
        // )
        //     .then((response) => response.json())
        //     .then((data) => console.log(data))
        //     .catch((e) => console.log(e));

        // fetch('http://127.0.0.1:8000/signup', {
        //     method: 'POST',
        //     body: JSON.stringify(state),
        //     headers: {
        //         'Content-type': 'application/json; charset=UTF-8',
        //         'Accept': 'application/json',
        //     },
        // })
        // .then(response=>response.json())
        // .then((data)=>console.log(data))
        // .catch((e) => console.log(e));

        // resetName();
        // resetUserName();
        // resetNumber();
        // resetEmail();
        // resetCollegeName();
        // resetPassword();
        // resetConfirmPassword();
>>>>>>> e9d27b50eba2f5afaf4df40f90064313ed8b2049
    };

    return (
        <>
            <form
                className={`${classes["form"]}`}
                autoComplete="off"
                onSubmit={submitHandler}
                action=""
            >
                <h1
                    className={
                        darkCtx.theme.mode === "dark"
                            ? `${classes["form__title"]} ${classes["form__title-dark"]}`
                            : classes["form__title"]
                    }
                >
                    {/* <h1 className={classes["form__title"]}>*/}Register to
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
                            htmlFor="name"
                        >
                            Name
                        </label>
                        <input
                            className={nameInputClasses}
                            id="name"
                            type="text"
                            value={name}
                            onChange={nameChangeHandler}
                            onBlur={nameInputBlurHandler}
                        />
                        {nameInputHasError && (
                            <p className={`${classes["input__message"]}`}>
                                Name must not be empty.
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
                            htmlFor="userName"
                        >
                            Create username
                        </label>
                        <input
                            className={userNameInputClasses}
                            id="userName"
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
                            htmlFor="number"
                        >
                            Enter Contact Number
                        </label>
                        <input
                            className={numberInputClasses}
                            id="number"
                            type="text"
                            value={number}
                            onChange={numberChangeHandler}
                            onBlur={numberInputBlurHandler}
                        />
                        {numberInputHasError && (
                            <p className={`${classes["input__message"]}`}>
                                Contact number must not be empty.
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
                            htmlFor="email"
                        >
                            Enter Email
                        </label>
                        <input
                            className={emailInputClasses}
                            id="email"
                            type="email"
                            value={email}
                            onChange={emailChangeHandler}
                            onBlur={emailInputBlurHandler}
                        />
                        {emailInputHasError && (
                            <p className={`${classes["input__message"]}`}>
                                Invallid Email.
                            </p>
                        )}
                    </div>

                    {/* <div className={`${classes["input"]}`}>
                        <label
                            className={`${classes["input__label"]}`}
                            htmlFor="collegeName"
                        >
                            Choose your college
                        </label>
                        <input
                            className={collegeNameInputClasses}
                            id="collegeName"
                            type="text"
                            value={collegeName}
                            onChange={collegeNameChangeHandler}
                            onBlur={collegeNameInputBlurHandler}
                        />
                        {collegeNameInputHasError && (
                            <p className={`${classes["input__message"]}`}>
                                Please choose a valid college.
                            </p>
                        )}
                    </div> */}

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
                            htmlFor="collegeName"
                        >
                            Choose your college
                        </label>
                        {/* <input
                            className={collegeNameInputClasses}
                            id="collegeName"
                            type="text"
                            value={collegeName}
                            onChange={collegeNameChangeHandler}
                            onBlur={collegeNameInputBlurHandler}
                        />
                        {collegeNameInputHasError && (
                            <p className={`${classes["input__message"]}`}>
                                Please choose a valid college.
                            </p>
                        )} */}
                        <select
                            name="languages"
                            id="collegeName"
                            className={collegeNameInputClasses}
                            
                        >
                            <option className={optionInputClasses}>IIT Kharagpur</option>
                            <option className={optionInputClasses}>IIT Delhi</option>
                            <option className={optionInputClasses}>IIT Bombay</option>
                            <option className={optionInputClasses}>BITS Pilani</option>
                            <option className={optionInputClasses}>IIIT Hyderabad</option>
                        </select>
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
                            htmlFor="primaryPassword"
                        >
                            Create Password
                        </label>
                        <input
                            className={passwordInputClasses}
                            id="passoword"
                            type="password"
                            value={password}
                            onChange={passwordChangeHandler}
                            onBlur={passwordInputBlurHandler}
                        />
                        {passwordInputHasError && (
                            <p className={`${classes["input__message"]}`}>
                                Please choose a valid password.
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
                            htmlFor="confirmPassword"
                        >
                            Confirm Password
                        </label>
                        <input
                            className={confirmPasswordInputClasses}
                            id="confimPassword"
                            type="password"
                            value={confirmPassword}
                            onChange={confirmPasswordChangeHandler}
                            onBlur={confirmPasswordInputBlurHandler}
                        />
                        {confirmPasswordInputHasError && (
                            <p className={`${classes["input__message"]}`}>
                                Passwords do not match.
                            </p>
                        )}
                    </div>
                </div>
                <div className={`${classes["form__btn-group"]}`}>
                    <button
                        className={`${classes["form__btn"]}`}
                        // disabled={!formIsValid}
                    >
                        Register
                    </button>
                </div>
            </form>
        </>
    );
};

export default RegisterForm;
