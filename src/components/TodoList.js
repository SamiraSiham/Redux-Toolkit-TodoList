import React from "react";
import TodoItem from './TodoItem';
import { useSelector } from "react-redux";
const TodoList = ()=>{
    const todos = useSelector((state)=>{
        return state.todos;
    })

    return(
        <ul className="list-group">
            {todos.map((todo)=>{return(
                <TodoItem key={todo.id} id={todo.id} title={todo.title} completed={todo.completed} />
            )})}
        </ul>
    )
}
export default TodoList;