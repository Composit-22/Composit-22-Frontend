import classes from "./TeamCard.module.css";
import img from "./dummy.jpg";
import { useState } from "react";
const TeamCard = function (props) {
  const [onState, setOnState] = useState(false);
  const [offState, setOffState] = useState(true);
  const enterhoverHandler = function () {
    setOnState(true);
    setOffState(false);
  };
  const leavehoverHandler = function () {
    setOnState(false);
    setOffState(true);
  };
  return (
    <div
      onMouseOver={enterhoverHandler}
      onMouseOut={leavehoverHandler}
      className={`${classes.card}`}
    >
      {
        <img
          className={`${classes.cardimage}  ${onState ? classes.mouseOn : ""} ${
            offState ? classes.mouseOff : ""
          }`}
          src={img}
        ></img>
      }
      <div
        className={`${classes.offHoverCardText} ${
          onState ? classes.cardText : ""
        }`}
      >
        <div>Name: Priyanshu Gautam</div>
        <br />
        <div>Team: Frontend</div>
      </div>
    </div>
  );
};
export default TeamCard;
