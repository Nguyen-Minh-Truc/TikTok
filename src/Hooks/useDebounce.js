import { useState, useEffect } from 'react';

function useDebounce(value, delay) {
    const [debounceValue, setDebounceValue] = useState(value);

    useEffect(() => {
       const hendler =  setTimeout(() => setDebounceValue(value), delay);

        return () => clearTimeout(hendler);
    }, [value]);

    return debounceValue;
}

export default useDebounce;
