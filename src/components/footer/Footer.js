import classes from "./Footer.module.css";

const Footer = () => {
    return (
        <footer className={classes["footer"]}>
            <div className={classes["footer-top"]}>
                <div>
                    <h1 className={classes["footer-top__heading"]}>Quick Links</h1>
                    <ul className={classes["footer-page-links"]}>
                        <li>
                            <a href="#" className={classes["footer-page-link"]}><span>&gt;</span> Login</a>
                        </li>
                        <li>
                            <a href="#" className={classes["footer-page-link"]}><span>&gt;</span> Register</a>
                        </li>
                        <li>
                            <a href="#" className={classes["footer-page-link"]}><span>&gt;</span> Events</a>
                        </li>
                        <li>
                            <a href="#" className={classes["footer-page-link"]}><span>&gt;</span> Gallery</a>
                        </li>
                        <li>
                            <a href="#" className={classes["footer-page-link"]}><span>&gt;</span> Schedule</a>
                        </li>
                        <li>
                            <a href="#" className={classes["footer-page-link"]}><span>&gt;</span> About</a>
                        </li>
                        <li>
                            <a href="#" className={classes["footer-page-link"]}><span>&gt;</span>  Our Team</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h1 className={classes["footer-top__heading"]}>Contact Us</h1>
                </div>
                <div>
                    <h1 className={classes["footer-top__heading"]}>Social Connect</h1>
                </div>
            </div>
            <div>
                <h3></h3>
                <h1></h1>
            </div>
        </footer>
    );
};

export default Footer;
