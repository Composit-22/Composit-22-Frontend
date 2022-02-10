import modules from "./Profile.module.css";

const Profile = () => {
    return (
        <div className={modules["container"]}>
            <div className={modules["content"]}>
                <div className={modules["heading"]}>
                    <h2>MY PROFILE</h2>
                </div>
                <div className={modules["info"]}>
                    <div className={modules["card"]}>
                        <img src="logo512.png" alt="Profile Picture" />
                        <div className={modules["name"]}>Utsav</div>
                        <div className={modules["place"]}>Apne, Ghar se.</div>
                    </div>
                    <div className={modules["details"]}>
                        <div>
                            <div className={modules["category"]}>Name</div>
                            <div className={modules["value"]}> Utsav Mehta</div>
                        </div>
                        <div>
                            <div className={modules["category"]}>Name</div>
                            <div className={modules["value"]}> Utsav Mehta</div>
                        </div>
                        <div>
                            <div className={modules["category"]}>Name</div>
                            <div className={modules["value"]}> Utsav Mehta</div>
                        </div>
                        <div>
                            <div className={modules["category"]}>Name</div>
                            <div className={modules["value"]}> Utsav Mehta</div>
                        </div>
                        <div>
                            <div className={modules["category"]}>Name</div>
                            <div className={modules["value"]}> Utsav Mehta</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={modules["reg_events"]}></div>
        </div>
    );
}

export default Profile;