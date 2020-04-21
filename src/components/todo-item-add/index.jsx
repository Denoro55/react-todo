import React from "react";

export default class TodoListItem extends React.Component {
    state = {
        value: ''
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAddItem(this.state.value);
        this.setState({
            value: ''
        })
    };

    handleChange = (event) => {
        this.setState({
            value: event.target.value
        })
    };

    render() {
        return (
            <form onSubmit={this.onSubmit} className="todo-add-form d-flex">
                <input onChange={this.handleChange} className="form-control input mr-3" placeholder="Type a text" value={this.state.value} type="text"/>
                <button type="submit" className="btn btn-secondary flex-shrink-0">Add Todo</button>
            </form>
        )
    }
}
