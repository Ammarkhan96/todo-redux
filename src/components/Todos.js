import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import DoneTodo from './DoneTodo';
import { Icon } from 'react-icons-kit';
import {trash} from 'react-icons-kit/feather/trash'
import {edit2} from 'react-icons-kit/feather/edit2'
import {arrowLeft} from 'react-icons-kit/fa/arrowLeft'
import {backward} from 'react-icons-kit/fa/backward'
import { removeTodo, handleCheckbox } from '../redux/todoapp/actions';
import TodoList from './TodoList';

export const Todos = ({handleEditClick, editFormVisibility}) => {
  // dispatch function to dispatch an action
  const dispatch = useDispatch();

  // getting todos from the store
  const todos = useSelector((state)=>state.operationsReducer);
//   return todos.map((todo)=>{
//     if(todo?.completed){
//         <DoneTodo todo={todo}/>
//     }else{
//       <ListTodos todo={todo} />
// }

  return (
    <TodoList todos={todos}/>
  )
      
        
}