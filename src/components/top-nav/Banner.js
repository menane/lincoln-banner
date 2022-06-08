import React from 'react';
import PropTypes from 'prop-types';
import '../UtilityNav.css';
import './Banner.css';
import { checkmark, question, location, person, cart, flag } from '../../assets'

const Banner = ({locale, itemsInCart}) => (
  <div className="utility-nav utility-nav__banner">
    <div className="banner__flag">
      <img src={flag} alt="Locale flag" />
      <div className="banner__text">{locale}</div>
    </div>
    <div className="banner__icons">
      <div className="banner__icons--container"><img src={checkmark} alt="Checkmark icon" /></div>
      <div className="banner__icons--container"><img src={question} alt="Question icon" /></div>
      <div className="banner__icons--container"><img src={location} alt="Location icon" /></div>
      <div className="banner__icons--container"><img src={person} alt="Person icon" /></div>
      <div className="icon__cart">
        <img src={cart} alt="Shopping cart icon" />
        <span className="banner__text banner__text--cart">{itemsInCart}</span>
      </div>
    </div>
  </div>
);

export default Banner;

Banner.propTypes = {
  locale: PropTypes.string,
  itemsInCart: PropTypes.number
};