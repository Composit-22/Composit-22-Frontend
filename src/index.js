import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ScrollContextProvider } from "./store/scroll-context";
import { EventContextProvider } from "./store/event-context";
import { UserContextProvider } from "./store/user-context";
import { DarkModeProvider } from "./store/DarkMode";

import "./index.css";

import App from "./App";

ReactDOM.render(
    <BrowserRouter>
        <UserContextProvider>
            <EventContextProvider>
                <ScrollContextProvider>
                    <DarkModeProvider>
                        <App />
                    </DarkModeProvider>
                </ScrollContextProvider>
            </EventContextProvider>
        </UserContextProvider>
    </BrowserRouter>,
    document.getElementById("root")
);
