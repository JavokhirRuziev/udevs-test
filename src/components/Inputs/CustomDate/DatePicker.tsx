import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import { theme } from '../../../theme';

export default function DatePickerViews() {
    const [date, setDate] = React.useState(dayjs());

    const handleChange = (newValue: any) => {
        setDate(newValue);
        if (newValue) {
        }
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
                views={['day', 'month', 'year']}
                value={date}
                format='MMMM D, YYYY'
                onChange={handleChange}
                sx={timePickerStyles}
            />
        </LocalizationProvider>
    );
}

const timePickerStyles = {
    '& .MuiOutlinedInput-root': {
        borderRadius: '6px',
        fontFamily: `'Manrope-Bold', sans-serif`,
        fontSize: 14,
        fontWeight: 700,
        bgcolor: 'common.white',
        maxWidth: 296,
        p: 1,
        px: 1.2,
        '&:hover': {
            fieldset: {
                borderColor: 'grey.200',
            },
        },
        fieldset: {
            borderColor: 'grey.200',
        },
        '&.Mui-focused fieldset': {
            borderColor: 'primary.main',
        },
    },
    '& .MuiOutlinedInput-input': {
        py: 1,
        '&::placeholder': {
            fontFamily: `'Manrope-Regular', sans-serif`,
            fontSize: 16,
            opacity: 1,
            color: 'grey.600',
        },
    },
    '& .MuiPickersLayout-root': {
        boxShadow: theme.shadows[1],
    },
    borderRadius: '6px',
};
