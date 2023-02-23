import React from 'react'
import Notifications from '../../../../components/Notifications/Notifications';
import Profile from '../../../../components/Profile/Profile';
import Search from '../../../../components/Search/Search';
import useSearch from '../../../../hooks/useSearch';
import './Header.scss';

const Header = ({ query, onQueryChange }) => {

    return (
        <header className="header">
            <h3 className="header__title">Tickets</h3>
            <div className="header__actions">
                <div className="header__actions__icons">
                    <Search onQueryChange={onQueryChange} query={query} />
                    <Notifications />
                </div>
                <div className="header__actions__divider"></div>
                <Profile />
            </div>
        </header>
    );
}

export default Header