import React, { ReactNode } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Box from '@mui/material/Box';

const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <Header />
            <Box sx={{ ml: '65px', p: 1.5, mt: '65px' }}>{children}</Box>
            <Sidebar />
        </>
    );
};

export default Layout;
