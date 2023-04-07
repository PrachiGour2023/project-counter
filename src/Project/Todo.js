import React, { useEffect, useState } from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

const TodoData = () => {

    const [inputText, setInputText] = useState('');
    const [todos, setTodos] = useState('');
    const [status, setStatus] = useState('all');
    const [filter, setFilter] = useState([]);

    useEffect(() => {
        filterHandler();
    }, [status, todos])

    const filterHandler = () => {
        switch (status) {
            case 'complete':
                setFilter(todos.filter((todo) => todo.complete === true));
                break;
            case 'incomplete':
                setFilter(todos.filter((todo) => todo.complete === false));
                break;
            default:
                setFilter(todos);
                break;
        }
    }
    // console.log(inputText)
    return (
        <div className='container'>
            <header>
                <h3>Todo List</h3>
            </header>
            <TodoForm status={status} setStatus={setStatus} todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText} />
            <TodoList filter ={filter} todos={todos} setTodos={setTodos} />
        </div>
    )
}

export default TodoData