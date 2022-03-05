import modules from "./Profile.module.css";
import { NavLink } from "react-router-dom";
import { useContext } from "react";

import DarkContext from '../../store/DarkMode';

const profile_data = {
    name: "Utsav Mehta",
    place: "Apne, Ghar se.",
    email: "utsavmehta@gmail.com",
    phone: "9876543210",
    registered_on: "29/02/2022",
    college: "LPU"
}

const dummy_reg_events = [
    { name: "Enigma", link: "#" },
    { name: "Metallomania", link: "#" },
    { name: "Technova", link: "#" },
    { name: "Excavate", link: "#" }
];
// const dummy_reg_events = []

const Profile = () => {
    const {theme} = useContext(DarkContext);

    return (
        <div className={theme.mode === 'dark' ? `${modules["container"]} ${modules["container_dark"]}`: modules["container"]}>
            <div className={theme.mode === 'dark' ? `${modules["content"]} ${modules["content_dark"]}`: modules["content"]}>
                <div className={theme.mode === 'dark' ? `${modules["heading"]} ${modules["text_dark"]}`: modules["heading"]}>
                    <h2>MY&nbsp;&nbsp;PROFILE</h2>
                </div>
                <div className={modules["info"]}>
                    <div className={theme.mode === 'dark' ? `${modules["card"]} ${modules["bkg_dark"]}`: modules["card"]}>
                        <img src="logo512.png" alt="Profile Picture" className={modules["card_img"]} />
                        <div className={theme.mode === 'dark' ? `${modules["card_name"]} ${modules["text_dark"]}`: modules["card_name"]}>{profile_data.name.split(' ')[0]}</div>
                        <div className={theme.mode === 'dark' ? `${modules["card_place"]} ${modules["text_dark"]}`: modules["card_place"]}>{profile_data.place}</div>
                    </div>
                    <div className={theme.mode === 'dark' ? `${modules["details"]} ${modules["bkg_dark"]}`: modules["details"]}>
                        <div>
                            <div className={theme.mode === 'dark' ? `${modules["details_category"]} ${modules["text_dark"]}`: modules["details_category"]}>Name</div>
                            <div className={modules["details_value"]}>{profile_data.name}</div>
                        </div>
                        <div>
                            <div className={theme.mode === 'dark' ? `${modules["details_category"]} ${modules["text_dark"]}`: modules["details_category"]}>College</div>
                            <div className={modules["details_value"]}>{profile_data.college}</div>
                        </div>
                        <div>
                            <div className={theme.mode === 'dark' ? `${modules["details_category"]} ${modules["text_dark"]}`: modules["details_category"]}>Mobile</div>
                            <div className={modules["details_value"]}>{profile_data.phone}</div>
                        </div>
                        <div>
                            <div className={theme.mode === 'dark' ? `${modules["details_category"]} ${modules["text_dark"]}`: modules["details_category"]}>Email</div>
                            <div className={modules["details_value"]}>{profile_data.email}</div>
                        </div>
                        <div>
                            <div className={theme.mode === 'dark' ? `${modules["details_category"]} ${modules["text_dark"]}`: modules["details_category"]}>Registered on</div>
                            <div className={modules["details_value"]}>{profile_data.registered_on}</div>
                        </div>
                    </div>
                </div>
            </div>

            {
                dummy_reg_events.length > 0 ?
                    <div className={modules["events_container"]}>
                        {/* <div className={modules["metal_bar"]}/> */}
                        <div className={theme.mode === 'dark' ? `${modules["reg_events"]} ${modules["content_dark"]}`: modules["reg_events"]}>
                            <h2 className={theme.mode === 'dark' ? `${modules["events_heading"]} ${modules["text_dark"]}`: modules["events_heading"]}>Registered Events</h2>

                            {
                                dummy_reg_events.map((event) => {
                                    return (
                                        <div className={theme.mode === 'dark' ? `${modules["event_button"]} ${modules["bkg_dark"]}`: modules["event_button"]}>
                                            <div className={theme.mode === 'dark' ? `${modules["event_name"]} ${modules["text_dark"]}`: modules["event_name"]}>{event.name}</div>
                                            <NavLink to={event.link} className={modules["event_link"]}>Track Event</NavLink>
                                        </div>
                                    );
                                }
                                )
                            }

                        </div>
                        {/* <div className={modules["smelting_img"]}/> */}
                    </div>
                    : ''
            }
        </div>
    );
}

export default Profile;