import { useState } from 'react';
import Stack from '@mui/material/Stack';
import {TextField, Button, Todo} from '../components';
import { useSelector, useDispatch } from 'react-redux';
import { getTodos } from '../redux/todoSelector';
import {addTodo, deleteTodo} from '../redux/todoActions'


export const TodoListPage = () => {

    const [todoText, setTodoText] = useState('');
    const todos = useSelector(getTodos);
    const dispatch = useDispatch();
    console.log(todos);


    const handleChange = ({target : {value}}) => {
        setTodoText(value)}
    
    
    const addTodoHandler = () => {
        dispatch(addTodo(todoText));
        setTodoText('');
    }
    const onTodoClick = () => {
    }
    const onTodoDelete = (id) => {
        dispatch(deleteTodo(id))
    }


    return (<>
        <h1>Todo List</h1>
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