export const ADD_TODO = 'ADD_TODO';
export const DELETE_ALL = 'DELETE_ALL';
export const REMOVE_TODO = 'REMOVE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const UPDATE_CHECKBOX = 'UPDATE_CHECKBOX';
export const RESUME_BOX = 'REUME_BOX';
export const BACK_UP = 'BACK_UP';

export const addTodo=(payload)=>{
    return{
        type: ADD_TODO,
        payload
    }
}

export const deleteAll = () =>{
    return{
        type: DELETE_ALL
    }
}

export const removeTodo=(payload)=>{
    return{
        type: REMOVE_TODO,
        payload
    }
}

export const handleEditSubmit=(payload)=>{
    return{
        type: UPDATE_TODO,
        payload
    }
}

export const handleCheckbox=(payload)=>{
    return{
        type: UPDATE_CHECKBOX,
        payload
    }
}

 export const handleResumebox=(payload)=>{
  return{
    type: RESUME_BOX,
    payload
  }
 }

 export const handleSubmitBack=(payload)=>{
    return{
        type: BACK_UP,
        payload
    }
 }