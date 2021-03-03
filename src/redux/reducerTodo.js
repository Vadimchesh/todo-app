import { v4 } from 'uuid';

export default function todosReducer(state = [], action) {
  switch (action.type) {
    case 'todoAdd': {
      return [
        ...state,
        {
          id: v4(),
          text: action.payload,
          completed: false,
        },
      ];
    }
    case 'todos/todoToggle': {
      return state.map((todo) => {
        if (todo.id !== action.payload) {
          return todo;
        }

        return {
          ...todo,
          completed: !todo.completed,
        };
      });
    }
    case 'todos/todoDelet': {
      return state.filter((todo) => todo.id !== action.payload);
    }

    case 'todos/completedClear': {
      return state.filter((todo) => !todo.completed);
    }
    default:
      return state;
  }
}
