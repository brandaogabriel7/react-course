const Modal = ({ deleted, canceled }) => (
    <div className="modal">
        <p>Are you sure?</p>
        <button className="btn btn--alt" onClick={canceled}>Cancel</button>
        <button className="btn" onClick={deleted}>Confirm</button>
    </div>
);

export default Modal;