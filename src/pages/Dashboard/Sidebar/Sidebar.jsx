import React from 'react'
import './Sidebar.scss';
import logo from '../../../assets/logo.svg';

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
        active: false
    },
    {
        icon: 'icon-ticket',
        title: 'Tickets',
        active: true

    },
    {
        icon: 'icon-idea',
        title: 'Ideas',
        active: false

    },
    {
        icon: 'icon-contact',
        title: 'Contacts',
        active: false

    },
    {
        icon: 'icon-agent',
        title: 'Agents',
        active: false

    },
    {
        icon: 'icon-article',
        title: 'Articles',
        active: false

    }
    ];

    const bottomNavList = [{
        icon: 'icon-settings',
        title: 'Settings',
        active: false

    },
    {
        icon: 'icon-subscription',
        title: 'Subscriptions',
        active: false

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
const SidebarNavItem = ({ icon, title }) => {

    return <div className='nav-item' >
        <span className={`nav-item__icon ${icon}`}></span>
        <p className={`nav-item__title`}>{title}</p>
    </div>
};

export default Sidebar;
