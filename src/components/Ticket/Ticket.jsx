import React from 'react'
import './Ticket.scss'

const Ticket = ({ img, title, update_day, customer_name, post_date, date, time, priority, deleteTicket, id }) => {
    return (
        <tr className='ticket'>
            <td>
                <div className="ticket-details">
                    <figure>
                        <img className="ticket-details__avatar" src={img} alt="user" />
                    </figure>
                    <div className="ticket-details__ticket-info">
                        <h5 className="ticket-details__ticket-info__title">{title}</h5>
                        <h6 className="ticket-details__ticket-info__days">{update_day}</h6>
                    </div>
                </div>
            </td>
            <td>
                <div className="name-section">
                    <h5 className="name-section__name">{customer_name}</h5>
                    <h6 className="name-section__post-date">{post_date}</h6>
                </div>
            </td>
            <td>
                <div className="date-section">
                    <h5 className="date-section__date">{date}</h5>
                    <h6 className="date-section__time">{time}</h6>
                </div>
            </td>
            <td>
                <div className={`priority ${priority === 'High' ? `priority--high` : priority === 'Normal' ? `priority--normal` : `priority--low`}`}>{priority}</div>
            </td>
            <td>
                <span className="icon-delete delete-button" id={id} onClick={deleteTicket}></span>
            </td>
        </tr>
    );
}

export default Ticket