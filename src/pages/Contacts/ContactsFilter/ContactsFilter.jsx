import React, { useCallback } from "react";
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import ClearIcon from '@mui/icons-material/Clear';

import {NATIONALITY_HUMAN_NAME} from '../../../constants/nationality';

const FieldGender = React.memo((props) => {
    const {gender, onChangeInputFilters} = props;

    return (
        <FormControl variant="outlined" className="select-filter">
            <InputLabel id="gender">Gender</InputLabel>
            <Select
            value={gender}
            label="Gender"
            name="gender"
            onChange={onChangeInputFilters}
            >
                <MenuItem value="all">All</MenuItem>
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
            </Select>
        </FormControl>
    )
});

const FieldNationality = React.memo((props) => {
    const {nationality, onChangeInputFilters} = props;

    return (
        <FormControl variant="outlined" className="select-filter">
            <InputLabel id="nationality">Nationality</InputLabel>
            <Select
            value={nationality}
            label="Nationality"
            name="nationality"
            onChange={onChangeInputFilters}
            >
                <MenuItem value="all">All</MenuItem>
                {Object.entries(NATIONALITY_HUMAN_NAME).map(([key, name]) => (
                <MenuItem value={key} key={key}>{name}</MenuItem> ))}
            </Select>
        </FormControl>
    )
});

export const ContactsFilters = React.memo((props) => {
    const {stateFilters, updateFilters, clearFilters} = props;

    const onChangeInputFilters = useCallback((event) => {
        updateFilters(event.target.name, event.target.value);
    }, [updateFilters]);
    
    return (
        <Box display='flex' justifyContent='space-between'>
            <Box display='flex' className='box-options'>
                <TextField 
                name="fullname" 
                label="Fullname" 
                variant="outlined" 
                size="small"
                value={stateFilters.fullname}
                onChange={onChangeInputFilters}/>

                <FieldGender gender={stateFilters.gender} onChangeInputFilters={onChangeInputFilters}/>
                <FieldNationality nationality={stateFilters.nationality} onChangeInputFilters={onChangeInputFilters}/>
            </Box>
            <Button size="small" onClick={clearFilters} startIcon={<ClearIcon />}>Clear</Button>
        </Box>
    )
});

ContactsFilters.propTypes = {
    stateFilters: PropTypes.object.isRequired,
    updateFilters: PropTypes.func.isRequired,
    clearFilters: PropTypes.func.isRequired,
};