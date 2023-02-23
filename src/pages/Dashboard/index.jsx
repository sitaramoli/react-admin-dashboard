import React from 'react'
import Sidebar from './Sidebar/Sidebar'
import './index.scss';
import Main from './Main/Main';

const Dashboard = () => {
    return (
        <div className='dashboard'>
            <Sidebar />
            <Main />
        </div>
    )
}

export default Dashboard;