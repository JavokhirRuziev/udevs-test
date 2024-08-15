import React from 'react';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import ProfileImg from '../../assets/images/avatar-img.png';
import { theme } from '../../theme';
import { ReactComponent as Config } from '../../assets/images/icons/config.svg';

const Sidebar = () => {
    return (
        <Box sx={wrapperStyles}>
            <Box sx={{ ...iconContainerStyles, ...centerItemStyle }}>
                <AnalyticsIcon
                    sx={{ color: 'common.white', width: 20, height: 20 }}
                />
            </Box>
            <Box>
                <Box
                    sx={{
                        p: '12px',
                        ...centerItemStyle,
                    }}
                >
                    <Config />
                </Box>
                <Box
                    sx={{
                        p: '12px',
                        borderTop: `1px solid ${theme.palette.grey[200]}`,
                        ...centerItemStyle,
                    }}
                >
                    <Avatar alt='profile-photo' src={ProfileImg} />
                </Box>
            </Box>
        </Box>
    );
};

export default Sidebar;

const wrapperStyles = {
    display: 'flex',
    flexDirection: 'column',
    borderRight: `1px solid ${theme.palette.grey[300]}`,
    position: 'fixed',
    left: 0,
    top: 64,
    justifyContent: 'space-between',
    bottom: 0,
};

const iconContainerStyles = {
    borderRadius: 2,
    p: '10px',
    bgcolor: 'primary.main',
    mx: 1.5,
    mt: 1.5,
};

const centerItemStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
};
