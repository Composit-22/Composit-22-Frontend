import classes from './About.module.css';

const About = () => {
    return (
        <div className={classes["container"]}>
            <div className={classes["bkg"]}>
                <div className={classes["left_img"]} />

                <div className={classes["content"]}>
                    <h2>COMPOSIT ’22</h2>

                    <p>
                        <br />
                        Composit is  the Congress of Metallurgical proffesionals involving Students,
                        Industrialists and Teachers. It was conceived in 1994 by Prof. Indranil Manna. It’s
                        major aim was to provide a common platform for fostering interactions and
                        promoting innovations in our field. This platform encourages the showcase of talent
                        in the field of metallurgy, along with providing the interactions between the best in
                        the field.
                        <br />
                        <br />
                        It is one of Asia’s biggest metallurgical fests, and is organized on a large scale every year,
                        as it would be organized this year.
                    </p>
                </div>
                <div className={classes["right_img"]} />
            </div>

        </div>

    );
}

export default About;