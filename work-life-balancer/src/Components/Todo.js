import React, { useState, useEffect } from 'react';


const Todo = () => {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem('todos'));
        if (storedTodos) {
          setTodos(storedTodos);
        }
     }, []);
    
     
    
     const handleTodoChange = (index, newValue) => {
        const newTodos = [...todos];
        newTodos[index] = newValue;
        setTodos(newTodos);
        localStorage.setItem('todos', JSON.stringify(todos));
     };
    
     const handleAddTodo = () => {
        setTodos([...todos, '']);
       
            localStorage.setItem('todos', JSON.stringify(todos));
         
     };
    
     const handleDeleteTodo = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
        localStorage.setItem('todos', JSON.stringify(todos));
     };
  return (
    <div>
       
        <h2>Todo List:</h2>
      {todos.map((todo, index) => (
        <div key={index}>
          <input
            type="text"
            value={todo}
            onChange={(e) => handleTodoChange(index, e.target.value)}
          />
          <button onClick={() => handleDeleteTodo(index)}>Done</button>
        </div>
      ))}
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
    
  )
}

export default Todo
