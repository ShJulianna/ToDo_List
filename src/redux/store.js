import { createStore, combineReducers } from "redux"; 
import { todoReducer } from "./todoReducer";

export const store = createStore(todoReducer);
