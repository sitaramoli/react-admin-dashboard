import { useState } from "react";

const useFilter = () => {
    const [filterKey, setFilterKey] = useState();
    const onFilterKeyChange = (e) => {
        if (e.target.value === filterKey) {
            setFilterKey();
        }
        else {
            setFilterKey(e.target.value);
        }
    }
    return { filterKey, onFilterKeyChange };
}

export default useFilter;