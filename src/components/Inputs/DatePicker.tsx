import * as React from 'react';
import Box from '@mui/material/Box';
import { ReactComponent as ClockOutlined } from '../../assets/images/icons/clock-outlined.svg';
import Popper, { PopperPlacementType } from '@mui/material/Popper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
import { ReactComponent as Close } from '../../assets/images/icons/close.svg';
import Divider from '@mui/material/Divider';
import DatePickerViews from './CustomDate/DatePicker';
import TimePickerViews from './CustomDate/TimePicker';
import IconButton from '@mui/material/IconButton';
import dayjs from 'dayjs';
import { theme } from '../../theme';

const DatePickerContainer = () => {
    const [date, setDate] = React.useState(
        dayjs().set('hour', 12).set('minute', 0)
    );
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
        null
    );
    const [open, setOpen] = React.useState(false);
    const [placement, setPlacement] =
        React.useState<PopperPlacementType>('bottom-end');

    const handleOpen = (
        event: React.MouseEvent<HTMLButtonElement>,
        newPlacement: PopperPlacementType
    ) => {
        setAnchorEl(event.currentTarget);
        setOpen(!open);
        setPlacement(newPlacement);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Box>
            <Popper
                sx={{ zIndex: 1200, mr: 2 }}
                open={open}
                anchorEl={anchorEl}
                placement={placement}
                transition
            >
                {({ TransitionProps }) => (
                    <Fade {...TransitionProps} timeout={350}>
                        <Paper>
                            <Box sx={{ p: '8px 12px', width: 241 }}>
                                <Box sx={paperHeaderStyles}>
                                    <Typography
                                        variant='body1'
                                        fontWeight={'bold'}
                                    >
                                        Reschedule product
                                    </Typography>
                                    <IconButton
                                        sx={{ cursor: 'pointer' }}
                                        onClick={handleClose}
                                    >
                                        <Close />
                                    </IconButton>
                                </Box>
                                <Divider sx={{ my: 1.5 }} />
                                <Typography
                                    variant='subtitle2'
                                    color={'grey.500'}
                                >
                                    Choose a day and time in the future you want
                                    your product to be published
                                </Typography>
                                <Box sx={pickerContainerStyles}>
                                    <TimePickerViews {...{ date, setDate }} />
                                    <DatePickerViews />
                                    <Button fullWidth onClick={handleClose}>
                                        Reschedule
                                    </Button>
                                </Box>
                            </Box>
                        </Paper>
                    </Fade>
                )}
            </Popper>
            <Button
                sx={timeButtonStyles}
                startIcon={<ClockOutlined />}
                variant='outlined'
                onClick={(event) => handleOpen(event, 'bottom-end')}
            >
                {date?.format('HH:mm')}
            </Button>
        </Box>
    );
};

export default DatePickerContainer;

const paperHeaderStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
};

const pickerContainerStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
    mt: 2,
    position: 'relative',
};

const timeButtonStyles = {
    p: '4.5px 12px',
    border: `1px solid ${theme.palette.grey[200]}`,
    ':hover': {
        border: `1px solid ${theme.palette.grey[200]}`,
        bgcolor: 'white',
    },
};
