import { useState } from "react";
import Button from "../UI/Button";
import classes from "./Navbar.module.css";

const Navbar = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleClick = () => {
        setIsVisible((prev) => !prev);
    };

    const menuToggleIcon = !isVisible ? (
        <svg
            viewBox="0 0 100 80"
            width="40"
            height="40"
            className={classes["hamburger"]}
        >
            <rect width="100" height="10" className={classes["hamburger__bar"]} />
            <rect y="25" width="100" height="10" className={classes["hamburger__bar"]} />
            <rect y="50" width="100" height="10" className={classes["hamburger__bar"]} />
        </svg>
    ) : (
        <svg
            viewBox="0 0 100 80"
            width="40"
            height="40"
            className={classes["close"]}
        >
            <line x1="0" y1="0" x2="100" y2="80" className={classes["close__fragment"]} />
            <line x1="0" y1="80" x2="100" y2="0" className={classes["close__fragment"]} />
        </svg>
    );

    const secondaryHeaderClasses = classes["secondary-header"] + (isVisible ? ` ${classes["active"]}` : "");

    return (
        <header className={classes["navbar"]}>
            <header className={classes["primary-header"]}>
                <div className={classes["logo-container"]}>
                    <img
                        src="logo192.png"
                        alt="NASA"
                        className={classes["logo"]}
                    />
                </div>
                <button className={classes["nav-toggle"]} onClick={handleClick}>
                    {menuToggleIcon}
                </button>
                <nav className={classes["primary-navigation"]}>
                    <ul className={classes["primary-navigation__list"]}>
                        <li>
                            <a
                                href="#"
                                className={classes["primary-navigation__link"]}
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className={classes["primary-navigation__link"]}
                            >
                                Event
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className={classes["primary-navigation__link"]}
                            >
                                Schedule
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className={classes["primary-navigation__link"]}
                            >
                                Gallery
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className={classes["primary-navigation__link"]}
                            >
                                Our Team
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className={classes["nav-btn__group"]}>
                    <Button className={`${classes["nav-btn"]} ${classes["nav-btn__login"]}`}>Login</Button>
                    <Button className={`${classes["nav-btn"]} ${classes["nav-btn__register"]}`}>Register</Button>
                </div>
            </header>
            <header className={secondaryHeaderClasses}>
                <ul className={classes["secondary-navigation__list"]}>
                    <li>
                        <a
                            href="#"
                            className={classes["secondary-navigation__link"]}
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className={classes["secondary-navigation__link"]}
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className={classes["secondary-navigation__link"]}
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            </header>
        </header>
    );
};

export default Navbar;
