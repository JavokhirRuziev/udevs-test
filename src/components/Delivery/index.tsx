import React from 'react';
import { ONFOOT } from '../../assets/data/delivery-type';
import { ReactComponent as OnFoot } from '../../assets/images/icons/on-foot.svg';
import StoreIcon from '@mui/icons-material/Store';
interface DeliveryIconProps {
    deliverType: number;
}

const DeliveryIcon: React.FC<DeliveryIconProps> = ({ deliverType }) => {
    return deliverType === ONFOOT ? (
        <OnFoot />
    ) : (
        <StoreIcon sx={{ color: 'info.main', width: 16 }} />
    );
};

export default DeliveryIcon;
