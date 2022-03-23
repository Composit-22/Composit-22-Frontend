import classes from "./About.module.css";
// import ScrollContext from "../../store/scroll-context";
import DarkContext from "../../store/DarkMode";
import { useContext } from "react";
import hod from "../ourteam/imgs/Heads/karabi.jpeg";
const About = () => {
  // const scrollCtx = useContext(ScrollContext);
  const { theme } = useContext(DarkContext);
  return (
    <div className={classes["container"]}>
      <div
        className={
          theme.mode === "dark"
            ? `${classes["bkg"]} ${classes["bkg-dark"]}`
            : classes["bkg"]
        }
      >
        {/* <div className={classes["bkg"]}> */}
        <div className={classes["left_img"]} />
        <div
        style={{display:"flex",flexDirection:"column",textAlign:"center"}}
        
          className={
            theme.mode === "dark"
              ? `${classes["content"]} ${classes["content-dark"]}`
              : classes["content"]
          }
        >
          {/* <div className={classes["content"]}> */}
           <h2>Composit'22</h2>

          <p style={{
            fontSize:"20px",textAlign:"justify",color:"#000",fontWeight:"700"
        }}>
            <br />
            The Society of Metallurgical Engineers, IIT Kharagpur is the
            conducting body of the annual departmental fest, COMPOSIT, to
            promote the field of Materials Science in India by providing a
            platform for students to showcase their research work, thinking
            abilities, and reasoning aptitude. The largest fest in the genre all
            over India, it is a unique congregation of students, professionals,
            academicians, and eminent personalities sharing the belief that
            materials will define the next revolution; a path-breaking concept
            to compile and share knowledge and enthusiasm for the development of
            ‘Science of Materials’.
            <br />
            <br />
            Congress of Metallurgical Professionals involving Students, Industry
            and Teachers (COMPOSIT) is a national meet conducted by the Society
            of Metallurgical Engineers (SME), Department of Metallurgical and
            Materials Engineering, Indian Institute of Technology Kharagpur. The
            idea of COMPOSIT was conceived in 1994 to provide a common platform
            for fostering interactions and invoking innovations among those
            involved in the field of Metallurgical and Materials Engineering. At
            COMPOSIT we aim to encourage the young and enthusiastic
            metallurgists from all over the country to showcase their talent. It
            also gives them an opportunity of a lifetime to interact with the
            stalwarts in the field who share their expertise. After being
            stagnant for two consecutive years COMPOSIT'22 is back with a bang.
            <br />
            <br />
            IIT Kharagpur is all set to witness yet another edition of COMPOSIT
            which guarantees all its trademark features and events.
          </p>
          <br/>
          <br/>
          <h2>Message From HOD...</h2>
          <div>
          
         
       
          <img style={{borderRadius:"50%",paddingTop:"5rem",marginTop:"20px"}} src={hod}></img>
          </div>
          
          <p style={{
            fontSize:"20px",textAlign:"justify",color:"#000",fontWeight:"700"
        }}>
            <br></br>
            It gives me great pleasure to announce that after a two-year absence
            owing to the Covid-19 pandemic, the Department of Metallurgical and
            Materials Engineering, IIT Kharagpur is back with two of our
            flagship events: the technical conference and fest COMPOSIT 2022 and
            the 11th Annual Research Scholars’ Day. While the pandemic caused
            great disruption to research and academics worldwide, we
            see today the light at the end of the tunnel. This year, we are all
            set to conduct the Research Scholars’ Day in conjunction with
            COMPOSIT, the first-ever collaboration of this sort. The motive is
            to showcase the calibre of our Department’s research and researchers
            on a national scale, as well as enhance collaboration and
            participation to create a constructive environment for core research
            in India. We hope that this new venture would allow UG, PG and RS
            students from IIT Kharagpur and across the country to be exposed to
            the best research and ideas in multiple sub-fields of Materials
            Engineering. COMPOSIT was conceived in 1994 and organised annually
            by the Society of Metallurgical Engineers (SME), IIT Kharagpur. A
            one-of-its-kind congress, it brings together students, academicians
            and industrialists in the fields of Metallurgy and Materials Science
            to discuss, learn and present original research, the latest
            advancements and compete in events that test their intellectual
            skills. The Research Scholars’ Day began as an initiative to give RS
            students a platform to talk about their own research, learn and
            understand the work of their peers, and foster a sense of community.
            We are proud to see these unique traditions persisting today, and
            hope that they would continue long into the future. On behalf of the
            Department, I would like to thank the students, members of faculty,
            and all stakeholders who have worked hard to make this possible. The
            long-awaited return of these events has brought a much-needed buzz
            of energy and a smile to our faces. I heartily wish the organizing
            team of both events the very best, and I believe that through their
            efforts we can foster inspiration and collaboration to create a
            tight-knit community of Metallurgical and Materials Engineers.
          </p>
         
        </div>
        <div className={classes["right_img"]} />
      </div>
    </div>
  );
};

export default About;
