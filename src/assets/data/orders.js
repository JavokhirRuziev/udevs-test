import { ONFOOT, STORE } from './delivery-type';
import { CASH, CLICK, CREDITCARD, PAYME, WALLET } from './payment-type';

export const orders = [
    {
        type: {
            title: 'Новый',
            count: 2,
            id: 1,
            color: 'primary.main',
            items: [
                {
                    id: 1001,
                    price: 300560,
                    paymentType: PAYME,
                    deliveryType: STORE,
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
                    id: 1002,
                    price: 300560,
                    paymentType: WALLET,
                    deliveryType: STORE,
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
                    id: 1003,
                    price: 300560,
                    paymentType: CREDITCARD,
                    deliveryType: STORE,
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
                    id: 1004,
                    price: 300560,
                    paymentType: CASH,
                    deliveryType: ONFOOT,
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
                    id: 1005,
                    price: 300560,
                    paymentType: CLICK,
                    deliveryType: STORE,
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
                    id: 2001,
                    price: 300560,
                    paymentType: CREDITCARD,
                    deliveryType: STORE,
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
                    id: 2002,
                    price: 300560,
                    paymentType: CREDITCARD,
                    deliveryType: STORE,
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
                    id: 2003,
                    price: 300560,
                    paymentType: CREDITCARD,
                    deliveryType: STORE,
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
                    id: 3001,
                    price: 300560,
                    paymentType: CASH,
                    deliveryType: ONFOOT,
                    dishes: [
                        {
                            count: 2,
                            name: 'Лаваш мясной Standart острый',
                        },
                    ],
                },
                {
                    id: 3002,
                    price: 300560,
                    paymentType: CASH,
                    deliveryType: STORE,
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
                    id: 3003,
                    price: 300560,
                    paymentType: CASH,
                    deliveryType: STORE,
                    dishes: [
                        {
                            count: 2,
                            name: 'Лаваш мясной Standart острый',
                        },
                    ],
                },
                {
                    id: 3004,
                    price: 300560,
                    paymentType: CASH,
                    deliveryType: ONFOOT,
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
                    id: 4001,
                    price: 300560,
                    paymentType: ONFOOT,
                    deliveryType: STORE,
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
