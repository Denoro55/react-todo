import React from "react";
import TodoItem from "../todo-list-item";
import './todo-list.css';

const TodoList = ({todos, onDelete, onToggleDone, onToggleImportant}) => {
    return (
        <div className="todo-list mb-3">
            <ul className="list-group">
                { todos.map((todo) => {
                    const {id , ...todoProps} = todo;

                    return (
                        <li className="list-group-item" key={id}>
                            <TodoItem onToggleDone={() => onToggleDone(id)} onToggleImportant={() => onToggleImportant(id)} {...todoProps} onDelete={() => onDelete(id)} />
                        </li>
                    )
                })}
            </ul>
        </div>
    )
};

export default TodoList;
