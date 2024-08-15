import React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { ReactComponent as Info } from '../../../assets/images/icons/info.svg';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import CardActionsComponent from './CardActionsComponent';

type CardTypes = {
    el: {
        id: string;
        price: number;
        paymentIcon: any;
        deliveryIcon: any;
        dishes: any;
        isAction?: undefined | boolean;
    };
    typeId: number;
};

type DishTypes = {
    count: number;
    name: string;
    additional: string[];
};

const CardBase = ({ el, typeId }: CardTypes) => {
    return (
        <Box sx={cardWrapperStyles}>
            <Card>
                <CardHeader
                    title={
                        <Box sx={headerWrapperStyles}>
                            <Box sx={headerInnerWrapperStyles}>
                                <Typography variant='h3' fontWeight={'bold'}>
                                    ID: {el?.id}
                                </Typography>
                                <Info />
                            </Box>
                            <Box sx={headerInnerWrapperStyles}>
                                <Typography
                                    variant='subtitle1'
                                    color='info.main'
                                >
                                    {el?.price} сум
                                </Typography>
                                {el?.paymentIcon}
                                {el?.deliveryIcon}
                            </Box>
                        </Box>
                    }
                />
                <Divider />
                <CardContent>
                    {el?.dishes?.map((el: DishTypes) => (
                        <Typography variant='body1' mb={2}>
                            {el?.count} x {el?.name}
                            <br />
                            {el?.additional &&
                                el?.additional?.map((el) => (
                                    <>
                                        <Typography
                                            variant='body1'
                                            component={'span'}
                                            color={'text.secondary'}
                                            ml={2.7}
                                        >
                                            {el}
                                        </Typography>
                                        <br />
                                    </>
                                ))}
                        </Typography>
                    ))}

                    <Box sx={timeIconWrapperStyles}>
                        <AccessTimeFilledIcon
                            sx={{ color: 'info.main', width: 16 }}
                        />{' '}
                        <Typography variant='body1' color={'info.main'}>
                            15:22
                        </Typography>
                    </Box>
                </CardContent>
                <CardActionsComponent {...{ typeId, action: el?.isAction }} />
            </Card>
        </Box>
    );
};

export default CardBase;

const headerInnerWrapperStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: 1.2,
};

const headerWrapperStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
};

const cardWrapperStyles = {
    '& .MuiCardHeader-root': { bgcolor: 'white !important' },
    '& .MuiCardContent-root': { bgcolor: 'white !important' },
    '& .MuiCardActions-root': { p: '12px' },
    '& .MuiPaper-root': {
        width: 310,
        borderRadius: '6px',
    },
};

const timeIconWrapperStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: 0.5,
    width: 'max-content',
    ml: 'auto',
};
