import React from "react";
import "./landingabout.css";



const Landingabout = () => {
  return (
    <div className="container">
      <div className="BOX1" id="image1">
        PHOTO
      </div>

      <div className="content">
        <h2>ABOUT COMPOSIT</h2>
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

        <button onclick="myFunction()" id="myBtn">
          Learn more &#8594;
        </button>
      </div>
    </div>
  );
};

export default Landingabout;
