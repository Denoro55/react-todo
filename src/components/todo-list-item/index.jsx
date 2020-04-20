import React from "react";
import './todo-list-item.css';

const TodoListItem = ({label, important = false}) => {
    const style = {
        color: important ? 'tomato' : null,
        fontWeight: important ? 'bold' : null,
    };

    return (
        <div className="d-flex">
            <span style={style}>{label}</span>
            <button className="ml-auto btn btn-outline-danger btn-sm">
                <i className="fa fa-trash"></i>
            </button>
            <button className="btn btn-outline-success btn-sm">
                <i className="fa fa-exclamation"></i>
            </button>
        </div>
    )
};

export default TodoListItem;
