import React, { useState } from 'react'
import './Notifications.scss';

const Notifications = () => {
    const [showNotifications, setShowNotifications] = useState(false);

    const onNotificationsClick = () => {
        setShowNotifications(!showNotifications);
    }
    return (
        <div className="notifications">
            <button className="notifications__button" onClick={onNotificationsClick}>
                <span className="icon-notification notifications__button__icon"></span>
            </button>
            {showNotifications && <NotificationsList />}
        </div>
    );
}
export default Notifications;


const NotificationsList = () => {
    return (
        <div className="notification-list">
            Notification list is shown here
        </div>
    );
}
