import Stack from '@mui/material/Stack';
import {TextField, Button, Todo} from '../components'


export const TodoListPage = () => {

    const handleChange = () => {}
    const handleClick = () => {}



    return (<>
        <h1>Todo List</h1>
        <Stack spacing={5} direction="row" alignItems="center" justifyContent="center">
            <TextField 
                handleChange={handleChange}
                id='todo_text-input'
                hintText="Some todo list"
                fieldName='ToDo'
                value=''
            />
            <Button type='add' text='add'/>
        </Stack>
        <Stack spacing={5} alignItems="center" justifyContent="center" marginTop={10}>
           <Todo/>
        </Stack>
    </>)
}