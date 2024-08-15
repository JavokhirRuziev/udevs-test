import React from 'react';
import { Close } from '@mui/icons-material';
import CheckIcon from '@mui/icons-material/Check';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import Divider from '@mui/material/Divider';
import { NEW, PREPARING, READY } from '../../../assets/data/action-type';
const CardActionsComponent = ({
    typeId,
    action,
}: {
    typeId: number;
    action?: boolean | undefined;
}) => {
    return typeId === NEW ? (
        <>
            <Divider />
            <CardActions
                sx={{ display: 'flex', justifyContent: 'space-between' }}
            >
                <Button
                    sx={{ color: 'error.main' }}
                    variant='outlined'
                    color='secondary'
                    size='medium'
                    startIcon={<Close color='error' />}
                >
                    Отменить
                </Button>
                <Button size='medium' color='primary' startIcon={<CheckIcon />}>
                    Принять
                </Button>
            </CardActions>
        </>
    ) : typeId === PREPARING && action ? (
        <>
            <Divider />
            <CardActions>
                <Button
                    fullWidth
                    color='primary'
                    variant='outlined'
                    startIcon={<CheckIcon />}
                >
                    Готово
                </Button>
            </CardActions>
        </>
    ) : typeId === READY && action ? (
        <>
            <Divider />
            <CardActions>
                <Button
                    fullWidth
                    color='primary'
                    variant='outlined'
                    startIcon={<CheckIcon />}
                >
                    Завершить
                </Button>
            </CardActions>
        </>
    ) : (
        <></>
    );
};

export default CardActionsComponent;
