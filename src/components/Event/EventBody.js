import Button from "../UI/Button";
import styles from "./EventBody.module.css";
const EventBody = function () {
  return (
    <div className={styles.eventBody}>
      <div className={styles.eventsvg}></div>
      <div className={styles.eventContent}>
        <div className={styles.eventName}>METACLIX</div>
        <div className={styles.eventSubName}>What is It?</div>
        <div className={styles.eventDescription}>
          Composit is the Congress of Metallurgical proffesionals involving
          Students, Industrialists and Teachers. It was conceived in 1994 by
          Prof. Indranil Manna. It’s major aim was to provide a common platform
          for fostering interactions and promoting innovations in our field.
          This platform encourages the showcase of talent in the field of
          metallurgy, along with providing the interactions between the best in
          the field.
          <br /> It is one of Asia’s biggest metallurgical fests, and is
          organized on a large scale every year, as it would be organized this
          year.
        </div>
        <Button className={styles.registerButton}>Register</Button>
        <div className={styles.date}>DATE: March 23rd, 2020</div>
      </div>
    </div>
  );
};
export default EventBody;
