import React from 'react';
import ClickImage from '../click.png';
import Box from '@mui/material/Box';

const Click = () => {
    return (
        <Box sx={{ img: { width: 16, height: 16 } }}>
            <img src={ClickImage} alt='click' />
        </Box>
    );
};

export default Click;
