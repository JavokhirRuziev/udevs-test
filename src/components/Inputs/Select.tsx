import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { ReactComponent as ListIcon } from '../../assets/images/icons/list.svg';
import Popper from '@mui/material/Popper';

const Select = () => {
    const [isFocused, setIsFocused] = React.useState(false);
    const [expandOptions, setExpandOptions] = React.useState(false);
    const [selectedFilms, setSelectedFilms] = React.useState<FilmOptionType[]>(
        []
    );

    const defaultProps = {
        options: top100Films,
        getOptionLabel: (option: FilmOptionType) => option.title,
    };

    const handleFocus = () => {
        setIsFocused(true);
        setTimeout(() => {
            setExpandOptions(true);
        }, 300);
    };

    const handleBlur = () => {
        setIsFocused(false);
        setExpandOptions(false);
    };

    const handleChange = (
        event: React.ChangeEvent<{}>,
        value: FilmOptionType[]
    ) => {
        setSelectedFilms(value);
    };

    return (
        <Autocomplete
            {...defaultProps}
            sx={{
                width: isFocused ? 316 : 160,
                transition: 'width 0.3s',
            }}
            multiple
            disableCloseOnSelect
            value={selectedFilms}
            disableClearable
            onChange={handleChange}
            popupIcon={<KeyboardArrowDownIcon color='primary' />}
            PopperComponent={(props) => (
                <Popper
                    {...props}
                    style={{
                        width: expandOptions ? 316 : 160,
                        transition: 'width 0.3s',
                    }}
                />
            )}
            renderOption={(props, option, { selected }) => (
                <li {...props}>
                    <Checkbox checked={selected} />
                    <ListItemText primary={option.title} />
                </li>
            )}
            renderInput={(params) => (
                <TextField
                    sx={textFiledStyles}
                    {...params}
                    placeholder={isFocused ? 'Text input' : 'Всего: 115'}
                    InputProps={{
                        ...params.InputProps,
                        startAdornment: (
                            <InputAdornment position='start'>
                                {isFocused ? (
                                    <SearchIcon color='primary' />
                                ) : (
                                    <ListIcon />
                                )}
                            </InputAdornment>
                        ),
                        onFocus: handleFocus,
                        onBlur: handleBlur,
                    }}
                />
            )}
        />
    );
};

export default Select;

interface FilmOptionType {
    title: string;
    year: number;
}

const textFiledStyles = {
    '& .MuiOutlinedInput-root': {
        fontFamily: `'Manrope-Regular', sans-serif`,
        fontSize: 18,
        lineHeight: '20px',
        bgcolor: 'common.white',
        borderRadius: '6px',
        py: '0px !important',
        '&:hover': {
            fieldset: {
                borderColor: 'grey.200',
            },
        },
        fieldset: {
            borderColor: 'grey.200',
        },
        '&.Mui-focused fieldset': {
            borderColor: 'grey.200',
        },
    },
    '& .MuiOutlinedInput-input': {
        height: 'auto',
        py: '8px !important',
        '&::placeholder': {
            fontFamily: `'Manrope-Regular', sans-serif`,
            fontSize: 14,
            opacity: 1,
            color: 'grey.600',
        },
    },
};

const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 },
];
