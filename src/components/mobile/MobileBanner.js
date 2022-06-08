import React from 'react';
import PropTypes from 'prop-types';
import './MobileBanner.css';
import { menu } from '../../assets';
import Logo from '../bottom-nav/Logo';
import MobileIcons from './MobileIcons';

const MobileBanner = ({locale, itemsInCart}) => (
    <div className="mobile-banner">
        <div className="menu-icon">
            <img src={menu} alt="menu icon" />
        </div>
        <Logo />
        <MobileIcons locale={locale} itemsInCart={itemsInCart} />
    </div>
);

export default MobileBanner;
MobileBanner.propTypes = {
    locale: PropTypes.string,
    itemsInCart: PropTypes.number
};