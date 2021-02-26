import todosReducer from './reducerTodo';

describe('todos reducer', () => {
  it('should return the initial state', () => {
    expect(todosReducer(undefined, {})).toEqual([
      {
        text: 'Task Godel',
        completed: true,
        id: 0,
      },
    ]);
  });

  it('should handle ADD_TODO', () => {
    const reducer = todosReducer([], {
      type: 'todoAdd',
      payload: 'Run the tests',
    });
    expect(typeof reducer[0].id).toBe('string');
    expect(reducer[0].text).toBe('Run the tests');
    expect(reducer[0].completed).toBe(false);
  });
  it('should handle todos/todoToggle', () => {
    const reducer = todosReducer(undefined, {
      type: 'todos/todoToggle',
      payload: '',
    });
    expect(reducer[0].completed).toBe(true);
  });
});

it('should handle todos/todoDelet', () => {
  const reducer = todosReducer(undefined, {
    type: 'todos/todoDelet',
    payload: 0,
  });
  expect(reducer.length).toBe(0);
});

it('should handle todos/completedClear', () => {
  const reducer = todosReducer(undefined, {
    type: 'todos/completedClear',
    payload: 0,
  });
  expect(reducer.length).toBe(0);
});
