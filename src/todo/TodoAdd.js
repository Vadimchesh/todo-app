import React from 'react'

function TodoAdd () {

return (

<div className='container__add-task'>
    <label>
        <span className='arrow' />
        <input type="text" class="new-task" placeholder="What need to be done?" aria-label="What need to be done?" />
    </label>
</div>
)
}

export default TodoAdd