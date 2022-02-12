import useInput from "../../hooks/use-input";

import classes from "./BasicForm.module.css";

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@");
const isAge = (value) => {
    const enteredAge = +value;
    return enteredAge > 0 && enteredAge < 100;
};

const BasicForm = (props) => {
    const {
        value: name,
        isValid: nameIsValid,
        hasError: nameInputHasError,
        valueChangeHandler: nameChangeHandler,
        inputBlurHandler: nameInputBlurHandler,
        reset: resetName,
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
        value: age,
        isValid: ageIsValid,
        hasError: ageInputHasError,
        valueChangeHandler: ageChangeHandler,
        inputBlurHandler: ageInputBlurHandler,
        reset: resetAge,
    } = useInput(isAge);

    let formIsValid = false;
    if (nameIsValid && emailIsValid && ageIsValid) formIsValid = true;

    const nameInputClasses = nameInputHasError
        ? `${classes["input__field"]} ${classes["input__error"]}`
        : `${classes["input__field"]}`;

    const emailInputClasses = emailInputHasError
        ? `${classes["input__field"]} ${classes["input__error"]}`
        : `${classes["input__field"]}`;

    const ageInputClasses = ageInputHasError
        ? `${classes["input__field"]} ${classes["input__error"]}`
        : `${classes["input__field"]}`;

    const submitHandler = (event) => {
        event.preventDefault();

        if (!formIsValid) return;

        const data = { name: name, email: email, age: age };
        console.log(data);

        resetName();
        resetAge();
        resetEmail();
    };

    return (
        <>
            <h1 className={classes["form__title"]}>{props.title}</h1>
            <form
                className={`${classes["form"]}`}
                autoComplete="off"
                onSubmit={submitHandler}
            >
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
                            htmlFor="email"
                        >
                            E-Mail
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
                                Please enter valid email.
                            </p>
                        )}
                    </div>

                    <div className={`${classes["input"]}`}>
                        <label
                            className={`${classes["input__label"]}`}
                            htmlFor="age"
                        >
                            Age
                        </label>
                        <input
                            className={ageInputClasses}
                            id="age"
                            type="age"
                            value={age}
                            onChange={ageChangeHandler}
                            onBlur={ageInputBlurHandler}
                        />
                        {ageInputHasError && (
                            <p className={`${classes["input__message"]}`}>
                                Please enter valid age.
                            </p>
                        )}
                    </div>
                </div>
                <div className={`${classes["form__btn-group"]}`}>
                    <button
                        className={`${classes["form__btn"]}`}
                        disabled={!formIsValid}
                    >
                        Submit
                    </button>
                </div>
            </form>
        </>
    );
};

export default BasicForm;
