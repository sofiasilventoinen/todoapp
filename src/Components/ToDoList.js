import React from "react";
import Todo from "./Todo";

const ToDoList = ({ todos, setTodos, filteredTodos }) => {
   
    const clearAllHandler = () => {
        setTodos([]);
    };

     return(

       <div className="todo-container">
        <ul className="todo-list">
            {filteredTodos.map(todo => (
                <Todo 
                key={todo.id} 
                text={todo.text} 
                setTodos={setTodos} 
                todos={todos}
                todo={todo}
                />
            ))}
             <button onClick={clearAllHandler} className="clear-btn">Clear all todos</button>
        </ul>
       </div>
    );
};

export default ToDoList;