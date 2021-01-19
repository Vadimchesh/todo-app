import React from 'react'
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

const styles = {
    container: {
        cursor: 'pointer',
        alignItems: 'center',
    }
}
function TodoList(props) {
    return (
        <div style={styles.container}>    
            {props.todos.map((todo, index) => {
                return <TodoItem todo={todo} index={index} key={todo.id} onChange={props.onToggle}></TodoItem>
            }) }
        </div>
    )
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object), 
    onToggle: PropTypes.func.isRequired
}

export default TodoList