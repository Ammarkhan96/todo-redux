import { ADD_TODO, DELETE_ALL, REMOVE_TODO, UPDATE_CHECKBOX, UPDATE_TODO, RESUME_BOX} from "../actions";

const initialState=[
    {id: 1, todo: 'Buy Laptop', completed: false},
    {id: 2, todo: 'Buy Pizza', completed: false},
    {id: 3, todo: 'Shoe Box', completed: false},
];

     
export const operationsReducer=(state=initialState, action)=>{
    switch(action.type){
        case ADD_TODO:
            return [...state, action.payload];
        case DELETE_ALL:
            return [];   
        case REMOVE_TODO:

            const filteredTodos = state.filter((todo)=>todo.id!==action.payload);
            return filteredTodos;
        case UPDATE_TODO:
            let data = action.payload;
            const updatedArray=[];
            state.map((item)=>{
                if(item.id===data.id){
                    item.id = data.id;
                    item.todo = data.todo;
                    item.completed = data.completed;
                }
                updatedArray.push(item);
            })
            return updatedArray;
        case UPDATE_CHECKBOX:
            let todoArray = state.map((item)=>{
                if(item.id===action.payload){
                    item.completed = !item.completed;
                }
            })
            return todoArray;

        case RESUME_BOX:
            let resumetodo = state.map((items) => {
              if (items.id===data.id){
                resumetodo.completed = !resumetodo.completed
              }
            })
            return resumetodo
    
        default: return state;
        }
    }
