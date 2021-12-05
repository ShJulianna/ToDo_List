import Chip from '@mui/material/Chip';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CircleIcon from '@mui/icons-material/Circle';
// import DoneAllIcon from '@mui/icons-material/DoneAll';
// import RemoveDoneIcon from '@mui/icons-material/RemoveDone';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';


//'primary'
//'error'




export const Todo = ({text, done, handleClick, handleDelete, id}) => {
    return <Chip 
        clickable
        color={'primary'}
        sx={{fontSize: 16, padding: 2.2, width: 300}}
        icon={done ? <CheckCircleIcon/> : <CircleIcon/>}
        deleteIcon={<DeleteForeverIcon/>}
        label={text}
        onClick={() => {}}
        onDelete={() => {handleDelete(id)}}
        />
}