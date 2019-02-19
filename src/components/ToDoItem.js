import React from 'react';

const ToDoItem = ({item, deleteItem}) => (
    <div className="todo-item">
        <p className="todo-item__text">{item}</p>
        <button className="todo-item__delete"
                onClick={deleteItem}>-
        </button>
    </div>
);

export default ToDoItem;
