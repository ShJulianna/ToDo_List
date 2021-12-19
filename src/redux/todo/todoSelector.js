import { FILTER_TYPE} from "../../constants/filterConstants";


export const getTodos = ({todo: {todos}}) => todos;
export const getFilterType= ({todo: {filterType}}) => filterType;
export const getFilteredTodos= ({todo: {todos, filterType}}) => {
    switch (filterType) {
        case FILTER_TYPE.DONE:
            return todos.filter(({done}) => done )
        case FILTER_TYPE.UNDONE:
            return todos.filter(({done}) => !done )
        default:
            return todos
    }


};