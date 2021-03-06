import { useState } from 'react';
import Todo from '../Todo/Todo';
import './TodoList.css';

const TodoList = () => {
    const [todos, setTodos] = useState(['First Todo', 'Second Todo', 'Third Todo']);

    const deleteTodoConfirmedHandler = (deletedTodoIndex) => {
        const allTodos = [...todos];
        allTodos.splice(deletedTodoIndex, 1);
        setTodos(allTodos);
    };

    return (
        <div>
            <h1>My Todos</h1>
            {todos.map((todo, index) => (
                <Todo key={index} text={todo} deleted={() => deleteTodoConfirmedHandler(index)} />
            ))}
        </div>
    );
};

export default TodoList;
