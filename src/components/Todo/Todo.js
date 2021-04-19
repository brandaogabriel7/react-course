const Todo = ({ text, deleted }) => (
    <div className="card">
        <h2>{text}</h2>
        <div className="actions">
            <button className="btn" onClick={deleted}>Delete</button>
        </div>
    </div>
);

export default Todo;