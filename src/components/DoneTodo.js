import React from 'react';
import { useSelector } from 'react-redux';
import ListTodos from '../components/ListTodos';

export const DoneTodo = ({completed, notcompleted}) => {

     const initialList = [
        {id: 1, todo: 'abc', completed: false},
        {id: 2, todo: 'abc', completed: true},
        {id: 3, todo: 'abc', completed: true},
    ]


    const doneItem = useSelector ((initialItems)=>{
        return doneItem.map((todo)=>{
            if(initialItems===initialList){
              (todo=completed);  
            } else {
                (todo=notcompleted)
            }})
        })}
 <ul>
    <li>
      <initialList/>
    </li>
 </ul>


export default DoneTodo;        