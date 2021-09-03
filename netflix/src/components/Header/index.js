import React from 'react';
import './styles.css';

export default ({ black }) => {
    return (
        <header className={black ? "black" : ''}>
            <div className="header--logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png" />
            </div>
            <div className="header--user">
                <img src="https://avatars.githubusercontent.com/u/63131457" />
            </div>
        </header>
    )
}