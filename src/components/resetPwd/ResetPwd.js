import useInput from "../../hooks/use-input";
import classes from "./ResetPwd.module.css";
import { useContext } from "react";

import DarkContext from '../../store/DarkMode';
import UserContext from '../../store/user-context';

const isNotEmpty = (value) => value.trim() !== "";
const ResetPwd = () => {

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
        value: oldPassword,
        isValid: oldPasswordIsValid,
        hasError: oldPasswordInputHasError,
        valueChangeHandler: oldPasswordChangeHandler,
        inputBlurHandler: oldPasswordInputBlurHandler,
        reset: resetOldPassword,
    } = useInput(isNotEmpty);

    const {
        value: newPassword,
        isValid: newPasswordIsValid,
        hasError: newPasswordInputHasError,
        valueChangeHandler: newPasswordChangeHandler,
        inputBlurHandler: newPasswordInputBlurHandler,
        reset: resetnewPassword,
    } = useInput(isNotEmpty);

    const {
        value: NewPassword,
        isValid: NewPasswordIsValid,
        hasError: NewPasswordInputHasError,
        valueChangeHandler: NewPasswordChangeHandler,
        inputBlurHandler: NewPasswordInputBlurHandler,
        reset: resetNewPassword,
    } = useInput(isNotEmpty);

    let inputIsValid = false;
    if (userNameIsValid && oldPasswordIsValid && newPasswordIsValid && NewPasswordIsValid)
        inputIsValid = true;

    const normalClasses =
        classes["input__field"] +
        (darkCtx.theme.mode === "dark"
            ? " " + classes["input__field__dark"]
            : "");
    const errorClasses = `${normalClasses} ${classes["input__error"]}`;

    const userNameInputClasses = userNameInputHasError
        ? errorClasses
        : normalClasses;

    const oldPasswordInputClasses = oldPasswordInputHasError
        ? errorClasses
        : normalClasses;

    const newPasswordInputClasses = newPasswordInputHasError
        ? errorClasses
        : normalClasses;

    const NewPasswordInputClasses = NewPasswordInputHasError
        ? errorClasses
        : normalClasses;

    const submitHandler = (event) => {
        event.preventDefault();

        if (!inputIsValid) return;

        if(newPassword !== NewPassword)
        {
            alert("Passwords do not match!");
            resetNewPassword();
            resetnewPassword();

            return;
        }

        console.log('reset');

        //BACKEND RELATED CODE GOES HERE -- 



        
        resetUserName();
        resetOldPassword();
        resetNewPassword();
        resetnewPassword();
    };

    return (
        <>
            <form
                className={`${classes["form"]}`}
                autoComplete="off"
                onSubmit={submitHandler}
            >
                <h1 className={darkCtx.theme.mode === 'dark' ? `${classes['form__title']} ${classes['form__title-dark']}` : classes["form__title"]}>
                    Reset Password</h1>
                <div className={`${classes["form__inputs"]}`}>
                    <div className={darkCtx.theme.mode === 'dark' ? `${classes['input']} ${classes['input-dark']}` : classes["input"]}>
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

                    <div className={darkCtx.theme.mode === 'dark' ? `${classes['input']} ${classes['input-dark']}` : classes["input"]}>
                        <label
                            className={`${classes["input__label"]}`}
                            htmlFor="oldPassword"
                        >
                            Old Password
                        </label>
                        <input
                            className={oldPasswordInputClasses}
                            id="oldPassword"
                            type="password"
                            value={oldPassword}
                            name='password'
                            onChange={oldPasswordChangeHandler}
                            onBlur={oldPasswordInputBlurHandler}
                        />
                        {oldPasswordInputHasError && (
                            <p className={`${classes["input__message"]}`}>
                                Invalid password.
                            </p>
                        )}
                    </div>

                    <div className={darkCtx.theme.mode === 'dark' ? `${classes['input']} ${classes['input-dark']}` : classes["input"]}>

                        <label
                            className={`${classes["input__label"]}`}
                            htmlFor="newPassword"
                        >
                            New Password
                        </label>
                        <input
                            className={newPasswordInputClasses}
                            id="password"
                            type="password"
                            value={newPassword}
                            name='password'
                            onChange={newPasswordChangeHandler}
                            onBlur={newPasswordInputBlurHandler}
                        />
                        {newPasswordInputHasError && (
                            <p className={`${classes["input__message"]}`}>
                                Invalid password.
                            </p>
                        )}
                    </div>

                    <div className={darkCtx.theme.mode === 'dark' ? `${classes['input']} ${classes['input-dark']}` : classes["input"]}>

                        <label
                            className={`${classes["input__label"]}`}
                            htmlFor="NewPassword"
                        >
                            Confirm New Password
                        </label>

                        <input
                            className={NewPasswordInputClasses}
                            id="password"
                            type="password"
                            value={NewPassword}
                            name='password'
                            onChange={NewPasswordChangeHandler}
                            onBlur={NewPasswordInputBlurHandler}
                        />

                        {NewPasswordInputHasError && (
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
                        Reset
                    </button>
                </div>
            </form>
        </>
    );
};

export default ResetPwd;
