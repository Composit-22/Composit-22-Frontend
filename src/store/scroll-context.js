import React, { useRef } from "react";
import { useHistory } from "react-router-dom";

const ScrollContext = React.createContext({
    eventCarouselRef: null,
    scheduleRef: null,
    galleryRef: null,
    onScrollToEventCarousel: () => {},
    onScrollToSchedule: () => {},
    onScrollToGallery: () => {}
});

export const ScrollContextProvider = (props) => {
    const eventCarouselRef = useRef();
    const scheduleRef = useRef();
    const galleryRef = useRef();

    const history = useHistory();

    const scrollToEventCarouselHandler = () => {
        const performScroll = () => {
            const position = eventCarouselRef.current.getBoundingClientRect().top;
            var headerOffset = 180;
            var offsetPosition = position + window.pageYOffset - headerOffset;
            window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        };
        if (eventCarouselRef.current) {
            performScroll();
        } else {
            history.push("/");
            setTimeout(performScroll, 100);
        }
    };

    const scrollToScheduleHandler = () => {
        const performScroll = () => {
            const position = scheduleRef.current.getBoundingClientRect().top;
            var headerOffset = 180;
            var offsetPosition = position + window.pageYOffset - headerOffset;
            window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        };
        if (scheduleRef.current) {
            performScroll();
        } else {
            history.push("/");
            setTimeout(performScroll, 100);
        }
    };

    const scrollToGalleryHandler = () => {
        const performScroll = () => {
            const position = galleryRef.current.getBoundingClientRect().top;
            var headerOffset = 180;
            var offsetPosition = position + window.pageYOffset - headerOffset;
            window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        };
        if (galleryRef.current) {
            performScroll();
        } else {
            history.push("/");
            setTimeout(performScroll, 100);
        }
    };

    return (
        <ScrollContext.Provider
            value={{
                eventCarouselRef,
                scheduleRef,
                galleryRef,
                onScrollToEventCarousel: scrollToEventCarouselHandler,
                onScrollToSchedule: scrollToScheduleHandler,
                onScrollToGallery: scrollToGalleryHandler
            }}
        >
            {props.children}
        </ScrollContext.Provider>
    );
};

export default ScrollContext;
