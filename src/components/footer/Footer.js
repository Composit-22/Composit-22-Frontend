import classes from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faLinkedin,
    faYoutube,
    faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faMapMarkerAlt, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";


const Footer = () => {
    return (
        <footer className={classes["footer"]}>
            <div className={classes["footer-top"]}>
                <div>
                    <h1 className={classes["footer-top__heading"]}>
                        Quick Links
                    </h1>
                    <ul className={classes["footer-links"]}>
                        <li>
                            <a href="#" className={classes["footer-link"]}>
                                <span>&gt;</span> Login
                            </a>
                        </li>
                        <li>
                            <a href="#" className={classes["footer-link"]}>
                                <span>&gt;</span> Register
                            </a>
                        </li>
                        <li>
                            <a href="#" className={classes["footer-link"]}>
                                <span>&gt;</span> Events
                            </a>
                        </li>
                        <li>
                            <a href="#" className={classes["footer-link"]}>
                                <span>&gt;</span> Gallery
                            </a>
                        </li>
                        <li>
                            <a href="#" className={classes["footer-link"]}>
                                <span>&gt;</span> Schedule
                            </a>
                        </li>
                        <li>
                            <a href="#" className={classes["footer-link"]}>
                                <span>&gt;</span> About
                            </a>
                        </li>
                        <li>
                            <a href="#" className={classes["footer-link"]}>
                                <span>&gt;</span> Our Team
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h1 className={classes["footer-top__heading"]}>
                        Contact Us
                    </h1>
                    <ul className={classes["footer-links"]}>
                        <li className={classes["footer-contact"]}>
                        <span className={classes["footer-icon"]}><FontAwesomeIcon icon={faMapMarkerAlt} /></span>
                            Department of Metallurgical and Materials
                            Engineering, IIT Kharagpur, West Bengal 721302
                        </li>
                        <li className={classes["footer-contact"]}>
                            <span className={classes["footer-icon"]}><FontAwesomeIcon icon={faPhoneAlt} /></span>
                            096104 08669
                        </li>
                        <li className={classes["footer-contact"]}>
                            <span className={classes["footer-icon"]}><FontAwesomeIcon icon={faEnvelope} /></span>
                            composit2k22@gmail.com
                        </li>
                    </ul>
                </div>
                <div>
                    <h1 className={classes["footer-top__heading"]}>
                        Social Connect
                    </h1>
                    <ul className={classes["footer-links"]}>
                        <li>
                            <a
                                href="https://www.facebook.com/composit.iitkgp"
                                target="_blank"
                                className={classes["footer-link"]}
                            >
                                <span className={classes["footer-icon"]}><FontAwesomeIcon icon={faFacebook} /></span>
                                Facebook
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.linkedin.com/compnay/composit-iit-kharagpur/"
                                target="_blank"
                                className={classes["footer-link"]}
                            >
                                <span className={classes["footer-icon"]}><FontAwesomeIcon icon={faLinkedin} /></span>
                                LinkedIn
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.youtube.com/c/composit"
                                target="_blank"
                                className={classes["footer-link"]}
                            >
                                <span className={classes["footer-icon"]}><FontAwesomeIcon icon={faYoutube} /></span>
                                YouTube
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.composit.in/"
                                target="_blank"
                                className={classes["footer-link"]}
                            >
                                <span className={classes["footer-icon"]}><FontAwesomeIcon icon={faGoogle} /></span>
                                Google
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={classes["footer-rule"]}></div>
            <div className={classes["footer-bottom"]}>
                <p>
                    2022 Composit IIT Kharagpur 27th Edition. All Rights
                    Reserved.
                </p>
                <p>Developed and maintained by composit</p>
            </div>
        </footer>
    );
};

export default Footer;
