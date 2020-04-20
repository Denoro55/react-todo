import React from 'react'

import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import TodoList from "../todo-list";
import ItemStatusFilter from "../item-status-filter";

const App = () => {
    const todos = [
        {label: 'Drink Coffee', id: 1},
        {label: 'Create app', important: true, id: 2},
        {label: 'Learn Vue.js', id: 3},
    ];

    return (
        <div className="container pt-4">
            <div className="row">
                <div className="col-6 offset-3">
                    <div className="row">
                        <div className="col-6">
                            <AppHeader/>
                        </div>
                        <div className="col-6 d-flex align-items-center justify-content-end">
                            1 more to do, 3 done
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-7">
                            <SearchPanel/>
                        </div>
                        <div className="col-5 d-flex justify-content-end">
                            <ItemStatusFilter/>
                        </div>
                    </div>
                    <TodoList todos={todos} />
                </div>
            </div>
        </div>
    )
};

export default App;
