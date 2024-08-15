import React, { ReactNode } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

type CardWrapperTypes = {
    children: ReactNode;
    el: {
        title: string;
        count: number;
        color: string;
    };
};

const CardWrapper = ({ children, el }: CardWrapperTypes) => {
    return (
        <Box sx={cardWrapperStyles(el?.color)}>
            <Card>
                <CardHeader
                    title={
                        <Typography
                            variant='body1'
                            fontWeight={700}
                            color={'common.white'}
                            textTransform={'uppercase'}
                        >
                            {el?.title} ({el?.count})
                        </Typography>
                    }
                />
                <CardContent>{children}</CardContent>
            </Card>
        </Box>
    );
};

export default CardWrapper;

const cardWrapperStyles = (bgcolor: string) => ({
    '& .MuiCardHeader-root': { bgcolor: bgcolor },
    '& .MuiCardContent-root': { p: '8px !important', bgcolor: 'grey.200' },
    '& .MuiPaper-root': { borderRadius: '6px', boxShadow: 'none' },
});
