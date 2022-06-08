import React from 'react';
import { useMediaQuery } from 'react-responsive'
import './UtilityNav.css';
import './mobile/MobileBanner.css';
import Banner from './top-nav/Banner';
import NavigationMenu from './bottom-nav/NavigationMenu';
import MobileBanner from './mobile/MobileBanner'

const UtilityNav = () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 375px)'
  });

  return (
    <div>
    { isMobile ? <MobileBanner locale="EN" itemsInCart={3} /> : 
          <div className="utility-nav">
            <Banner locale="EN" itemsInCart={3} />
            <NavigationMenu />
          </div>
    }
    </div>
  );
}
  export default UtilityNav;