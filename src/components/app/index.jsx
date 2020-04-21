import React from 'react'
import { v4 as uuidv4 } from 'uuid';

import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import TodoList from "../todo-list";
import ItemStatusFilter from "../item-status-filter";
import ItemAddForm from "../todo-item-add";

export default class App extends React.Component {
    state = {
        term: '',
        filter: 'all',
        todos: [
            this.createTodoItem( 'Drink Coffee'),
            this.createTodoItem( 'Create app'),
            this.createTodoItem( 'Learn Vue.js')
        ]
    };

    changeFilterTerm = (term) => {
        this.setState({term})
    };

    changeFilter = (filter) => {
        this.setState({filter})
    };

    createTodoItem(text) {
        return {
            label: text,
            id: uuidv4(),
            done: false,
            important: false
        }
    }

    deleteItem = (id) => {
        this.setState((state) => ({
            todos: state.todos.filter(el => el.id !== id)
        }))
    };

    addTodoItem = (text) => {
        this.setState(({todos}) => {
            const todo = this.createTodoItem(text);

            return {
                todos: [...todos, todo]
            }
        });
    };

    toggleProperty(arr, id, propName) {
        const index = arr.findIndex(el => el.id === id);
        const oldItem = arr[index];
        const newItem = {...arr[index], [propName]: !oldItem[propName]};
        return [...arr.slice(0, index), newItem, ...arr.slice(index + 1)];
    }

    onToggleImportant = (id) => {
        this.setState(({todos}) => {
            return {
                todos: this.toggleProperty(todos, id, 'important')
            }
        })
    };

    onToggleDone = (id) => {
        this.setState(({todos}) => {
            return {
                todos: this.toggleProperty(todos, id, 'done')
            }
        })
    };

    search(arr, term) {
        return arr.filter(item => item.label.toLowerCase().includes(term.toLowerCase()));
    }

    filter(arr, filter) {
        switch (filter) {
            case 'all':
                return arr;
            case 'active':
                return arr.filter(todo => !todo.done);
            case 'done':
                return arr.filter(todo => todo.done);
            default:
                return arr
        }
    }

    render() {
        const { todos, term, filter } = this.state;
        const toDoCount = todos.filter(el => el.done).length;
        const doneCount = todos.length - toDoCount;

        let filteredTodos = this.filter(this.search(todos, term), filter);

        return (
            <div className="container pt-4">
                <div className="row">
                    <div className="col-6 offset-3">
                        <AppHeader toDo={toDoCount} done={doneCount} />
                        <div className="row mb-3">
                            <div className="col-7">
                                <SearchPanel changeFilterTerm={this.changeFilterTerm} />
                            </div>
                            <div className="col-5 d-flex justify-content-end">
                                <ItemStatusFilter changeFilter={this.changeFilter} filter={filter} />
                            </div>
                        </div>
                        <TodoList onToggleDone={this.onToggleDone} onToggleImportant={this.onToggleImportant} onDelete={ this.deleteItem } todos={filteredTodos} />
                        <ItemAddForm onAddItem={this.addTodoItem} />
                    </div>
                </div>
            </div>
        )
    }
}
