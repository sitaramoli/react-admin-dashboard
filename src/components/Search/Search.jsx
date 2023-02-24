import React, { useContext, useState } from 'react'
import { SearchContext } from '../../contexts/searchContext';
import './Search.scss'

const Search = () => {
    const [query, setQuery] = useContext(SearchContext);
    const onQueryChange = (e) => {
        setQuery(e.target.value);
    }

    const [showSearchBar, setShowSearchBar] = useState(false);
    const onSearchClick = () => {
        setShowSearchBar(!showSearchBar);
    }

    return (
        <div className="search">
            {showSearchBar && <input onChange={onQueryChange} type='text' value={query} placeholder="Search..." autoFocus />}
            <button className="search-button" onClick={onSearchClick}>
                <span className="icon-search search-button__icon"></span>
            </button>
        </div>
    );
}

export default Search