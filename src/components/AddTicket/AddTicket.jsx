import axios from 'axios';
import React, { useState } from 'react'
import Input from '../Input/Input';
import Modal from '../Modal/Modal';
import Button from '../Button/Button';
import './AddTicket.scss'
import Dropdown from '../Dropdown/Dropdown';

const AddTicket = ({ ticket, onInputChange, addTicket }) => {
    const [showAddTicketModal, setShowTicketModal] = useState(false);
    const handleAddTicketButtonClick = () => {
        setShowTicketModal(!showAddTicketModal);
    };
    const dropdownOptions = [
        {
            value: 'High',
            label: 'High'
        },
        {
            value: 'Normal',
            label: 'Normal'
        },
        {
            value: 'Low',
            label: 'Low'
        }
    ];

    return (
        <div className='add-ticket'>
            <button className="add-ticket__button" onClick={handleAddTicketButtonClick}>
                <span className='add-ticket__button__icon icon-add'></span>
                <span className="add-ticket__button__text">Add Ticket</span>
            </button>
            {showAddTicketModal && <Modal handleClose={handleAddTicketButtonClick} show={showAddTicketModal}>
                <div className="ticket-form">
                    <Input label='Ticket details' type='text' name='title' id='title' value={ticket.title} onChange={onInputChange} placeholder='Describe your problem' />
                    <Dropdown label='Priority' name='priority' id='priority' options={dropdownOptions} onChange={onInputChange} selected={ticket.priority} />
                    <Button text='Submit' onClick={addTicket} type='button' />
                </div>
            </Modal>}
        </div>
    )
}

export default AddTicket