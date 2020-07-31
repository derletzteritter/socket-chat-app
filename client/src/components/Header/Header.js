import React from 'react';

import './Header.css';

const Header = ({ room }) => (
    <div className='header'>
        <div className='leftInnerContainer'>
            <h3>Current room: {room}</h3>
        </div>
        <div className='rightInnerContainer'>
            <a href='/'>Leave</a>
        </div>
    </div>
)

export default Header;