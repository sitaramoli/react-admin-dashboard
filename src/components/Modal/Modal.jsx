import './Modal.scss';

function Modal({ handleClose, show, children }) {
    if (!show) return null;
    return (
        <div className='modal'>
            <section className="modal__main">
                <button className="modal__close-button" onClick={handleClose}>×</button>
                {children}
            </section>
        </div>
    );
}

export default Modal;