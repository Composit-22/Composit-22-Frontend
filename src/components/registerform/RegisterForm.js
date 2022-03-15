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
        value: collegeName,
        isValid: collegeNameIsValid,
        hasError: collegeNameInputHasError,
        valueChangeHandler: collegeNameChangeHandler,
        inputBlurHandler: collegeNameInputBlurHandler,
        reset: resetCollegeName,
    } = useInput(isEmail);

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

    // const {
    //     value: isAmbassador,
    //     // isValid: userNameIsValid,
    //     hasError: ambassadorInputHasError,
    //     valueChangeHandler: ambassadorChangeValue,
    //     inputBlurHandler: ambassadorInputBlurHandler,
    //     reset: resetIsAmbassador,
    // } = useInput();

    const passwordChangeHandler = (event) => {
        primaryPasswordChangeHandler(event);
        resetConfirmPassword();
    };

    // const ambassadorChangeHandler = (event) => {
    //     ambassadorChangeValue();
    // };

    const [confirmMessageOpen, setConfirmMessageOpen] = useState(false);
    const [userNameExists, setUserNameExists] = useState(false);
    const [emailExists, setEmailExists] = useState(false);
    const [isAmbassador, setIsAmbassador] = useState("no");

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

    const emailInputClasses =
        emailInputHasError || emailExists ? errorClasses : normalClasses;

    const collegeNameInputClasses = collegeNameInputHasError
        ? errorClasses
        : normalClasses;

    const passwordInputClasses = passwordInputHasError
        ? errorClasses
        : normalClasses;

    const confirmPasswordInputClasses = confirmPasswordInputHasError
        ? errorClasses
        : normalClasses;
    
    const optionInputClasses =
        darkCtx.theme.mode === "dark" ? classes["option__dark"] : "";

    // const [collegeName, setCollegeName] = useState("IIT Kharagpur");
    const [isRegistering, setIsRegistering] = useState(false);
    const [overlayTitle, setOverlayTitle] = useState("");
    const [overlayContent, setOverlayContent] = useState("");

    // const collegeChangeHandler = (event) => {
    //     setCollegeName(event.target.value);
    // };

    const today = new Date();
    const registration_date =
        today.getDate() +
        "/" +
        (today.getMonth() + 1) +
        "/" +
        today.getFullYear();

    const submitHandler = (event) => {
        // console.log("Hello");
        event.preventDefault();

        if (!formIsValid) return;

        console.log(collegeRef.current);

        const state = {
            username: userName,
            name: name,
            email: email,
            collegeName: collegeName,
            registration_date: registration_date,
            password: password,
            number: number,
            events_registered: "",
            // isAmbassador: isAmbassador,
        };

        console.log(state);

        setIsRegistering(true);
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });

        let message = {};

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
                message = JSON.parse(data);
                console.log(message);
                if (message.success) {
                    setOverlayTitle("Registration Successful");
                    setOverlayContent(
                        "Successfully registered for Composit 2022. Please activate your account from your inbox."
                    );
                    openConfirmHandler();
                    resetName();
                    resetUserName();
                    resetNumber();
                    resetEmail();
                    resetPassword();
                    resetConfirmPassword();
                    resetCollegeName();
                } else {
                    if (message.emailExists) {
                        setEmailExists(true);
                    }
                    if (message.userNameExists) {
                        setUserNameExists(true);
                    }
                    setOverlayTitle("Registration Unsuccessful");
                    setOverlayContent(
                        "Username or email already exists. Please use a different one."
                    );
                    openConfirmHandler();
                    setIsRegistering(false);
                }
            })
            .catch((e) => {
                if (message.emailExists) {
                    setEmailExists(false);
                }
                if (message.userNameExists) {
                    setUserNameExists(false);
                }
                setOverlayTitle("");
                setOverlayContent(e);
                openConfirmHandler();
            });
    };

    const isAmbassadorChangeHandler = () => {
        setIsAmbassador(prev => {
            if (prev === "no") {
                setIsAmbassador("yes");
            } else {
                setIsAmbassador("no");
            }
        });
    }

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
                                type="number"
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
                                Enter your college
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
                            {/* <select
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
                            </select> */}
                        </div>
                        <div
                            className={
                                darkCtx.theme.mode === "dark"
                                    ? `${classes["input"]} ${classes["input-dark"]}`
                                    : classes["input"]
                            }
                        >
                            <label
                                className={`${classes["input__label"]}`}
                                htmlFor="campusAmbassador"
                            >
                                Are you a campuss ambassador?
                            </label>
                            <div id="campusAmbassador" className={classes["checkbox__group"]}> 
                                <input
                                    type="checkbox"
                                    id="yes"
                                    value="newsletter"
                                    className={classes["checkbox"]}
                                    checked={isAmbassador === "yes"}
                                    onChange={isAmbassadorChangeHandler}
                                />
                                <label htmlFor="yes" className={classes["checkbox__label"]}>Yes</label>
                                <input
                                    type="checkbox"
                                    id="no"
                                    value="newsletter"
                                    className={classes["checkbox"]}
                                    checked={isAmbassador === "no"}
                                    onChange={isAmbassadorChangeHandler}
                                />
                                <label htmlFor="no" className={classes["checkbox__label"]}>No</label>
                            </div>
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
                                value={isAmbassador}
                                onChange={confirmPasswordChangeHandler}
                                onBlur={confirmPasswordInputBlurHandler}
                            />
                            {confirmPasswordInputHasError && (
                                <p className={`${classes["input__message"]}`}>
                                    Passwords do not match.
                                </p>
                            )}
                        </div>

                        {/* <div
                            className={
                                darkCtx.theme.mode === "dark"
                                    ? `${classes["input"]} ${classes["input-dark"]}`
                                    : classes["input"]
                            }
                        >
                            <span>
                                <input
                                className={ambassadorInputClasses}
                                id="campusAmbassador"
                                type="checkbox"
                                value={isAmbassador}
                                onChange={ambassadorChangeHandler}
                                onBlur={ambassadorInputBlurHandler}
                                />
                            </span>
                            <label
                                className={`${classes["input__label"]}`}
                                htmlFor="campusAmbassador"
                            >
                                Are you a campus ambassador?
                            </label>
                        </div> */}
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
