import { ADD_TODO, DELETE_ALL, REMOVE_TODO, UPDATE_TODO, BACKUP_AGAIN} from "../actions";

const initialState=[
    {id: 1, title: 'Buy Laptop', completed: false},
    {id: 2, title: 'Buy Pizza', completed: false},
    {id: 3, title: 'Shoe Box', completed: false},
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
               
            case BACKUP_AGAIN:
               

        default: return state;
        }
    }