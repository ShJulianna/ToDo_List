import {v4 as uuidv4} from 'uuid';
import { todoActionTypes } from "./todoActionTypes"

export const addTodo = (todoText) => ({
    type: todoActionTypes.ADD_TODO, 
    payload: {
        text: todoText, 
        done: false,
        id: uuidv4()
    }
})

export const deleteTodo = (id) => ({
    type: todoActionTypes.DELETE_TODO,
    payload: {
        toDeleteId: id
    }
})

export const switchTodoState = (id) => ({
    type: todoActionTypes.SWITCH_TODO,
    payload: {
        toSwitchId: id
    }
})