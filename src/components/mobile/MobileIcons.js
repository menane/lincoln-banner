import React from 'react';
import PropTypes from 'prop-types';
import '../top-nav/Banner.css';
import './MobileBanner.css'
import { search, person, cart } from '../../assets';


const MobileIcons = ({locale, itemsInCart}) => (
    <div className="mobile-banner__icons">
      <div className=""><img src={search} alt="Search icon" /></div>
      <div className="menu-icon--inverted"><img src={person} alt="Person icon" /></div>
      <div className="menu-icon--inverted mobile-banner__cart">
        <img src={cart} alt="Shopping cart icon" />
        <span className="banner__text banner__text--cart">{itemsInCart}</span>
      </div>
    </div>
);

export default MobileIcons;

MobileIcons.propTypes = {
    locale: PropTypes.string,
    itemsInCart: PropTypes.number
};