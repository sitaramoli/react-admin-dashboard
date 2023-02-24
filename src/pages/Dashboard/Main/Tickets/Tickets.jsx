import React, { useContext } from 'react'
import AddTicket from '../../../../components/AddTicket/AddTicket';
import Filter from '../../../../components/Filter/Filter';
import LoadingSpinner from '../../../../components/LoadingSpinner/LoadingSpinner';
import Sort from '../../../../components/Sort/Sort';
import Ticket from '../../../../components/Ticket/Ticket';
import TicketModal from '../../../../components/TicketModal/TicketModal';
import { SearchContext } from '../../../../contexts/searchContext';
import useFilter from '../../../../hooks/useFilter';
import useTickets from '../../../../hooks/useTickets';

import './Tickets.scss'

const Tickets = () => {

    const { filterKey, onFilterKeyChange } = useFilter();
    const { loading, tickets, addTicket, deleteTicket, onInputChange, ticket, activeTicket, onTicketClose, onTicketShow, showTicketModal } = useTickets();


    return (
        <div className="tickets">
            <TicketsHeader ticket={ticket} filterKey={filterKey} onFilterKeyChange={onFilterKeyChange} onInputChange={onInputChange} addTicket={addTicket} />
            <TicketsBody filterKey={filterKey} tickets={tickets} loading={loading} deleteTicket={deleteTicket} onTicketShow={onTicketShow} activeTicket={activeTicket} onTicketClose={onTicketClose} showTicketModal={showTicketModal} />
        </div>
    );
}

export default Tickets;


const TicketsHeader = ({ filterKey, onFilterKeyChange, ticket, onInputChange, addTicket }) => {
    return (
        <div className="tickets-header">
            <h4 className="tickets-header__title">All tickets</h4>
            <div className="tickets-header__actions">
                <AddTicket ticket={ticket} onInputChange={onInputChange} addTicket={addTicket} />
                <Sort />
                <Filter onFilterKeyChange={onFilterKeyChange} filterKey={filterKey} />
            </div>
        </div>
    );
}

const TicketsBody = ({ filterKey, loading, deleteTicket, tickets, onTicketShow, activeTicket, onTicketClose, showTicketModal }) => {
    const [query] = useContext(SearchContext);
    return (
        <>
            {showTicketModal && <TicketModal ticket={activeTicket} onTicketClose={onTicketClose} showTicketModal={showTicketModal} />}
            <table className="tickets-body">
                <thead className="table-top">
                    <tr>
                        <th>
                            Ticket details
                        </th>
                        <th>
                            Customer name
                        </th>
                        <th>
                            Date
                        </th>
                        <th>
                            Priority
                        </th>
                        <th></th>
                    </tr>
                </thead>
                <tbody className='table-body'>
                    {loading ? <tr><td colSpan={5} ><LoadingSpinner /></td></tr> :
                        tickets.filter(ticket => query ? ticket.title.includes(query) : true)
                            .filter(ticket => filterKey ? ticket.priority.includes(filterKey) : true)
                            .map(ticket => {
                                return <Ticket key={ticket.title} deleteTicket={deleteTicket} {...ticket} onTicketShow={onTicketShow} onTicketClose={onTicketClose} />
                            })
                    }
                </tbody>
            </table>
        </>
    );
}
