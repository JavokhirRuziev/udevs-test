import React from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { theme } from '../../theme';

const Header = () => {
    return (
        <Box sx={wrapperStyles}>
            <Box sx={{ borderRight: `1px solid ${theme.palette.grey[300]}` }}>
                <Avatar sx={avatarStyles}>D</Avatar>
            </Box>
            <Typography variant='h2' fontWeight={600} ml={2}>
                Сегодняшние заказы
            </Typography>
        </Box>
    );
};

export default Header;

const wrapperStyles = {
    display: 'flex',
    alignItems: 'center',
    borderBottom: `1px solid ${theme.palette.grey[300]}`,
    position: 'fixed',
    zIndex: 2,
    bgcolor: 'white',
    width: '100%',
    top: 0,
};

const avatarStyles = {
    bgcolor: 'primary.main',
    fontWeight: 'bold',
    m: 1.5,
};
