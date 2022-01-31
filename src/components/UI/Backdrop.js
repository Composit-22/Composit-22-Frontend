import ReactDOM from "react-dom";

import classes from "./Backdrop.module.css";

const Backdrop = (props) => {
    return (
        <>
            {ReactDOM.createPortal(
                <div className={classes["backdrop"]}>
                    <button onClick={props.onClose}>
                        <svg
                            viewBox="0 0 100 80"
                            width="40"
                            height="40"
                            className={classes["close"]}
                        >
                            <line
                                x1="0"
                                y1="0"
                                x2="100"
                                y2="80"
                                className={classes["close__fragment"]}
                            />
                            <line
                                x1="0"
                                y1="80"
                                x2="100"
                                y2="0"
                                className={classes["close__fragment"]}
                            />
                        </svg>
                    </button>
                </div>,
                document.getElementById("backdrop-root")
            )}
        </>
    );
};

export default Backdrop;
