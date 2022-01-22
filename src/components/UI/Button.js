import classes from "./Button.module.css";

const Button = (props) => {

    const styles = classes['btn'] + ' ' + props.className;

    return (
        <button className={styles} wobble={props.wobble} onClick={props.onClick} onAnimationEnd={props.onAnimationEnd}>
            {props.children}
        </button>
    );
};

export default Button;