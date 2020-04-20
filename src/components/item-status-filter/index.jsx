import React from "react";

const ItemStatusFilter = ({label, important = false}) => {
    return (
        <div className="btn-group">
            <button className="btn btn-primary active">
                All
            </button>
            <button className="btn btn-secondary">
                Active
            </button>
            <button className="btn btn-secondary">
                Done
            </button>
        </div>
    )
};

export default ItemStatusFilter;
