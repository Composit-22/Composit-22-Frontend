import useInput from "../../hooks/use-input";
import classes from "./RegisterForm.module.css";
import { useContext, useRef, useState } from "react";

import DarkContext from "../../store/DarkMode";

import Backdrop from "../UI/Backdrop";

import ReactDOM from "react-dom";

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@");

const OverlayContent = (props) => {
    return (
        <div className={classes["message"]}>
            <h1 className={classes["message-title"]}>{props.title}</h1>
            <p className={classes["message-content"]}>{props.content}</p>
            <button className={classes["message-btn"]} onClick={props.onClose}>
                Close
            </button>
        </div>
    );
};

const Loader = () => {
    const darkCtx = useContext(DarkContext);
    return (
        <div
            className={
                classes["loader"] +
                (darkCtx.theme.mode === "dark"
                    ? " " + classes["loader__dark"]
                    : "")
            }
        >
            Registering...
        </div>
    );
};

const RegisterForm = () => {
    const darkCtx = useContext(DarkContext);
    const collegeRef = useRef();

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
        value: location,
        isValid: locationIsValid,
        hasError: locationInputHasError,
        valueChangeHandler: locationChangeHandler,
        inputBlurHandler: locationBlurHandler,
        reset: resetLocation,
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

    const [confirmMessageOpen, setConfirmMessageOpen] = useState(false);
    const [userNameExists, setUserNameExists] = useState(false);
    const [emailExists, setEmailExists] = useState(false);

    const masterUserNameChangeHandler = (event) => {
        setUserNameExists(false);
        userNameChangeHandler(event);
    };

    const masterEmailChangeHandler = (event) => {
        setEmailExists(false);
        emailChangeHandler(event);
    };

    const openConfirmHandler = () => {
        setConfirmMessageOpen(true);
    };

    const closeConfirmHandler = () => {
        setConfirmMessageOpen(false);
        setIsRegistering(false);
    };

    let formIsValid = false;

    formIsValid =
        nameIsValid &&
        userNameIsValid & numberIsValid &&
        emailIsValid &&
        locationIsValid &&
        passwordIsValid &&
        confirmPasswordIsValid;

    const normalClasses =
        classes["input__field"] +
        (darkCtx.theme.mode === "dark"
            ? " " + classes["input__field__dark"]
            : "");
    const errorClasses = `${normalClasses} ${classes["input__error"]}`;

    const nameInputClasses = nameInputHasError ? errorClasses : normalClasses;

    const userNameInputClasses =
        userNameInputHasError || userNameExists ? errorClasses : normalClasses;

    const numberInputClasses = numberInputHasError
        ? errorClasses
        : normalClasses;

    const locationInputClasses = locationInputHasError
        ? errorClasses
        : normalClasses;

    const emailInputClasses =
        emailInputHasError || emailExists ? errorClasses : normalClasses;

    const collegeNameInputClasses = normalClasses;

    const passwordInputClasses = passwordInputHasError
        ? errorClasses
        : normalClasses;

    const confirmPasswordInputClasses = confirmPasswordInputHasError
        ? errorClasses
        : normalClasses;

    const optionInputClasses =
        darkCtx.theme.mode === "dark" ? classes["option__dark"] : "";

    const [collegeName, setCollegeName] = useState("IIT Kharagpur");
    const [isRegistering, setIsRegistering] = useState(false);
    const [overlayTitle, setOverlayTitle] = useState("");
    const [overlayContent, setOverlayContent] = useState("");

    const collegeChangeHandler = (event) => {
        setCollegeName(event.target.value);
    };

    const today = new Date();
    const registration_date =
        today.getDate() +
        "/" +
        (today.getMonth() + 1) +
        "/" +
        today.getFullYear();

    const submitHandler = (event) => {
        console.log("Hello");
        event.preventDefault();

        if (!formIsValid) return;

        console.log(collegeRef.current);

        const state = {
            username: userName,
            name: name,
            email: email,
            collegeName: collegeName,
            city: location,
            registration_date: registration_date,
            password: password,
            number: number,
            events_registered: "",
        };

        console.log(state);

        setIsRegistering(true);
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });

        fetch("https://composit-api.herokuapp.com/signup", {
            method: "POST",
            body: JSON.stringify(state),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Accept: "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                const message = JSON.parse(data);
                console.log(message);
                if (message.success === "true") {
                    setOverlayTitle("Registration Successful");
                    setOverlayContent(
                        "Successfully registered for Composit 2022. Please activate your account from your inbox."
                    );
                    openConfirmHandler();
                    resetName();
                    resetUserName();
                    resetNumber();
                    resetLocation();
                    resetEmail();
                    resetPassword();
                    resetConfirmPassword();
                } else {
                    if (message.emailExists === "true") {
                        setEmailExists(true);
                    }
                    if (message.userNameExists === "true") {
                        setUserNameExists(true);
                    }
                    setOverlayTitle("Registration Unsuccessful");
                    setOverlayContent(
                        "Username or email already exits. Please use a different one."
                    );
                    openConfirmHandler();
                }
            })
            .catch((e) => console.log(e));
    };

    return (
        <>
            {confirmMessageOpen && <Backdrop onClose={closeConfirmHandler} />}
            {confirmMessageOpen &&
                ReactDOM.createPortal(
                    <OverlayContent
                        title={overlayTitle}
                        content={overlayContent}
                        onClose={closeConfirmHandler}
                    />,
                    document.getElementById("overlay-root")
                )}
            {isRegistering && <Loader />}
            {!isRegistering && (
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
                        {/* <h1 className={classes["form__title"]}>*/}Register
                        to Composit
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
                                onChange={masterUserNameChangeHandler}
                                onBlur={userNameInputBlurHandler}
                            />
                            {(userNameInputHasError || userNameExists) && (
                                <p className={`${classes["input__message"]}`}>
                                    {userNameExists
                                        ? "Username already exists."
                                        : "Username must not be empty."}
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
                                onChange={masterEmailChangeHandler}
                                onBlur={emailInputBlurHandler}
                            />
                            {(emailInputHasError || emailExists) && (
                                <p className={`${classes["input__message"]}`}>
                                    {emailExists
                                        ? "Email already exists."
                                        : "Invallid Email."}
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
                            <label
                                className={`${classes["input__label"]}`}
                                htmlFor="location"
                            >
                                City
                            </label>
                            <input
                                className={locationInputClasses}
                                id="location"
                                type="text"
                                value={location}
                                onChange={locationChangeHandler}
                                onBlur={locationBlurHandler}
                            />
                            {locationInputHasError && (
                                <p className={`${classes["input__message"]}`}>
                                    City must not be empty.
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
                                onChange={collegeChangeHandler}
                            >
                                <option
                                    value="IIT Kharagpur"
                                    className={optionInputClasses}
                                >
                                    IIT Kharagpur
                                </option>
                                <option
                                    value="IIT Delhi"
                                    className={optionInputClasses}
                                >
                                    IIT Delhi
                                </option>
                                <option
                                    value="IIT Bombay"
                                    className={optionInputClasses}
                                >
                                    IIT Bombay
                                </option>
                                <option
                                    value="BITS Pilani"
                                    className={optionInputClasses}
                                >
                                    BITS Pilani
                                </option>
                                <option
                                    value="IIIT Hyderabad"
                                    className={optionInputClasses}
                                >
                                    IIIT Hyderabad
                                </option>
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
                            onClick={submitHandler}
                        >
                            Register
                        </button>
                    </div>
                </form>
            )}
        </>
    );
};

export default RegisterForm;
