import React from 'react'
import { useSelector } from 'react-redux';
const Totaltems = () => {
  const completedItems = useSelector(
    (state) => state.todos.filter((todo) => todo.completed === true)
    );
  return (
    <h4 className='mt-3'>
        Total completed items : {completedItems.length}
    </h4>
  )
}
export default Totaltems;