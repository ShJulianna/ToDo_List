import Chip from '@mui/material/Chip';
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// import CircleIcon from '@mui/icons-material/Circle';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import RemoveDoneIcon from '@mui/icons-material/RemoveDone';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
//'primary'
//'error'

export const Todo = () => {
    return <Chip 
        clickable
        color={'primary'}
        sx={{fontSize: 16, padding: 2.2}}
        icon={<DoneAllIcon/>}
        deleteIcon={<DeleteForeverIcon/>}
        label='todo item'
        onDelete={()=>{}}
        />
}