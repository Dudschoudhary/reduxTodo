import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
    todos: [{ id: nanoid(), text: "duds" }],
};

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            };
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        copyTodo: (state, action) => {
            const todo = state.todos.find((todo)=>todo.id === action.payload)
            if(todo){
                navigator.clipboard.writeText(todo.text)
                alert("text copy")
            }
        }
    }
})

export const { addTodo, removeTodo,copyTodo } = todoSlice.actions

export default todoSlice.reducer


