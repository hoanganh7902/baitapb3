import React, { useState } from 'react'

export default function TodoList() {
    const [todos, setTodos] = useState([
        "Learn React",
        "Learn Node",
        "Learn Express"
    ])

    const [newTodo, setNewTodo] = useState('')


    const handleNewTodo = (e) => {
        if(e.code === 'Enter') {
            setTodos([...todos, newTodo])
            setNewTodo('');
        }
    }
    return (
        <div>
            <h1>THINGS TO DO</h1>
            <input type='text' placeholder='Add New'
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            onKeyUp={(e) => handleNewTodo(e)}>
            </input>
            <ul>
                {todos.map((todo, index) => {
                    return <li key={index}>{todo}</li>
                })}
            </ul>
        </div>
    )
}
