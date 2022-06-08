import React from 'react';
import '../UtilityNav.css';
import './NavigationMenu.css';
import NavigationOptions from './NavigationOptions';
import Search from './Search';
import Logo from './Logo';

const NavigationMenu = () => (
    <div className="utility-nav__menu">
      <Logo />
      <NavigationOptions />
      <Search />
    </div>
  )
  export default NavigationMenu;