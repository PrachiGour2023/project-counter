import React from 'react'

const TodoList = ({ filter, todos, setTodos }) => {

    const handleDeleteHandler = (id) => {
        setTodos(todos.filter((el) => el.id !== id));
    }

    const completeHandler = (id) => {
        setTodos(todos.map((item) => {
            if (item.id === id) {
                return {
                    ...item,
                    complete: !item.complete
                }
            }
            return item;
        }))
    }

    return (
        <div>
            <div className='todo-list'>
                {
                    filter ?
                        (
                            filter && filter.map((item) => {
                                return (
                                    <ul className='todo' key={item.id}>
                                        <li className={`todo-item ${item.complete ? "completed" : ''}`}>{item.text}</li>
                                        <button className='inner-button' onClick={() => completeHandler(item.id)}><i className="fa-solid fa-check"></i></button>
                                        <button className='inner-button' onClick={() => handleDeleteHandler(item.id)}><i className="fa-solid fa-trash"></i></button>
                                    </ul>
                                )
                            })
                        ) : "No data"

                }

            </div>
        </div>
    )
}

export default TodoList