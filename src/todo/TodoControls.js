import React from 'react'

function TodoControls () {

return (

<div className="container__bottom">
    <label className="container__bottom-left">2 2 left</label>
    <div className="conainer__bottom-status">
        <label className="bottom__first">
            <input type="radio" name='bottom'/>
            <span>All</span>
        </label>
        <label>
            <input type="radio" checked name='bottom' />
            <span>Active</span>
        </label>
        <label>
            <input type="radio" name='bottom'/>
            <span>Completed</span>
        </label>
    </div>
    <label className="container__bottom-clear">Clear completed</label>
</div> 
)
}

export default TodoControls