import React from 'react'
import Sidebar from './Sidebar/Sidebar'
import './index.scss';
import Main from './Main/Main';
import useSearch from '../../hooks/useSearch';
import Header from './Header/Header';

const Dashboard = () => {
    const { query, onQueryChange } = useSearch();
    return (
        <div className='dashboard'>
            <Sidebar />
            <Header query={query} onQueryChange={onQueryChange} />
            <Main query={query} />
        </div>
    )
}

export default Dashboard;