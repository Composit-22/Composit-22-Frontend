import modules from "./Profile.module.css";
import { NavLink } from "react-router-dom";

const profile_data = {
    name: "Utsav Mehta",
    place: "Apne, Ghar se.",
    email: "utsavmehta@gmail.com",
    phone: "9876543210",
    registered_on: "29/02/2022",
    college: "LPU"
}

const dummy_reg_events = [{ name: "Enigma", link: "#" }, { name: "Metallomania", link: "#" }, { name: "Technova", link: "#" }, { name: "Excavate", link: "#" }];
// const dummy_reg_events = []

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
                        <div className={modules["name"]}>{profile_data.name.split(' ')[0]}</div>
                        <div className={modules["place"]}>{profile_data.place}</div>
                    </div>
                    <div className={modules["details"]}>
                        <div>
                            <div className={modules["category"]}>Name</div>
                            <div className={modules["value"]}>{profile_data.name}</div>
                        </div>
                        <div>
                            <div className={modules["category"]}>College</div>
                            <div className={modules["value"]}>{profile_data.college}</div>
                        </div>
                        <div>
                            <div className={modules["category"]}>Mobile</div>
                            <div className={modules["value"]}>{profile_data.phone}</div>
                        </div>
                        <div>
                            <div className={modules["category"]}>Email</div>
                            <div className={modules["value"]}>{profile_data.email}</div>
                        </div>
                        <div>
                            <div className={modules["category"]}>Registered on</div>
                            <div className={modules["value"]}>{profile_data.registered_on}</div>
                        </div>
                    </div>
                </div>
            </div>

            {
                dummy_reg_events.length > 0 ?
                    <div className={modules["reg_events"]}>
                        <h2>Registered Events</h2>

                        {

                            dummy_reg_events.map((event) => {
                                return (
                                    <div className={modules["event_button"]}>
                                        <div className={modules["event_name"]}>{event.name}</div>
                                        <NavLink to={event.link} className={modules["track_event"]}>Track Event</NavLink>
                                    </div>
                                );
                            }
                            )
                        }

                    </div>
                    : ''
            }
        </div>
    );
}

export default Profile;