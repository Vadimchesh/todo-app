import  React from 'react'
import PropTypes from 'prop-types'

            const styles = {
                li: {
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                },
                input: {
                    position: 'absolute',
                    marginRight: '1rem',
                    opacity: '0',
                    cursor: 'pointer',
                    height: '0',
                    width: '0',
                }
            }

function TodoItem ({ todo, onChange }) {
    const classes = []
    if (todo.complited) {
        classes.push('done')
    }

    return (
            <li style={styles.li }>
                <label className='container'>
                <input type='checkbox' style={styles.input} onChange={() => onChange(todo.id)}></input>
                <span className='checkmark'></span>
                <span className={classes.join('')}>{todo.title}</span>
                </label>
            </li>
    )
} 
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired
}
export default TodoItem
