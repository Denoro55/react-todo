import React from "react";
import cn from 'classnames';

import './todo-list-item.css';

export default class TodoListItem extends React.Component {
    render() {
        const {done, important, label, onToggleDone, onToggleImportant, onDelete} = this.props;

        const cls = cn({
            'd-flex align-items-center': true,
            done,
            important
        });

        return (
            <div className={cls}>
                <span onClick={onToggleDone}>{label}</span>
                <button onClick={onDelete} className="ml-auto btn btn-outline-danger btn-sm">
                    <i className="fa fa-trash"/>
                </button>
                <button onClick={onToggleImportant} className="btn btn-outline-success btn-sm">
                    <i className="fa fa-exclamation"/>
                </button>
            </div>
        )
    }
}
