import { useState, useCallback, useEffect } from 'react';
import Stack from '@mui/material/Stack';
import {TextField, Button, Todo, Filter } from '../components';
import { useSelector, useDispatch } from 'react-redux';
import { getFilteredTodos } from '../redux/todo/todoSelector';
import {addTodo, deleteTodo, switchTodoState} from '../redux/todo/todoActions';
import {ButtonAppBar} from '../components/ButtonAppBar';
import {getUserId} from '../redux/user/userSelectors';
import { initUser } from '../redux/user/userAction';

export const TodoListPage = () => {

    const [todoText, setTodoText] = useState('');
    const todos = useSelector(getFilteredTodos);
    const dispatch = useDispatch();
    const userId = useSelector(getUserId);

    useEffect(() => {
        if(userId) {
            dispatch(initUser(userId))
        }
    },[userId])

    const handleChange = ({target : {value}}) => {
        setTodoText(value)}
    const addTodoHandler = () => {
        dispatch(addTodo(todoText));
        setTodoText('');
    }
    const onTodoClick = useCallback((id) => {
        dispatch(switchTodoState(id))
    }, [dispatch, switchTodoState])
    const onTodoDelete = useCallback((id) => {
        dispatch(deleteTodo(id))
    },[dispatch,deleteTodo])


    return (<>
        <ButtonAppBar/>
        <h1>Todo List</h1>
        <Stack
            justifyContent='center'
            alignItems='center'
            marginBotton={15}>
            <Filter/>
        </Stack>
        <Stack spacing={5} direction="row" alignItems="center" justifyContent="center">
            <TextField 
                handleChange={handleChange}
                id='todo_text-input'
                hintText="Some todo list"
                fieldName='ToDo'
                value={todoText}
            />
            <Button type='add' text='add' handleClick={addTodoHandler}/>
        </Stack>
        <Stack spacing={2} alignItems="center" justifyContent="center" marginTop={10}>
           {todos.map((todoData) => 
                <Todo 
                    {...todoData} 
                    key={todoData.id}
                    handleClick={onTodoClick}
                    handleDelete={onTodoDelete}
                    />)
           }
        </Stack>
    </>)
}