import React from 'react'

const TodoForm = ({ setStatus, inputText, setInputText, todos, setTodos }) => {

    const handleChangeInput = (e) => {
        // console.log(e.target.value);
        setInputText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setTodos([
            ...todos,
            { text: inputText, complete: false, id: Math.random() * 1000 }
        ]);
        setInputText("");
    }
    
    const handleStatus = (e) => {
        setStatus(e.target.value);
    }
    return (
        <>
            <form className='form'>
                <input type='text' value={inputText} onChange={handleChangeInput} className='todo-input' />
                <button type='submit' className='todo-button' onClick={handleSubmit}>
                    <i className="fa-solid fa-plus"></i>
                </button>
                <div className='select'>
                    <select name="todo" className='filter-todo' onChange={handleStatus}>
                        <option value="all">All</option>
                        <option value="complete">Completed</option>
                        <option value="incomplete">Incompleted</option>
                    </select>
                </div>
            </form>
        </>
    )
}

export default TodoForm;