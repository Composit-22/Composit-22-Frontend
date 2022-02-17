import React from "react";
import { NavLink } from "react-router-dom";
// import "./landingabout.css";
import classes from './landingabout.css';
import { useContext } from "react";

import DarkContext from '../../store/DarkMode';

const Landingabout = () => {
  const {theme} = useContext(DarkContext);
  return (
    <div className="container">
<<<<<<< HEAD
      <div id="parent">
        <div className="BOX1">
          <img src="./img/rimg.svg" alt="abc" className="BOX2"/>
        </div>
      </div>
=======
       {/* <div id="parent">
        <div className="BOX1">
          <img src="./img/rimg.svg" alt="abc" className="BOX2"/>
        </div>
      </div>  */}
       {/* <div className={theme.mode==='dark'? `${classes['content']} ${classes['content-dark']}`: classes["content"]}> */}
      <div className="content"> 
>>>>>>> 689bdcba4a4386d3ad845af8c8e55fdf5311deaf

        <h2 >ABOUT COMPOSIT</h2>
        <p>
          Composit is the Congress of Metallurgical proffesionals involving
          Students, Industrialists and Teachers. It was conceived in 1994 by
          Prof. Indranil Manna. It’s major aim was to provide a common platform
          for fostering interactions and promoting innovations in our field.
          This platform encourages the showcase of talent in the field of
          metallurgy, along with providing the interactions between the best in
          the field.
          <br />
          <br />
          It is one of Asia’s biggest metallurgical fests, and is organized on a
          large scale every year, as it would be organized this year.
        </p>

        
{/* <NavLink to="/about" className={theme.mode==='dark'? `${classes['landing-about_btn']} ${classes['landing-about_btn-dark']}`: classes["landing-about_btn"]}> */}
<NavLink to="/about" className="landing-about_btn">
          Learn more &#8594;
        </NavLink>
      </div>
     </div>
  );
};

export default Landingabout;
