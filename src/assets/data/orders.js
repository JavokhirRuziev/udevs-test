import Payme from '../images/icons/Payme';
import StoreIcon from '@mui/icons-material/Store';
import { ReactComponent as OnFoot } from '../images/icons/on-foot.svg';
import { ReactComponent as Cash } from '../images/icons/cash.svg';
import Wallet from '../images/icons/Wallet';
import { ReactComponent as CreditCard } from '../images/icons/credit-card.svg';
import Click from '../images/icons/Click';

export const orders = [
    {
        type: {
            title: 'Новый',
            count: 2,
            id: 1,
            color: 'primary.main',
            items: [
                {
                    id: '321545',
                    price: 300560,
                    paymentIcon: <Payme />,
                    deliveryIcon: (
                        <StoreIcon sx={{ color: 'info.main', width: 16 }} />
                    ),
                    dishes: [
                        { count: 1, name: 'Пепси 0,5' },
                        {
                            count: 3,
                            name: 'Гамбургер',
                            additional: ['С сыром', 'Без лука'],
                        },
                        {
                            count: 2,
                            name: 'Лаваш мясной Standart острый',
                        },
                    ],
                },
                {
                    id: '321545',
                    price: 300560,
                    paymentIcon: <Wallet />,
                    deliveryIcon: (
                        <StoreIcon sx={{ color: 'info.main', width: 16 }} />
                    ),
                    dishes: [
                        { count: 1, name: 'Пепси 0,5' },
                        {
                            count: 3,
                            name: 'Гамбургер',
                            additional: ['С сыром', 'Без лука'],
                        },
                        {
                            count: 2,
                            name: 'Лаваш мясной Standart острый',
                        },
                    ],
                },
                {
                    id: '321545',
                    price: 300560,
                    paymentIcon: <CreditCard />,
                    deliveryIcon: (
                        <StoreIcon sx={{ color: 'info.main', width: 16 }} />
                    ),
                    dishes: [
                        { count: 1, name: 'Пепси 0,5' },
                        {
                            count: 3,
                            name: 'Гамбургер',
                            additional: ['С сыром', 'Без лука'],
                        },
                        {
                            count: 2,
                            name: 'Лаваш мясной Standart острый',
                        },
                    ],
                },
                {
                    id: '321545',
                    price: 300560,
                    paymentIcon: <Cash />,
                    deliveryIcon: <OnFoot />,
                    dishes: [
                        {
                            count: 1,
                            name: 'Big Gamburger',
                            additional: ['С сыром', 'Без лука'],
                        },
                        {
                            count: 4,
                            name: 'Пепси 0,5',
                        },
                        {
                            count: 2,
                            name: 'Лаваш мясной Standart острый',
                        },
                        {
                            count: 1,
                            name: 'Дабл Бургер',
                            additional: ['С сыром', 'Без лука'],
                        },
                    ],
                },
                {
                    id: '321545',
                    price: 300560,
                    paymentIcon: <Click />,
                    deliveryIcon: (
                        <StoreIcon sx={{ color: 'info.main', width: 16 }} />
                    ),
                    dishes: [
                        { count: 1, name: 'Пепси 0,5' },
                        {
                            count: 3,
                            name: 'Гамбургер',
                            additional: ['С сыром', 'Без лука'],
                        },
                        {
                            count: 2,
                            name: 'Лаваш мясной Standart острый',
                        },
                    ],
                },
            ],
        },
    },
    {
        type: {
            title: 'Заготовка',
            count: 3,
            color: '#F8C51B',
            id: 2,
            items: [
                {
                    id: '321545',
                    price: 300560,
                    paymentIcon: <CreditCard />,
                    deliveryIcon: (
                        <StoreIcon sx={{ color: 'info.main', width: 16 }} />
                    ),
                    dishes: [
                        {
                            count: 3,
                            name: 'Гамбургер',
                            additional: ['С сыром', 'Без лука'],
                        },
                    ],
                    isAction: true,
                },
                {
                    id: '321545',
                    price: 300560,
                    paymentIcon: <CreditCard />,
                    deliveryIcon: (
                        <StoreIcon sx={{ color: 'info.main', width: 16 }} />
                    ),
                    dishes: [
                        { count: 1, name: 'Пепси 0,5' },
                        {
                            count: 3,
                            name: 'Гамбургер',
                            additional: ['С сыром', 'Без лука'],
                        },
                        {
                            count: 2,
                            name: 'Лаваш мясной Standart острый',
                        },
                    ],
                },
                {
                    id: '321545',
                    price: 300560,
                    paymentIcon: <CreditCard />,
                    deliveryIcon: (
                        <StoreIcon sx={{ color: 'info.main', width: 16 }} />
                    ),
                    dishes: [
                        { count: 1, name: 'Пепси 0,5' },
                        {
                            count: 3,
                            name: 'Гамбургер',
                        },
                    ],
                },
            ],
        },
    },
    {
        type: {
            title: 'Готов',
            count: 4,
            id: 3,
            color: '#22C348',
            items: [
                {
                    id: '321545',
                    price: 300560,
                    paymentIcon: <Cash />,
                    deliveryIcon: (
                        <OnFoot sx={{ color: 'info.main', width: 16 }} />
                    ),
                    dishes: [
                        {
                            count: 2,
                            name: 'Лаваш мясной Standart острый',
                        },
                    ],
                },
                {
                    id: '321545',
                    price: 300560,
                    paymentIcon: <Cash />,
                    deliveryIcon: (
                        <StoreIcon sx={{ color: 'info.main', width: 16 }} />
                    ),
                    dishes: [
                        {
                            count: 2,
                            name: 'Дабл Бургер',
                            additional: ['С сыром', 'Без лука'],
                        },
                        {
                            count: 4,
                            name: 'Пепси 0,5',
                        },
                        {
                            count: 2,
                            name: 'Лаваш мясной Standart острый',
                        },
                        {
                            count: 1,
                            name: 'Big Gamburger',
                            additional: ['С сыром', 'Без лука'],
                        },
                    ],
                },
                {
                    id: '321545',
                    price: 300560,
                    paymentIcon: <Cash />,
                    deliveryIcon: (
                        <StoreIcon sx={{ color: 'info.main', width: 16 }} />
                    ),
                    dishes: [
                        {
                            count: 2,
                            name: 'Лаваш мясной Standart острый',
                        },
                    ],
                },
                {
                    id: '321545',
                    price: 300560,
                    paymentIcon: <Cash />,
                    deliveryIcon: (
                        <OnFoot sx={{ color: 'info.main', width: 16 }} />
                    ),
                    dishes: [
                        {
                            count: 2,
                            name: 'Лаваш мясной Standart острый',
                        },
                    ],
                    isAction: true,
                },
            ],
        },
    },
    {
        type: {
            title: 'Курьер в пути',
            id: 4,
            count: 1,
            color: '#1AC19D',
            items: [
                {
                    id: '321545',
                    price: 300560,
                    paymentIcon: <OnFoot />,
                    deliveryIcon: (
                        <StoreIcon sx={{ color: 'info.main', width: 16 }} />
                    ),
                    dishes: [
                        {
                            count: 2,
                            name: 'Дабл Бургер',
                            additional: ['С сыром', 'Без лука'],
                        },
                        {
                            count: 4,
                            name: 'Пепси 0,5',
                        },
                        {
                            count: 2,
                            name: 'Лаваш мясной Standart острый',
                        },
                        {
                            count: 1,
                            name: 'Big Gamburger',
                            additional: ['С сыром', 'Без лука'],
                        },
                    ],
                },
            ],
        },
    },
];
