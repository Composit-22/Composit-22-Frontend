import React from "react";

// const DUMMY_EVENTS = [
//     {
//         id: 0,
//         title: "Metallomania",
//         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//         min: 1,
//         max: 3
//     },
//     {
//         id: 1,
//         title: "Enigma",
//         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//         min: 1,
//         max: 3
//     },
//     {
//         id: 2,
//         title: "Metaclix",
//         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//         min: 1,
//         max: 3
//     },
//     {
//         id: 3,
//         title: "Technova",
//         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//         min: 1,
//         max: 3
//     },
//     {
//         id: 4,
//         title: "Excavate",
//         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//         min: 1,
//         max: 3
//     },
//     {
//         id: 5,
//         title: "Metallomania",
//         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//         min: 1,
//         max: 3
//     },
//     {
//         id: 6,
//         title: "Enigma",
//         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//         min: 1,
//         max: 3
//     },
//     {
//         id: 7,
//         title: "Metaclix",
//         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//         min: 1,
//         max: 3
//     },
//     {
//         id: 8,
//         title: "Technova",
//         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//         min: 1,
//         max: 3
//     },
//     {
//         id: 9,
//         title: "Excavate",
//         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//         min: 1,
//         max: 3

//     },
// ];

const DUMMY_EVENTS = [
    {
        id: 0,
        title: "Case Study",
        // desc: "Case studies are one of the best teaching tools for enhancing and testing the practical knowledge of students. It asks for a detailed analysis of a market situation or any organization or a similar group, and the students are required to use their problem-solving skills to rectify the complications in it.The strategic actions which a group proposes are backed up with an in-depth research of the organization and the market conditions. These solutions are meant to provide the company with a competitive edge over others.Suggested topics for case study:Materials selection for a plug,Examination of an artefact,Hydrogen Economy,Joining,Failure Analysis Of Corrosion On Stainless Steel Fasteners,Space shuttle tiles ",
        desc: "Investigate some cases in the Metallurgical and Materials industry.",
        min: 1,
        max: 5,
        Details:
            "https://drive.google.com/file/d/1UAasODfMhTUclqazKtEUBP0cCGTYJnzV/view?usp=sharing",
        participant_info: "Open to everyone"
    },
    {
        id: 1,
        title: "Technova - Research Scholar Day",
        desc: "Technical paper contest to present original scientific work on various topics like Physical Metallurgy and Mechanical Metallurgy, Extractive Metallurgy and Process Modelling, Advanced Materials and Materials Processing, Functional Materials, Nanotechnology, Biomaterials, Computational Material Science",
        min: 1,
        max: 1,
        Details:
            "https://drive.google.com/file/d/1n1MOVTKqAaE3EpdxEVj61b_DWhC2QCa9/view?usp=sharing",
        participant_info : "Open to everyone"
    },
    {
        id: 2,
        title: "Ideathon",
        desc: "Ideathon is a competition to be conducted in COMPOSIT 2022 which is related to the pitching of ideas related to metallurgy / materials. It could be a competition where participants in teams can suggest startup/business proposals to brainstorm and validate their ideas from the judges.Startup ideas can be about anything related to metallurgy : Energy Materials, Biomaterials, Nanomaterials, Polymers and materials for technology like 3D printing, Anything other related to metallurgy.",
        min: 1,
        max: 5,
        // Details:
        //     "https://drive.google.com/file/d/1B_uXN5zO6mLla_ROKa716_AiCID1x26G/view?usp=sharing",
        participant_info: "Any student pursuing B.Tech, M.Tech degree (no age restriction). Team members from different colleges in INDIA."
    },
    // {
    //     id: 3,
    //     title: "Excavate",
    //     desc: "Data Analytics is used in many industries to allow companies and organization to  make better business decisions and in the sciences to verify or disprove existing  models or theories. It provides an opportunity to find insights in types of data and content, to make  the business agiler, and to answer questions that were previously considered  beyond reach. This event will aim to gauge your presentation and data analysis  skills to the fullest.  ",
    //     min: 1,
    //     max: 2,
    //     Details:
    //         "https://drive.google.com/file/d/1ZOFbhSddCPIn-ffOkYlgG9ZsrBachkTG/view?usp=sharing",
    //     participant_info: "Any student pursuing B.Tech, M.Tech degree (no age restriction). Team members from different colleges in INDIA."
    // },
    {
        id: 3,
        title: "Metallomania - Research Scholar Day",
        desc: "A technical poster presentation competition that acts as a platform to express and present original research to your peers, teachers and industry in the fields of metallurgy and materials. The goal of the poster presentation competition is to offer a venue to students to present their original research in the field of metallurgy and to provide a forum for informal discussion with interested students, teachers and industrialists.",
        min: 1,
        max: 2,
        Details:
            "https://drive.google.com/file/d/1FM7S7AtbyYXHMn7vVgK5q66catOA-JBT/view?usp=sharing",
        participant_info: "Any student pursuing B.Tech, M.Tech degree (no age restriction). Team members from different colleges in INDIA."
    },
    {
        id: 4,
        title: "Meta-Clix",
        desc: "“In Photography There's A Reality So Subtle That It Becomes More Real Than Reality”-Alfred Stieglitz.A photography contest to catch the snaps for amateur enthusiasts and photographers.It would include themes based on material phenomena.",
        min: 1,
        max: 1,
        Details:
            "https://drive.google.com/file/d/1aJU0xO32rBGrH50Sxp5IANyqXGrFzVII/view?usp=drivesdk",
        participant_info: "Any student pursuing B.Tech, M.Tech degree (no age restriction). Team members from different colleges in INDIA."
    },
];

const EventContext = React.createContext({
    events: null,
});

export const EventContextProvider = (props) => {
    return (
        <EventContext.Provider
            value={{
                events: DUMMY_EVENTS,
            }}
        >
            {props.children}
        </EventContext.Provider>
    );
};

export default EventContext;
