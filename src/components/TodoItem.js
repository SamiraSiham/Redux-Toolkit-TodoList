import React from "react";
import { useDispatch } from "react-redux";
import { ToggleComplete , DeleteTodo } from "../redux/todoSlice";
const TodoItem = ({id , title , completed}) => {
    const dispatch = useDispatch();
    const handleComplete = ()=> {
        dispatch(ToggleComplete({id : id , completed : !completed}))
    }
    const handleDelete = () => {
        dispatch(DeleteTodo({id : id}))
    }
    return(
        <li className="list-group-item">
            <div className="d-flex justify-content-between">
                <span className="d-flex align-items-center">
                    <input 
                    type="checkbox" 
                    className="mx-2" 
                    checked={completed}
                    onChange={handleComplete}
                    />
                    {title}
                </span>
                <button 
                className="btn btn-danger" 
                onClick={handleDelete}>
                    Delete
                </button>
            </div>
        </li>
    )
}
export default TodoItem