import React from 'react'
import { Icon } from 'react-icons-kit';
import {trash} from 'react-icons-kit/feather/trash'
import {edit2} from 'react-icons-kit/feather/edit2'
import { removeTodo, handleCheckbox } from '../redux/todoapp/actions';
import { useDispatch, useSelector } from 'react-redux';


function TodoList ({ todos, deletedItem, setItem }) {
  

const handleDelete = (item) => {
setItem(item)
deletedItem()
}

// const handleEdit = (item) => {
//   setTitle(item.value);
//   setEdit();
//   setItem(item);
// }

  
  const listItems = todos.map(todo =>
    <li key={todo.id}>
      {todo.title}
      
                <>
      <span ><Icon icon={edit2}/></span>
      <span onClick={handleDelete} ><Icon icon={trash}/></span>
      </>
              
    </li>)
  return( <ul>{listItems}</ul>)
  }
   
  


export default TodoList;