import React from 'react'
import TodoList from './todo/TodoList'
import TodoControls from './todo/TodoControls';
import TodoAdd from './todo/TodoAdd';


function App() {
const [todos, setTodos] = React.useState ([
  {id: 1, complited: false, title: 'New task 1'},
  {id: 2, complited: false, title: 'New task 2'},
  {id: 3, complited: false, title: 'New task 3'},
]
)

function toggleTodo (id) {
  setTodos (todos.map (todo => {
    if (todo.id === id) {
   todo.complited = !todo.complited
    }
    return todo
  })) 
}

  return (
    <div className="wrapper">
      <h1>todos</h1>
      <div className="content">
        <TodoAdd />
        <TodoList todos={todos} onToggle={toggleTodo}></TodoList>
        <TodoControls />
      </div>
      <div className="bottom__card1" />
      <div className="bottom__card2" />
    </div>
  )
}

export default App