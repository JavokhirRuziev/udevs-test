import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import dayjs from 'dayjs';
import { theme } from '../../../theme';

export default function TimePickerViews({
    date,
    setDate,
}: {
    date: dayjs.Dayjs;
    setDate: React.Dispatch<React.SetStateAction<dayjs.Dayjs>>;
}) {
    const handleChange = (newValue: any) => {
        setDate(newValue);
        if (newValue) {
            newValue.format('HH:mm');
        }
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <TimePicker
                views={['hours', 'minutes']}
                value={date}
                onChange={handleChange}
                sx={timePickerStyles}
            />
        </LocalizationProvider>
    );
}

const timePickerStyles = {
    '& .MuiOutlinedInput-root': {
        borderRadius: '6px',
        fontFamily: `'Manrope-Regular', sans-serif`,
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
