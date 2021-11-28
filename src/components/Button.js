import Btn from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';


const iconTypes = {
    delete: {
        component: DeleteIcon,
        variant: 'outlined'
    },
    add:{
        component: SendIcon,
        variant: 'contained'
    } 
}

export const Button = ({type, text, handleClick}) => {
    const Icon = iconTypes[type].component;
    return (
      <Btn 
        variant={iconTypes[type].variant} 
        startIcon={<Icon/>} 
        onClick={handleClick}>
            {text}
      </Btn>
    )
}