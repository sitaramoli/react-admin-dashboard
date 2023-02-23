import React from 'react'
import useSearch from '../../../hooks/useSearch';
import Header from './Header/Header'
import './Main.scss';
import Tickets from './Tickets/Tickets';

const Main = () => {
    const { query, onQueryChange } = useSearch();
    return (
        <div className='main'>
            <Header query={query} onQueryChange={onQueryChange} />
            <Tickets query={query} />
        </div>
    )
}

export default Main