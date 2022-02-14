import { NavLink } from "react-router-dom";

import styles from "./EventBody.module.css";
const EventBody = (props) => {
  const bkg = styles["bkg-" + props.colorId];

  return (
    <div className={styles.eventBody + " " + bkg}>
      <div className={styles.eventsvg}></div>
      <div className={styles.eventContent}>
        <div className={styles.eventName}>{props.title}</div>
        <div className={styles.eventSubName}>What is It?</div>
        <div className={styles.eventDescription}>{props.desc}</div>
        <div className={styles.registerDate}>
          <NavLink to="/register" className={styles.registerButton}>
            Register
          </NavLink>
          <div className={styles.date}>DATE: March 23rd, 2020</div>
        </div>
      </div>
    </div>
  );
};
export default EventBody;
