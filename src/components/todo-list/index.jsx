import React from "react";
import TodoItem from "../todo-list-item";
import './todo-list.css';

const TodoList = ({todos}) => {
    return (
        <ul className="list-group">
            { todos.map((todo) => {
                const {id , ...todoProps} = todo;

                return (
                    <li className="list-group-item" key={id}>
                        <TodoItem {...todoProps} />
                    </li>
                )
            })}
        </ul>
    )
};

export default TodoList;
