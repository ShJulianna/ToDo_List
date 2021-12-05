import { todoActionTypes } from "./todoActionTypes";

const initialState = {
    todos: []
};



export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case todoActionTypes.ADD_TODO :
            return {
                todos: [...state.todos, {...action.payload}] 
            }
        case todoActionTypes.DELETE_TODO:
            return {
                todos: state.todos.filter((todo) => todo.id !== action.payload.toDeleteId)
            }
        default: 
            return state;
    }
}