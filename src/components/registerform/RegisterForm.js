import useInput from "../../hooks/use-input";
import classes from "./RegisterForm.module.css";

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@");
const isAge = (value) => {
    const enteredAge = +value;
    return enteredAge > 0 && enteredAge < 100;
};

const RegisterForm = () => {
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
        collegeNameIsValid &&
        passwordIsValid &&
        confirmPasswordIsValid
    )
        formIsValid = true;

    const nameInputClasses = nameInputHasError
        ? `${classes["input__field"]} ${classes["input__error"]}`
        : `${classes["input__field"]}`;

    const userNameInputClasses = userNameInputHasError
        ? `${classes["input__field"]} ${classes["input__error"]}`
        : `${classes["input__field"]}`;

    const collegeNameInputClasses = collegeNameInputHasError
        ? `${classes["input__field"]} ${classes["input__error"]}`
        : `${classes["input__field"]}`;

    const passwordInputClasses = passwordInputHasError
        ? `${classes["input__field"]} ${classes["input__error"]}`
        : `${classes["input__field"]}`;

    const confirmPasswordInputClasses = confirmPasswordInputHasError
        ? `${classes["input__field"]} ${classes["input__error"]}`
        : `${classes["input__field"]}`;

    const submitHandler = (event) => {
        event.preventDefault();

        if (!formIsValid) return;

        const data = { name, userName, collegeName, password };
        console.log(data);

        resetName();
        resetUserName();
        resetCollegeName();
        resetPassword();
        resetConfirmPassword();
    };

    return (
        <>
            <form
                className={`${classes["form"]}`}
                autoComplete="off"
                onSubmit={submitHandler}
            >
                <h1 className={classes["form__title"]}>Register to Composit</h1>
                <div className={`${classes["form__inputs"]}`}>
                    <div className={`${classes["input"]}`}>
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

                    <div className={`${classes["input"]}`}>
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

                    <div className={`${classes["input"]}`}>
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
                        <input type="text" value={collegeName} className={classes["input__field"]} onChange={collegeNameChangeHandler} />
                    </div>
                    <div className={`${classes["input"]}`}>
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

                    <div className={`${classes["input"]}`}>
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
