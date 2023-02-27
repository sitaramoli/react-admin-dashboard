import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const useTickets = () => {
    const [tickets, setTickets] = useState([]);
    const [loading, setLoading] = useState(false);

    // show ticket model when ticket title is clicked
    const [showTicketModal, setShowTicketModal] = useState(false);
    const [activeTicket, setActiveTicket] = useState({});
    const onTicketShow = (e) => {
        setActiveTicket(tickets.find(ticket => ticket.id == e.target.id));
        setShowTicketModal(true);
    }
    const onTicketClose = () => {
        setShowTicketModal(false);
    }

    // delete ticket
    const deleteTicket = async (e) => {
        setLoading(true);
        await axios.delete(`https://react-admin-dashboard-395cd-default-rtdb.firebaseio.com/tickets/${e.target.id}/.json`).then((response) => {
            console.log(response.data);
            toast.success("Ticket deleted successfully");
        }).catch((error) => {
            toast.error(error);
        }).finally(() => {
            const ticket = tickets.find(ticket => ticket.id == e.target.id);
            tickets.splice(tickets.indexOf(ticket), 1);
            setTickets(tickets.sort((a, b) => b.id - a.id));
            setLoading(false);
        });
    };

    // add ticket
    const [ticket, setTicket] = useState({
        title: '',
        customer_name: 'John Doe',
        priority: 'Low',
        img: "https://i.ibb.co/417M42v/customer-1.png",
        update_day: 'Updated 1 day ago',
    });
    const onInputChange = (e) => {
        const { name, value } = e.target;
        setTicket({ ...ticket, [name]: value });
    }
    const addTicket = async () => {
        const date = new Date();
        const day = date.getDate();
        const month = date.getMonth();
        const year = date.getFullYear();
        const hour = date.getHours();
        const minute = date.getMinutes();
        const newTicket = { post_date: `on ${day}.${month}.${year}`, time: `${hour}:${minute}`, date: `${month} ${day},${year}`, ...ticket };
        if (ticket.title === '') {
            toast.error('Please describe your problem in title field');
        }
        else {
            setLoading(true);
            await axios.post('https://react-admin-dashboard-395cd-default-rtdb.firebaseio.com/tickets.json', { ...newTicket })
                .then((response) => {
                    const id = response.data;
                    setTickets([{ ...newTicket, id }, ...tickets]);
                    toast.success('Ticket added successfully');
                })
                .catch((error) => {
                    toast.error(error);
                })
                .finally(() => {
                    setLoading(false);
                });
        }
    };

    // get tickets
    const getTickets = async () => {
        setLoading(true);
        await axios.get('https://react-admin-dashboard-395cd-default-rtdb.firebaseio.com/tickets.json').
            then((response) => {
                const jsonString = JSON.stringify(Object.values(response.data));
                const tickets = JSON.parse(jsonString);
                console.log(tickets);
                setTickets(tickets);
            }).
            catch(function (error) {
                toast.error(error);
            }).
            finally(function () {
                setLoading(false);
            });
    }

    useEffect(() => {
        getTickets();
    }, []);

    return { tickets, loading, addTicket, ticket, onInputChange, deleteTicket, onTicketShow, showTicketModal, activeTicket, onTicketClose };
}

export default useTickets;