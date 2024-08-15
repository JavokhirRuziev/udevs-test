import React from 'react';
import WalletIcon from '../wallet.png';
import Box from '@mui/material/Box';

const Wallet: any = () => {
    return (
        <Box sx={{ img: { width: 16, height: 16 } }}>
            <img src={WalletIcon} alt='wallet' />
        </Box>
    );
};

export default Wallet;
