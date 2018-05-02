import React from 'react';
import Instagram_logo from '../../assets/Instagram_logo.svg.png';

const SearchBar = props => {
    return (
        <div className="search-bar">
            <div className="logos">
                <i className="fab fa-instagram"></i>
                <img src={Instagram_logo} className="ig-logo"/>
            </div>
            <div className="search">
                <i className="fas fa-search"></i>
                <input placeholder="Search"/>
            </div>
            <div className="top-icons">
                <i className="far fa-compass"></i>
                <i className="far fa-heart"></i>
                <i className="far fa-user"></i>
            </div>
        </div>
    );
};

export default SearchBar; 