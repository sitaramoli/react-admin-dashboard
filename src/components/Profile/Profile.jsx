import React, { useState } from 'react'
import Modal from '../Modal/Modal'
import './Profile.scss';

const Profile = () => {
    const user = {
        img: "https://i.ibb.co/tC6GDv0/avatar.png",
        name: "Jones Ferdinand",
    };
    const [show, showModal] = useState(false);
    const handleShow = () => {
        showModal(true);
    };
    const handleHide = () => {
        showModal(false);
    };
    return (
        <div className="profile">
            <h4 className="profile__name">{user.name}</h4>
            <div className='profile__avatar' onClick={handleShow}>
                <figure className="profile__avatar__img">
                    <img src={user.img} alt={user.name} />
                </figure>
            </div>
            <Modal show={show} handleClose={handleHide}>
                <div className="profile-modal">
                    <figure >
                        <img className='profile-modal__img' src={user.img} alt="user.img" />
                    </figure>
                    <h5 className="profile-modal__name">{user.name}</h5>
                </div>
            </Modal>
        </div>
    )
}

export default Profile