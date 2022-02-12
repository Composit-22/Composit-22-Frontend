import { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import ScrollContext from "../../store/scroll-context";
import Button from "../UI/Button";
import classes from "./Navbar.module.css";

import logo from "./react.png";

const Navbar = () => {
    const [isVisible, setIsVisible] = useState(false);

    const scrollCtx = useContext(ScrollContext);

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
            <rect
                width="100"
                height="10"
                className={classes["hamburger__bar"]}
            />
            <rect
                y="25"
                width="100"
                height="10"
                className={classes["hamburger__bar"]}
            />
            <rect
                y="50"
                width="100"
                height="10"
                className={classes["hamburger__bar"]}
            />
        </svg>
    ) : (
        <svg
            viewBox="0 0 100 80"
            width="40"
            height="40"
            className={classes["close"]}
        >
            <line
                x1="0"
                y1="0"
                x2="100"
                y2="80"
                className={classes["close__fragment"]}
            />
            <line
                x1="0"
                y1="80"
                x2="100"
                y2="0"
                className={classes["close__fragment"]}
            />
        </svg>
    );

    const secondaryHeaderClasses =
        classes["secondary-header"] +
        (isVisible ? ` ${classes["active"]}` : "");

    return (
        <header className={classes["navbar"]}>
            <header className={classes["primary-header"]}>
                <div className={classes["logo-container"]}>
                    <img
                        src={logo}
                        alt="Composit"
                        className={classes["logo-img"]}
                    />
                </div>
                <button className={classes["nav-toggle"]} onClick={handleClick}>
                    {menuToggleIcon}
                </button>
                <nav className={classes["primary-navigation"]}>
                    <ul className={classes["primary-navigation__list"]}>
                        <li>
                            <NavLink
                                to="/home"
                                className={classes["primary-navigation__link"]}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/about"
                                className={classes["primary-navigation__link"]}
                            >
                                About
                            </NavLink>
                        </li>
                        <li>
                            <div
                                className={classes["primary-navigation__link"]}
                                onClick={scrollCtx.onScrollToEventCarousel}
                            >
                                Event
                            </div>
                        </li>
                        <li>
                            <div
                                className={classes["primary-navigation__link"]}
                                onClick={scrollCtx.onScrollToSchedule}
                            >
                                Schedule
                            </div>
                        </li>
                        <li>
                            <div
                                className={classes["primary-navigation__link"]}
                                onClick={scrollCtx.onScrollToGallery}
                            >
                                Gallery
                            </div>
                        </li>
                        <li>
                            <NavLink
                                to="/team"
                                className={classes["primary-navigation__link"]}
                            >
                                Our Team
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <div className={classes["nav-btn__group"]}>
                    <NavLink
                        to="/login"
                        className={`${classes["nav-btn"]} ${classes["nav-btn__login"]}`}
                    >
                        Login
                    </NavLink>
                    <NavLink
                        to="/register"
                        className={`${classes["nav-btn"]} ${classes["nav-btn__register"]}`}
                    >
                        Register
                    </NavLink>
                </div>
            </header>
            <header className={secondaryHeaderClasses}>
                <ul className={classes["secondary-navigation__list"]}>
                    <li>
                        <NavLink
                            to="/login"
                            className={classes["secondary-navigation__link"]}
                        >
                            Login
                        </NavLink>
                        <NavLink
                            to="/register"
                            className={classes["secondary-navigation__link"]}
                        >
                            Register
                        </NavLink>
                        <NavLink
                            to="/home"
                            className={classes["secondary-navigation__link"]}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            className={classes["secondary-navigation__link"]}
                        >
                            About
                        </NavLink>
                    </li>
                    <li>
                        <div
                            className={classes["secondary-navigation__link"]}
                            onClick={scrollCtx.onScrollToEventCarousel}
                        >
                            Event
                        </div>
                    </li>
                    <li>
                        <div
                            className={classes["secondary-navigation__link"]}
                            onClick={scrollCtx.onScrollToSchedule}
                        >
                            Schedule
                        </div>
                    </li>
                    <li>
                        <div
                            className={classes["secondary-navigation__link"]}
                            onClick={scrollCtx.onScrollToGallery}
                        >
                            Gallery
                        </div>
                    </li>
                    <li>
                        <NavLink
                            to="/team"
                            className={classes["secondary-navigation__link"]}
                        >
                            Our Team
                        </NavLink>
                    </li>
                </ul>
            </header>
        </header>
    );
};

export default Navbar;
