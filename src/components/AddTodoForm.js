import React, { useState } from "react";
import {useDispatch , useSelector} from "react-redux";
// add todo action importing
import { AddTodo } from "../redux/todoSlice";
// import { useNavigate } from "react-router-dom";

const AddTodoForm = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const onSubmit = (event) => {
    event.preventDefault();
    console.log("user entered : " + value);
    dispatch(AddTodo({
      title : value,
    }));
    document.getElementById("input-todo").value = "";
  };
  return (
    <form onSubmit={onSubmit} className="form-inline">
      <label className="sr-only">Name :</label>
      <input
        type="text"
        className="form-control mb-2 mr-sm-2"
        placeholder="Add Todo..."
        value={value}
        onChange={(event) => setValue(event.target.value)}
        autoComplete="off"
        id="input-todo"
      />
      <button type="submit" className="btn btn-primary mb-2">
        Submit
      </button>
    </form>
  );
};
export default AddTodoForm;
