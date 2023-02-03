/** ChatGBT generated hook */

import { useState, useEffect } from 'react';

const useMediaQuery = (query: string) => {
    const [matches, setMatches] = useState(window.matchMedia(query).matches);

    useEffect(() => {
        const mediaQueryList = window.matchMedia(query);
        setMatches(mediaQueryList.matches);

        const onChange = () => setMatches(mediaQueryList.matches);
        mediaQueryList.addListener(onChange);

        return () => mediaQueryList.removeListener(onChange);
    }, [query]);

    return matches;
};
export default useMediaQuery;


// Documentation
// The useMediaQuery hook listens for changes in a media query and returns a boolean value that indicates whether the media query matches the current viewport size or not.

// It takes a single argument: query, which is the media query string you want to listen for changes in.

// const isWideScreen = useMediaQuery('(min-width: 1280px)');

// return (
//     <div>
//     Screen size: { isWideScreen ? 'Wide screen' : 'Narrow screen' }
// </div>
// );