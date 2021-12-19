import { todoActionTypes } from "./todoActionTypes";
import { FILTER_TYPE} from '../../constants/filterConstants'


const initialState = {
    todos: [],
    filterType: FILTER_TYPE.ALL
};



export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case todoActionTypes.ADD_TODO :
            return {
                ...state,
                todos: [...state.todos, {...action.payload}] 
            }
        case todoActionTypes.DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter((todo) => todo.id !== action.payload.toDeleteId)
            }
        case todoActionTypes.SWITCH_TODO:
            return {
                ...state,
                todos: state.todos.map((todo) => ({
                    ...todo,
                    done: todo.id === action.payload.toSwitchId ? !todo.done : todo.done
                })) 
            }
        case todoActionTypes.CHANGE_FILTER:
            return {
                ... state,
                filterType: action.payload.filterType 
            }
        default: 
            return state;
    }
}