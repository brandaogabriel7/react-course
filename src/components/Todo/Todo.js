import { useState, Fragment } from 'react';
import Backdrop from '../Backdrop/Backdrop';
import Modal from '../Modal/Modal';

const Todo = ({ text, deleted }) => {
    const [showModal, setShowModal] = useState(false);

    const closeDeleteModalHandler = () => {
        setShowModal(false);
    };

    const openDeleteConfirmationModal = () => {
        setShowModal(true);
    };

    const deleteHandler = () => {
        setShowModal(false);
        deleted();
    };

    return (
        <div className="card">
            <h2>{text}</h2>
            <div className="actions">
                <button className="btn" onClick={openDeleteConfirmationModal}>Delete</button>
            </div>
            {showModal &&
                <Fragment>
                    <Modal
                        deleted={deleteHandler}
                        canceled={closeDeleteModalHandler} />
                    <Backdrop clicked={closeDeleteModalHandler} />
                </Fragment>
            }
        </div>
    );
};

export default Todo;