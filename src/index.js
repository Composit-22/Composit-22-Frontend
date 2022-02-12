import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ScrollContextProvider } from "./store/scroll-context";
import { EventContextProvider } from "./store/event-context";

import "./index.css";

import App from "./App";

ReactDOM.render(
    <BrowserRouter>
        <EventContextProvider>
            <ScrollContextProvider>
                <App />
            </ScrollContextProvider>
        </EventContextProvider>
    </BrowserRouter>,
    document.getElementById("root")
);
