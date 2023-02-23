import { useState } from "react";

const useSearch = () => {
    const [query, setQuery] = useState('');
    const onQueryChange = (e) => {
        setQuery(e.target.value);
    }
    return { query, onQueryChange };
};

export default useSearch;