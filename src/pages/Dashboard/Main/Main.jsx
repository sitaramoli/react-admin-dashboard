import React from 'react'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import Tickets from './Tickets/Tickets';

const Main = () => {
    return (
        <div className='main'>
            <Outlet />
        </div>
    )
}

export default Main