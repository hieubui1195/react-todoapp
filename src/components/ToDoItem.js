import React from 'react';

const ToDoItem = ({item, deleteItem}) => (
    <div className="ToDoItem">
        <p className="ToDoItem-Text">{item}</p>
        <button className="ToDoItem-Delete"
                onClick={deleteItem}>-
        </button>
    </div>
);

export default ToDoItem;
