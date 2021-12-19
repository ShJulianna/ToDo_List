import {useState} from 'react';
import {FilterButton} from './FilterButton';
import ButtonGroup from '@mui/material/ButtonGroup';
import { FILTER_TYPE} from '../constants/filterConstants';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../redux/todo/todoActions';
import { getFilterType } from '../redux/todo/todoSelector';



export const Filter = () => {
    const currentfilterType = useSelector(getFilterType);
    const dispatch = useDispatch();


    const changeFilterHandler = (filterType) => {
        // setFilterState(FILTER_TYPE[filterType])
        // ====  setFilterState(filterType)
        dispatch(changeFilter(filterType))

    }
    return (
        <ButtonGroup variant="outlined" aria-label="outlined button group">
            {
                Object.keys(FILTER_TYPE).map((filterType)=> (
                    <FilterButton 
                        key={filterType}
                        disabled={filterType === currentfilterType}
                        clickHandler={changeFilterHandler} 
                        filterType={filterType}
                        label={filterType}/>
                    
                ))
            }
        </ButtonGroup>
    )
}