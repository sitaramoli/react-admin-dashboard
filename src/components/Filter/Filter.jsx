import React, { useState } from 'react'
import './Filter.scss'

const Filter = ({ onFilterKeyChange, filterKey }) => {
    const filterList = ['High', 'Normal', 'Low'];
    const [showFilterList, setShowFilterList] = useState(false);
    const handleFilterButtonClick = () => {
        setShowFilterList(!showFilterList);
    };

    return (
        <div className="filter">
            <button className='filter__button' onClick={handleFilterButtonClick}>
                <span className="filter__button__icon icon-filter"></span>
                <span className="filter__button__text">{filterKey ? filterKey : 'Filter'}</span>
            </button>
            {showFilterList && <div className="filter__options">
                {filterList.map(filterOption => {
                    return <button value={filterOption} key={filterOption} onClick={onFilterKeyChange} className={`${filterOption === filterKey ? `filter__options__option filter__options__option--active` : `filter__options__option`}`}>{filterOption}</button>
                })}
            </div>}
        </div>
    );
}

export default Filter;