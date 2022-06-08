import React from 'react';
import './NavigationMenu.css';
import search from '../../assets/search.svg';

const Search = () => (
    <div className="nav__search">
      <p>Search</p>
      <span style={{ marginLeft: "8.66px" }} className="search-icon">
        <img src={search} alt="search icon" />
      </span>
    </div>
);

export default Search;