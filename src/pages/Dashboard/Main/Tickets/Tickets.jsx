import React from 'react'
import AddTicket from '../../../../components/AddTicket/AddTicket';
import Filter from '../../../../components/Filter/Filter';
import LoadingSpinner from '../../../../components/LoadingSpinner/LoadingSpinner';
import Sort from '../../../../components/Sort/Sort';
import Ticket from '../../../../components/Ticket/Ticket';
import useFilter from '../../../../hooks/useFilter';
import useTickets from '../../../../hooks/useTickets';
import './Tickets.scss'

const Tickets = ({ query }) => {

    const { filterKey, onFilterKeyChange } = useFilter();

    return (
        <div className="tickets">
            <TicketsHeader filterKey={filterKey} onFilterKeyChange={onFilterKeyChange} />
            <TicketsBody filterKey={filterKey} query={query} />
        </div>
    );
}

export default Tickets;


const TicketsHeader = ({ filterKey, onFilterKeyChange }) => {

    return (
        <div className="tickets-header">
            <h4 className="tickets-header__title">All tickets</h4>
            <div className="tickets-header__actions">
                <AddTicket />
                <Sort />
                <Filter onFilterKeyChange={onFilterKeyChange} filterKey={filterKey} />
            </div>
        </div>
    );
}

const TicketsBody = ({ filterKey, query }) => {
    const { loading, tickets, deleteTicket } = useTickets();

    return (
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
                            return <Ticket key={ticket.id}  deleteTicket={deleteTicket} {...ticket} />
                        })
                }
            </tbody>
        </table>
    );
}
