import React from 'react';

import './UsersMap.css';

const UsersMap = ({ users }) => (
    <div className='textContainer'>
        <div>
            <h1>
                Chat with people and have fun! 
            </h1>
            <h2>Be nice ❤</h2>
        </div>
        {
            users 
                ? (
                    <div>
                        <h1>Users chatting:</h1>
                        <div className='activeContainer'>
                            <h2>
                                {users.map(({name}) => (
                                    <div key={name} className="activeItem">
                                        {name}
                                    </div>
                                ))}
                            </h2>
                        </div>
                    </div>
                )
                : null
        }
    </div>
); 

export default UsersMap;