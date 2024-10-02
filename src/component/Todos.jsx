import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo, copyTodo } from '../features/todo/todoSlice'

const Todos = () => {
  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch();

  return (
    <>
      <div>Todos</div>
      <div className=''>
        <ul>
          {todos.map((todo) => (
            <li
              className="mt-4 flex  justify-between items-center bg-zinc-800 px-4 py-2 rounded" key={todo.id}
            >
              <div className='text-white'>{todo.text}</div>
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className='text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md'>Delete

              </button>
              <button
                onClick={() => dispatch(copyTodo(todo.id))}
                className='text-white bg-blue-900 border-0 py-1 px-4 focus:outline-none hover:bg-blue-800 rounded text-md'>copy
                </button>
                <button
                onClick={() => dispatch(copyTodo(todo.id))}
                className='text-white bg-yellow-400 border-0 py-1 px-4 focus:outline-none hover:bg-yellow-500 rounded text-md'>Edit
                </button>
            </li>

          ))}
        </ul>
      </div>
    </>

  )
}

export default Todos