import Button from '@mui/material/Button';


export const FilterButton = ({filterType, clickHandler, label, disabled}) => {

    return (
        <Button 
            onClick={()=> clickHandler(filterType)} disabled={disabled}>
            {label}
        </Button>
        
    )

}