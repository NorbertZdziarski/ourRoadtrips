import React from 'react';

function UserPanel({userName, userSurname}) {
    return (
        <div>

            <p>Witaj ! {userName}</p>
            <p>{userSurname}</p>

        </div>
    );
}

export default UserPanel;