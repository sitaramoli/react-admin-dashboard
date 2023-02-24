import React from 'react'
import './Sidebar.scss';
import logo from '../../../assets/logo.svg';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <SidebarHeader />
            <SidebarNav />
        </div>
    );
};


const SidebarHeader = () => {
    return (
        <div className="sidebar-header">
            <img src={logo} alt="logo" className="sidebar-header__logo" />
            <h2 className="sidebar-header__title">Dashboard Kit</h2>
        </div>
    );
};

const SidebarNav = () => {
    const topNavList = [{
        icon: 'icon-overview',
        title: 'Overview',
        path: 'overview'
    },
    {
        icon: 'icon-ticket',
        title: 'Tickets',
        path: 'tickets'


    },
    {
        icon: 'icon-idea',
        title: 'Ideas',
        path: 'ideas'

    },
    {
        icon: 'icon-contact',
        title: 'Contacts',
        path: 'contacts'


    },
    {
        icon: 'icon-agent',
        title: 'Agents',
        path: 'agents'


    },
    {
        icon: 'icon-article',
        title: 'Articles',
        path: 'articles'


    }
    ];

    const bottomNavList = [{
        icon: 'icon-settings',
        title: 'Settings',
        path: 'settings'


    },
    {
        icon: 'icon-subscription',
        title: 'Subscriptions',
        path: 'subscriptions'


    }];
    const topNavItems = topNavList.map(navItem => <SidebarNavItem {...navItem} key={navItem.title} />);
    const bottomNavItems = bottomNavList.map(navItem => <SidebarNavItem {...navItem} key={navItem.title} />);

    return (
        <nav className="sidebar-nav">
            <div>
                {topNavItems}
            </div>
            <div className="sidebar-nav__divider"></div>
            <div>
                {bottomNavItems}
            </div>

        </nav>
    );
};
const SidebarNavItem = ({ icon, title, path }) => {

    return (
        <NavLink to={path}>
            <div className='nav-item' >
                <span className={`nav-item__icon ${icon}`}></span>
                <p className={`nav-item__title`}>{title}</p>
            </div>
        </NavLink>
    );
};

export default Sidebar;
