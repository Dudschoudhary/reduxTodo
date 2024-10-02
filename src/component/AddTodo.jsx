import React, { useState } from 'react'
import { addTodo } from '../features/todo/todoSlice'
import { useDispatch } from 'react-redux';

const AddTodo = () => {
    const [input, setInput] = useState('')
    const dispatch = useDispatch();

    const addTodoHandler = (e) => {
        e.preventDefault()
        if(input.trim() === ''){
            alert("No Submited Todo, Please entr valid Todo")
            return;
        }
        dispatch(addTodo(input))
        setInput(' ')

    }
    return (
        <>
            <form onSubmit={addTodoHandler}>
                <div className='text-2xl text-yellow-700'>AddTodo</div>

                <div>
                    <input
                        type="text"
                        className='border outline-none py-1 px-4 '
                        placeholder='Add Todo'
                        value={input}
                        onChange={(e)=>setInput(e.target.value)}
                    />
                    <button className='bg-black text-white px-2 border  py-1'>Add</button>
                </div>
            </form>

        </>
    )
}

export default AddTodo