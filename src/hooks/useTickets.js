import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const useTickets = () => {
    const [tickets, setTickets] = useState([]);
    const [loading, setLoading] = useState(false);

    // delete ticket
    const deleteTicket = async (e) => {
        setLoading(true);
        const id = e.target.id;
        await axios.delete(`http://localhost:3000/tickets/${id}`).then((response) => {
            toast.success("Ticket deleted successfully");
        }).catch((error) => {
            toast.error(error);
        }).finally(() => {
            const ticket = tickets.find(ticket => ticket.id == id);
            tickets.splice(tickets.indexOf(ticket), 1);
            setTickets(tickets);
            setLoading(false);
        });
    };

    // add ticket
    const [ticket, setTicket] = useState({
        title: '',
        customer_name: 'John Doe',
        priority: 'Low',
        img: "src/assets/images/customer-1.png",
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
        await axios.post('http://localhost:3000/tickets', { post_date: `on ${day}.${month}.${year}`, time: `${hour}:${minute}`, date: `${month} ${day},${year}`, ...ticket }).then((response) => {
            toast.success('Ticket added successfully');
        })
            .catch((error) => {
                toast.error(error);
            })
            .finally(() => { });
    };

    // get tickets
    const getTickets = async () => {
        setLoading(true);
        await axios.get('http://localhost:3000/tickets').
            then(function (response) {
                setTickets(response.data);
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

    return { tickets, loading, addTicket, ticket, onInputChange, deleteTicket };
}

export default useTickets;