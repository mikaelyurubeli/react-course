import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "../App.css"

class TodoItem extends Component {

    getStyle = () => {
        // if (this.props.todoItem.completed) {
        //     return {
        //         textDecoration: "line-through"
        //     }
        // } else {
        //     return {
        //         textDecoration: "none"
        //     }
        // }
        return {
            backgroundColor: "#f4f4f4",
            padding: "10px",
            borderBottom: "1px #ccc dotted",
            textDecoration: this.props.todoItem.completed ? "line-through" : "none"
        }
    }

    onChange = () => {
        let {id} = this.props.todoItem
        this.props.onChange(id)
    }

    deleteItem = () => {
        let {id} = this.props.todoItem
        this.props.deleteItem(id)
    }

    render() {
        const {title} = this.props.todoItem
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.onChange}/>&nbsp;
                    { title }
                    <button className="btn-delete" onClick={this.deleteItem}>x</button>
                </p>
            </div>
        )
    }
}

TodoItem.propTypes = {
    todoItem: PropTypes.object.isRequired
}

export default TodoItem