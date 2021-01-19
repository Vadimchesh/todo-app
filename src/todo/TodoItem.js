import  React from 'react'
import PropTypes from 'prop-types'

function TodoItem ({ todo, onChange }) {
    const classes = []
    if (todo.complited) {
        classes.push('done')
    }

    return (
                <label className='container'>
                <input type='checkbox' onChange={() => onChange(todo.id)}></input>
                <span className='checkmark'></span>
                <span className={classes.join('')}>{todo.title}</span>
                </label>
    )
} 
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired
}
export default TodoItem
