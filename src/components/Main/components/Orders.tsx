import React from 'react';
import Box from '@mui/material/Box';
import CardWrapper from './CardWrapper';
import CardBase from './Card';
import { orders } from '../../../assets/data/orders';
import Typography from '@mui/material/Typography';
import DoNotDisturbIcon from '@mui/icons-material/DoNotDisturb';

const Orders = ({ search }: { search: string }) => {
    return (
        <Box sx={{ display: 'flex', gap: 2 }}>
            {orders?.map((el, ind) => {
                const filteredItems = el?.type?.items?.filter((item) =>
                    String(item.id).includes(search)
                );

                return (
                    <CardWrapper key={ind} el={el?.type}>
                        <Box sx={cardItemsWrapper}>
                            {filteredItems?.length > 0 ? (
                                filteredItems.map((e) => (
                                    <CardBase
                                        key={e.id}
                                        {...{ el: e, typeId: el?.type?.id }}
                                    />
                                ))
                            ) : (
                                <Box sx={emptyContainerStyles}>
                                    <Typography
                                        variant='h3'
                                        textAlign={'center'}
                                        fontWeight={700}
                                        py={2}
                                    >
                                        Empty
                                    </Typography>
                                    <DoNotDisturbIcon />
                                </Box>
                            )}
                        </Box>
                    </CardWrapper>
                );
            })}
        </Box>
    );
};

export default Orders;

const cardItemsWrapper = {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
};

const emptyContainerStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 2,
};
