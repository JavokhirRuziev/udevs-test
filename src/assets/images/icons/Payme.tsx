import React from 'react';
import PaymeImage from '../payme.png';
import Box from '@mui/material/Box';

const Payme = () => {
    return (
        <Box sx={{ img: { width: 16, height: 16 } }}>
            <img src={PaymeImage} alt='payme' />
        </Box>
    );
};

export default Payme;
