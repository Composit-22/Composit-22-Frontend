import classes from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faLinkedin,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faMapMarkerAlt, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";

import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import ScrollContext from "../../store/scroll-context";
import DarkContext from '../../store/DarkMode';


const Footer = () => {
    const scrollCtx = useContext(ScrollContext);
    const {theme} = useContext(DarkContext);

    return (
        <div className={theme.mode==='dark'? `${classes['footer-container']} ${classes['footer-container-dark']}`: classes["footer-container"]}>

        {/* <div className={classes["footer-container"]}> */}
            <footer className={theme.mode==='dark'? `${classes['footer']} ${classes['footer-dark']}`: classes["footer"]}>
            {/* <footer className={classes["footer"]}> */}
                <div className={classes["footer-top"]}>
                    <div>
                        <h1 className={theme.mode==='dark'? `${classes['footer-top__heading']} ${classes['footer-top__heading-dark']}`: classes["footer-top__heading"]}>
                        {/* <h1 className={classes["footer-top__heading"]}> */}
                            Quick Links
                        </h1>
                        <ul className={classes["footer-links"]}>
                            <li>
                                <NavLink
                                    to="/login"
                                    className={theme.mode==='dark'? `${classes['footer-link']} ${classes['footer-link-dark']}`: classes["footer-link"]}
                                    // className={classes["footer-link"]}
                                >
                                    <span>&gt;</span> Login
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/register"
                                    className={theme.mode==='dark'? `${classes['footer-link']} ${classes['footer-link-dark']}`: classes["footer-link"]}

                                    // className={classes["footer-link"]}
                                >
                                    <span>&gt;</span> Register
                                </NavLink>
                            </li>
                            <li>
                                <div
                                    className={theme.mode==='dark'? `${classes['footer-link']} ${classes['footer-link-dark']}`: classes["footer-link"]}

                                    // className={classes["footer-link"]}
                                    onClick={scrollCtx.onScrollToEventCarousel}
                                >
                                    <span>&gt;</span> Events
                                </div>
                            </li>
                            <li>
                                <div
                                    className={theme.mode==='dark'? `${classes['footer-link']} ${classes['footer-link-dark']}`: classes["footer-link"]}

                                    // className={classes["footer-link"]}
                                    onClick={scrollCtx.onScrollToGallery}
                                >
                                    <span>&gt;</span> Gallery
                                </div>
                            </li>
                            <li>
                                <div
                                    className={theme.mode==='dark'? `${classes['footer-link']} ${classes['footer-link-dark']}`: classes["footer-link"]}

                                    // className={classes["footer-link"]}
                                    onClick={scrollCtx.onScrollToSchedule}
                                >
                                    <span>&gt;</span> Schedule
                                </div>
                            </li>
                            <li>
                                <Link
                                    to="/about"
                                    className={theme.mode==='dark'? `${classes['footer-link']} ${classes['footer-link-dark']}`: classes["footer-link"]}

                                    // className={classes["footer-link"]}
                                >
                                    <span>&gt;</span> About
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/team"
                                    href="#"
                                    className={theme.mode==='dark'? `${classes['footer-link']} ${classes['footer-link-dark']}`: classes["footer-link"]}

                                    // className={classes["footer-link"]}
                                >
                                    <span>&gt;</span> Our Team
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                    <h1 className={theme.mode==='dark'? `${classes['footer-top__heading']} ${classes['footer-top__heading-dark']}`: classes["footer-top__heading"]}>
                        {/* <h1 className={classes["footer-top__heading"]}> */}
                            Contact Us
                        </h1>
                        <ul className={classes["footer-links"]}>
                            <li className={theme.mode==='dark'? `${classes['footer-contact']} ${classes['footer-contact-dark']}`: classes["footer-contact"]}>
                            {/* <li className={classes["footer-contact"]}> */}

                                <span className={theme.mode==='dark'? `${classes['footer-icon']} ${classes['footer-icon-dark']}`: classes["footer-icon"]}>
                                {/* <span className={classes["footer-icon"]}> */}
                                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                                </span>
                                Department of Metallurgical and Materials
                                Engineering, IIT Kharagpur, West Bengal 721302
                            </li>
                            <li className={theme.mode==='dark'? `${classes['footer-contact']} ${classes['footer-contact-dark']}`: classes["footer-contact"]}>
                            {/* <li className={classes["footer-contact"]}> */}
                            <span className={theme.mode==='dark'? `${classes['footer-icon']} ${classes['footer-icon-dark']}`: classes["footer-icon"]}>
                                {/* <span className={classes["footer-icon"]}> */}
                                    <FontAwesomeIcon icon={faPhoneAlt} />
                                </span>
                                Riyan: +91 6291 079 485
                            </li>
                            <li className={theme.mode==='dark'? `${classes['footer-contact']} ${classes['footer-contact-dark']}`: classes["footer-contact"]}>
                            {/* <li className={classes["footer-contact"]}> */}
                            <span className={theme.mode==='dark'? `${classes['footer-icon']} ${classes['footer-icon-dark']}`: classes["footer-icon"]}>
                                {/* <span className={classes["footer-icon"]}> */}
                                    <FontAwesomeIcon icon={faPhoneAlt} />
                                </span>
                                Gouri Vignesh: +91 6302 468 417
                            </li>
                            <li className={theme.mode==='dark'? `${classes['footer-contact']} ${classes['footer-contact-dark']}`: classes["footer-contact"]}>
                            {/* <li className={classes["footer-contact"]}> */}
                            <span className={theme.mode==='dark'? `${classes['footer-icon']} ${classes['footer-icon-dark']}`: classes["footer-icon"]}>
                                {/* <span className={classes["footer-icon"]}> */}
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </span>
                                composit.iit@gmail.com
                            </li>
                        </ul>
                    </div>
                    <div>
                    <h1 className={theme.mode==='dark'? `${classes['footer-top__heading']} ${classes['footer-top__heading-dark']}`: classes["footer-top__heading"]}>
                        {/* <h1 className={classes["footer-top__heading"]}> */}
                            Social Connect
                        </h1>
                        <ul className={classes["footer-links"]}>
                            <li>
                                <a
                                    href="https://www.facebook.com/composit.iitkgp"
                                    target="_blank"
                                    className={theme.mode==='dark'? `${classes['footer-link']} ${classes['footer-link-dark']}`: classes["footer-link"]}

                                    // className={classes["footer-link"]}
                                >
                                    <span className={theme.mode==='dark'? `${classes['footer-icon']} ${classes['footer-icon-dark']}`: classes["footer-icon"]}>
                                {/* <span className={classes["footer-icon"]}> */}
                                        <FontAwesomeIcon icon={faFacebook} />
                                    </span>
                                    Facebook
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.linkedin.com/company/composit-iit-kharagpur/"
                                    target="_blank"
                                    className={theme.mode==='dark'? `${classes['footer-link']} ${classes['footer-link-dark']}`: classes["footer-link"]}

                                    // className={classes["footer-link"]}
                                >
                                    <span className={theme.mode==='dark'? `${classes['footer-icon']} ${classes['footer-icon-dark']}`: classes["footer-icon"]}>
                                {/* <span className={classes["footer-icon"]}> */}
                                        <FontAwesomeIcon icon={faLinkedin} />
                                    </span>
                                    LinkedIn
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://instagram.com/composit_iitkgp?utm_medium=copy_link"
                                    target="_blank"
                                    className={theme.mode==='dark'? `${classes['footer-link']} ${classes['footer-link-dark']}`: classes["footer-link"]}

                                    // className={classes["footer-link"]}
                                >
                                    <span className={theme.mode==='dark'? `${classes['footer-icon']} ${classes['footer-icon-dark']}`: classes["footer-icon"]}>
                                {/* <span className={classes["footer-icon"]}> */}
                                        <FontAwesomeIcon icon={faInstagram} />
                                    </span>
                                    Instagram
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={theme.mode==='dark'? `${classes['footer-rule']} ${classes['footer-rule-dark']}`: classes["footer-rule"]}>

                {/* <div className={classes["footer-rule"]}>*/}</div> 
                <div className={theme.mode==='dark'? `${classes['footer-bottom']} ${classes['footer-bottom-dark']}`: classes["footer-bottom"]}>

                {/* <div className={classes["footer-bottom"]}> */}
                    <p>
                        2022 Composit IIT Kharagpur 27th Edition. All Rights
                        Reserved.
                    </p>
                    <p>Developed and maintained by composit</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
