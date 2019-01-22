import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {

    render() {
        return this.props.todos.map((data) => (
            <TodoItem key={data.id}
                todoItem={data}
                onChange={this.props.onChange}
                deleteItem={this.props.deleteItem}/>
        ));
    }
}

Todos.propTypes = {
    todos: PropTypes.array.isRequired
}

export default Todos