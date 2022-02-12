import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";

const ScrollContext = React.createContext({
    eventCarouselRef: null,
    scheduleRef: null,
    galleryRef: null,
    isSecondaryNavOpen: false,
    onScrollToEventCarousel: () => {},
    onScrollToSchedule: () => {},
    onScrollToGallery: () => {},
    onToggleSecondaryNav: () => {}
});

export const ScrollContextProvider = (props) => {
    const eventCarouselRef = useRef();
    const scheduleRef = useRef();
    const galleryRef = useRef();
    const [isSecondaryNavOpen, setIsSecondaryNavOpen] = useState(false);

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
        setIsSecondaryNavOpen(false);
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
        setIsSecondaryNavOpen(false);
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
        setIsSecondaryNavOpen(false);
    };

    const toggleSecondaryNavHandler = () => {
        setIsSecondaryNavOpen(prev => !prev);
    };

    history.listen((location, action) => {
        setIsSecondaryNavOpen(false);
    });

    return (
        <ScrollContext.Provider
            value={{
                eventCarouselRef,
                scheduleRef,
                galleryRef,
                isSecondaryNavOpen,
                onScrollToEventCarousel: scrollToEventCarouselHandler,
                onScrollToSchedule: scrollToScheduleHandler,
                onScrollToGallery: scrollToGalleryHandler,
                onToggleSecondaryNav: toggleSecondaryNavHandler
            }}
        >
            {props.children}
        </ScrollContext.Provider>
    );
};

export default ScrollContext;
