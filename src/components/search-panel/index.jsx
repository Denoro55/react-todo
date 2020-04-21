import React from "react";

export default class SearchPanel extends React.Component {
    state = {
        value: ''
    };

    handleChange = (event) => {
        this.setState({
            value: event.target.value
        });
        this.props.onTermChange(event.target.value);
    };

    render() {
        return <input onChange={this.handleChange} className="form-control input" placeholder="Search" type="text" value={this.state.value}/>
    }
}
