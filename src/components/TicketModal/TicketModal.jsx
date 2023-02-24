import './TicketModal.scss';

import React from 'react'
import Modal from '../Modal/Modal';

const TicketModal = ({ ticket, onTicketClose, showTicketModal }) => {
    return (
        <Modal handleClose={onTicketClose} show={showTicketModal} >
            <div className='ticket-modal'>
                <div className='ticket-modal__title'>
                    <label className='ticket-modal__title__label'>Ticket Details</label>
                    <p className='ticket-modal__title__text'>{ticket.title}</p>
                </div>
                <div className="ticket-modal__customer-name">
                    <label className='ticket-modal__customer-name__label'>Customer Name</label>
                    <p className='ticket-modal__customer-name__text'>{ticket.customer_name}</p>
                </div>
                <div className='ticket-modal__priority'>
                    <label className='ticket-modal__priority__label'>Priority</label>
                    <p className='ticket-modal__priority__text'>{ticket.priority}</p>
                </div>
            </div>
        </Modal>
    )
}

export default TicketModal