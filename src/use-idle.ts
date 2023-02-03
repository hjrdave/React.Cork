/**Chat GBT generated hook */

import { useState, useEffect, useRef } from 'react';

const useIdle = (timeout = 5000) => {
    const [isIdle, setIsIdle] = useState(false);
    const timeoutId = useRef<number | null>(null);

    useEffect(() => {
        const onEvent = () => {
            clearTimeout(timeoutId.current!);
            setIsIdle(false);
            timeoutId.current = window.setTimeout(() => setIsIdle(true), timeout);
        };

        window.addEventListener('mousemove', onEvent);
        window.addEventListener('keydown', onEvent);

        return () => {
            window.removeEventListener('mousemove', onEvent);
            window.removeEventListener('keydown', onEvent);
            clearTimeout(timeoutId.current!);
        };
    }, [timeout]);

    return isIdle;
};
export default useIdle;

// Documentation
// The useIdle hook tracks user activity(mouse movements and key presses) and returns a boolean value that indicates whether the user has been idle for a certain amount of time or not.

// It takes an optional argument: timeout, which is the amount of time in milliseconds after which the hook should consider the user to be idle.The default value is 5000 milliseconds(5 seconds).

// You can use the hook in your component like this: