import React from "react";
import cn from 'classnames';

export default class ItemStatusFilter extends React.Component {
    buttons = [
        {name: 'all', label: 'All'},
        {name: 'active', label: 'Active'},
        {name: 'done', label: 'Done'}
    ];

    render() {
        const {onFilterChange, filter} = this.props;

        return (
            <div className="btn-group">
                {this.buttons.map((btn, id) => {
                    const clazz = btn.name === filter ? 'btn-primary' : 'btn-secondary';
                    return (
                        <button key={id} onClick={() => onFilterChange(btn.name)} className={`btn ${clazz}`}>
                            {btn.label}
                        </button>
                    )
                })}
            </div>
        )
    }
}
