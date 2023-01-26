import React from 'react';
import { useSelector } from 'react-redux';
import DoneTodos from '../components/DoneTodo';

export const ListTodo = ({completed, notcompleted}) => {
     const ListItems = [
        {id: 1, todo: 'abc', completed: false},
        {id: 2, todo: 'abc', completed: true},
        {id: 3, todo: 'abc', completed: true},
    ]
    const list = useSelector ((initialList)=>{
        return list.map((todo)=>{
            if(ListItems===initialList){
              (todo=completed);  
            } else {
                (todo=notcompleted);

        }})
        
        })}


export default ListTodo;        