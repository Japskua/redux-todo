import React from 'react';
import AddTodo from './AddTodo.jsx';
import TodoList from './TodoList.jsx';
import Footer from './Footer.jsx';

export default function TodoApp() {
    return (
        <div className="todo-container">
            <AddTodo/>
            <TodoList/>
            <Footer/>
        </div>
    );
}
