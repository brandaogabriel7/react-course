import { useState } from 'react';
import Todo from './components/Todo/Todo';

const App = () => {
  const [todos, setTodos] = useState(['First Todo', 'Second Todo', 'Third Todo']);

  const deleteTodoHandler = (deletedIndex) => {
    const allTodos = [...todos];
    allTodos.splice(deletedIndex, 1);
    setTodos(allTodos);
  };

  return (
    <div>
      <h1>My Todos</h1>
      {todos.map((todo, index) => (
        <Todo key={index} text={todo} deleted={() => deleteTodoHandler(index)} />
      ))}
    </div>
  );
};

export default App;
