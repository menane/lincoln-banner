import React, { useState } from 'react';
import './NavigationMenu.css';
import Solutions from './Solutions';
import Products from './Products';

export default function NavigationOptions () {
    const [active, setActive] = useState(0);

    const handleClick = (e) => {
      const index = parseInt(e.target.id);
      if (index !== active) {
        setActive(index);
        console.log(index);
      }
    };

    return (
    <div>
        <div>
        <ul className="nav__options">
            <li
                onClick={handleClick}
                className={active === 1 ? "active" : "inactive"} //start at 1 so tabs aren't active by default
                id={1}
            >
                Solutions
            </li>
            <li
                onClick={handleClick}
                className={active === 2 ? "active" : "inactive"}
                id={2}
            >
                Products
            </li>
            <li 
                onClick={handleClick}
                className={active === 3 ? "active" : "inactive"}
                id={3}
            >
                Automation
            </li>
            <li 
                onClick={handleClick}
                className={active === 4 ? "active" : "inactive"}
                id={4}
            >
                Education
            </li>
            <li 
                onClick={handleClick}
                className={active === 5 ? "active" : "inactive"}
                id={5}
            >
                Resources
            </li>
        </ul>
        </div>
        {active === 1 && <Solutions />}
        {active === 2 && <Products />}
    </div>
  );
}
    
  //export default NavigationOptions;