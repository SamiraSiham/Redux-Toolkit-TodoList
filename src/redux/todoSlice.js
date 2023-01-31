import { createSlice } from "@reduxjs/toolkit";
// import { useDispatch, useSelector } from "react-redux";
const todoSlice = createSlice({
  name: "todos",
  initialState: [
    { id: 1, title: "item 1", completed: false },
    { id: 2, title: "item 2", completed: false },
    { id: 3, title: "item 3", completed: true },
    { id: 4, title: "item 4", completed: false },
    { id: 5, title: "item 5", completed: false },
  ],
  reducers: {
    AddTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        title: action.payload.title,
        completed: false,
      };
      state.push(newTodo);
    },
    ToggleComplete: (state, action) => {
      const index = state.findIndex(
        (todo) => todo.id === action.payload.id
        );
      state[index].completed = action.payload.completed;
    },
    DeleteTodo : (state , action) => {
      return state.filter((todo) => todo.id !== action.payload.id);
    }
  },
});
export const { AddTodo , ToggleComplete , DeleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
