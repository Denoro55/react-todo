import React from "react";

const AppHeader = ({toDo, done}) => {
    return (
        <div className="row">
            <div className="col-6">
                <h1 className="mb-3">Todo List</h1>
            </div>
            <div className="col-6 d-flex align-items-center justify-content-end">
                {toDo} more to do, {done} done
            </div>
        </div>
    );
};

export default AppHeader
