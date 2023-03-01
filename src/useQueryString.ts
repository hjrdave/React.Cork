/**Chat GBT generated hook */

import { useState, useEffect } from 'react';

const useQueryString = (key: string) => {
    const [value, setValue] = useState(() => new URLSearchParams(window.location.search).get(key));

    useEffect(() => {
        const onChange = () => setValue(new URLSearchParams(window.location.search).get(key));
        window.addEventListener('popstate', onChange);
        return () => window.removeEventListener('popstate', onChange);
    }, [key]);

    return value;
};
export default useQueryString;

// The useQueryString hook reads the value of a specific query string parameter from the URL and returns it.

// It takes a single argument: key, which is the name of the query string parameter you want to retrieve the value of.

// const name = useQueryString('name');

// return (
//     <div>
//     Query string: name = { name }
//         < /div>
// );