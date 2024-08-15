import React from 'react';
import Payme from '../../assets/images/icons/Payme';
import Wallet from '../../assets/images/icons/Wallet';

import { ReactComponent as Cash } from '../../assets/images/icons/cash.svg';
import { ReactComponent as CreditCard } from '../../assets/images/icons/credit-card.svg';
import Click from '../../assets/images/icons/Click';
import {
    CASH,
    CLICK,
    CREDITCARD,
    PAYME,
    WALLET,
} from '../../assets/data/payment-type';

interface PaymentIconProps {
    paymentType: number;
}

const PaymentIcon: React.FC<PaymentIconProps> = ({ paymentType }) => {
    switch (paymentType) {
        case PAYME:
            return <Payme />;
        case CLICK:
            return <Click />;
        case CASH:
            return <Cash />;
        case CREDITCARD:
            return <CreditCard />;
        case WALLET:
            return <Wallet />;
        default:
            return null;
    }
};

export default PaymentIcon;
