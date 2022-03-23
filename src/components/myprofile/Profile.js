import modules from "./Profile.module.css";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import DarkContext from '../../store/DarkMode';
import UserContext from "../../store/user-context";

const Events = {
    '0': {
        name: 'Case Study',
        link: '/event/0'
    },

    '1': {
        name: 'Technova',
        link: '/event/1'
    },

    '2': {
        name: 'Ideathon',
        link: '/event/2'
    },

    '3': {
        name: 'Excavate',
        link: '/event/3'
    },

    '4': {
        name: 'Metallomania',
        link: '/event/4'
    },

    '5': {
        name: 'Meta-Clix',
        link: '/event/5'
    },
}

const Profile = () => {

    const { theme } = useContext(DarkContext);
    const userCtx = useContext(UserContext);

    const reg_events = Array.from(userCtx.user.reg_events);
    console.log(reg_events);
    console.log(userCtx.user.reg_events, typeof (userCtx.user.reg_events));
    return (
        <div className={theme.mode === 'dark' ? `${modules["container"]} ${modules["container_dark"]}` : modules["container"]}>
            <div className={theme.mode === 'dark' ? `${modules["content"]} ${modules["content_dark"]}` : modules["content"]}>
                <div className={theme.mode === 'dark' ? `${modules["heading"]} ${modules["text_dark"]}` : modules["heading"]}>
                    <h2>MY&nbsp;&nbsp;PROFILE</h2>
                </div>
                <div className={modules["info"]}>
                    {/* <div className={theme.mode === 'dark' ? `${modules["card"]} ${modules["bkg_dark"]}`: modules["card"]}>
                        <img src="logo512.png" alt="Profile Picture" className={modules["card_img"]} />
                        <div className={theme.mode === 'dark' ? `${modules["card_name"]} ${modules["text_dark"]}`: modules["card_name"]}>{userCtx.user.userName}</div>
                    </div> */}
                    <div className={theme.mode === 'dark' ? `${modules["details"]} ${modules["bkg_dark"]}` : modules["details"]}>
                        <div>
                            <div className={theme.mode === 'dark' ? `${modules["details_category"]} ${modules["text_dark"]}` : modules["details_category"]}>Name</div>
                            <div className={modules["details_value"]}>{userCtx.user.name}</div>
                        </div>
                        <div>
                            <div className={theme.mode === 'dark' ? `${modules["details_category"]} ${modules["text_dark"]}` : modules["details_category"]}>College</div>
                            <div className={modules["details_value"]}>{userCtx.user.college}</div>
                        </div>
                        <div>
                            <div className={theme.mode === 'dark' ? `${modules["details_category"]} ${modules["text_dark"]}` : modules["details_category"]}>Mobile</div>
                            <div className={modules["details_value"]}>{userCtx.user.phone}</div>
                        </div>
                        <div>
                            <div className={theme.mode === 'dark' ? `${modules["details_category"]} ${modules["text_dark"]}` : modules["details_category"]}>Email</div>
                            <div className={modules["details_value"]}>{userCtx.user.email}</div>
                        </div>
                        <div>
                            <div className={theme.mode === 'dark' ? `${modules["details_category"]} ${modules["text_dark"]}` : modules["details_category"]}>Registered on</div>
                            <div className={modules["details_value"]}>{userCtx.user.registeredOn}</div>
                        </div>
                    </div>
                </div>
            </div>

            {userCtx.user.reg_events.length > 0 ?
                <div className={modules["events_container"]}>
                    {/* <div className={modules["metal_bar"]}/> */}
                    <div className={theme.mode === 'dark' ? `${modules["reg_events"]} ${modules["content_dark"]}` : modules["reg_events"]}>
                        <h2 className={theme.mode === 'dark' ? `${modules["events_heading"]} ${modules["text_dark"]}` : modules["events_heading"]}>Registered Events</h2>

                        {
                            reg_events.map((event) => {

                                const _event = Events[event];
                                return (
                                    <div className={theme.mode === 'dark' ? `${modules["event_button"]} ${modules["bkg_dark"]}` : modules["event_button"]}>
                                        <div className={theme.mode === 'dark' ? `${modules["event_name"]} ${modules["text_dark"]}` : modules["event_name"]}>{_event.name}</div>
                                        <NavLink to={_event.link} className={modules["event_link"]}>Track Event</NavLink>
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

            {/* <div className={`${modules["reset-pwd-container"]}`}>
                <button className={`${modules["reset-pwd-btn"]}`} onClick={() => { window.location.pathname = ('/resetPwd') }}>
                    Reset Password
                </button>
            </div> */}
        </div>
    );
}

export default Profile;