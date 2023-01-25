import {useState} from 'react';
import { Form } from "./components/Form";
import { Todos } from "./components/Todos";
import {useDispatch, useSelector} from 'react-redux';
import {deleteAll} from './redux/todoapp/actions';
import Marquee from 'react-fast-marquee';
import DoneTodo from './components/DoneTodo';
import ListTodos from './components/ListTodos';

function App() {
  // dispatch function to dispatch an action
  const dispatch = useDispatch();

  // getting todos state for conditional rendering
  const todos = useSelector((state)=>state.operationsReducer);

  // update form visibility state
  const [editFormVisibility, setEditFormVisibility]=useState(false);

  // editTodo state
  const [editTodo, setEditTodo]=useState('');

  // this function will trigger when someone clicks the edit icon
  const handleEditClick=(todo)=>{
    setEditFormVisibility(true);
    setEditTodo(todo);
  }

  // back button click
  const cancelUpdate=()=>{
    setEditFormVisibility(false);
  }



    return (
    <div className="wrapper">
      <br></br>
      <Marquee>
      <h1 className="text-center" style={{color: "blue"}}>TODO-APP USING REACT-REDUX</h1>
      </Marquee>
      <Form editFormVisibility={editFormVisibility} editTodo={editTodo}
      cancelUpdate={cancelUpdate}/>
      <Todos handleEditClick={handleEditClick} editFormVisibility={editFormVisibility}/>
      {todos.length > 1 && (
        <button className='btn btn-danger btn-md delete-all'
        onClick={()=>dispatch(deleteAll())}>DELETE ALL</button>
  
      )}
      <button className='btn btn-primary' >RESUME</button>
      <button className='btn btn-danger' >BACK-AGAIN</button>
       <br />   
    </div>
    
  );
}

<div>
    <button>SELECT AGAIN</button>  
    <DoneTodo  />
    <ListTodos />
</div>
    

export default App;