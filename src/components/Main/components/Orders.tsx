import React from 'react';
import Box from '@mui/material/Box';
import CardWrapper from './CardWrapper';
import CardBase from './Card';
import { orders } from '../../../assets/data/orders';

const Orders = () => {
    return (
        <Box sx={{ display: 'flex', gap: 2 }}>
            {orders?.map((el, ind) => (
                <CardWrapper key={ind} el={el?.type}>
                    <Box sx={cardItemsWrapper}>
                        {el?.type?.items?.map((e, ind) => (
                            <CardBase {...{ el: e, typeId: el?.type?.id }} />
                        ))}
                    </Box>
                </CardWrapper>
            ))}
        </Box>
    );
};

export default Orders;

const cardItemsWrapper = {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
};
