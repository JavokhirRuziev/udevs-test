import React from 'react';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '../../Inputs/TextField';
import Select from '../../Inputs/Select';
import DatePickerContainer from '../../Inputs/DatePicker';

const Header = () => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
            <TextField
                InputProps={{
                    startAdornment: (
                        <InputAdornment position='start'>
                            <SearchIcon color='primary' />
                        </InputAdornment>
                    ),
                }}
                placeholder='Поиск по ID'
            />
            <Box sx={{ display: 'flex', gap: 1 }}>
                <Select />
                <DatePickerContainer />
            </Box>
        </Box>
    );
};

export default Header;
