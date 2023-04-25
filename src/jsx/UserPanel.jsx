// import React from 'react';

import EditUser from "./EditUser.jsx";
import {useState} from "react";


function UserPanel({userName, userSurname, userCars, usersId, API}) {

    const [loggedIn, setLoggedIn] = useState(false);

    function cars(car, i) {   //-------------------------------------wyswietlanie samochodow
        return <p key={i}>{car}</p>
    }


    return (
        <div>

            <h2>Witaj ! </h2>
            <h3> Twoje dane: </h3>
            <div>
               <h4> {userName}, {userSurname}</h4>

                </div>
            <div><p>Twoje auta:</p>
                {userCars.map((car, i) => cars(car, i))}
            </div>
            <button onClick={() => setLoggedIn(true)}>zmiana</button>
            {loggedIn ? (<EditUser
                userName = {userName}
                userSurname = {userSurname}
                userId = {usersId}
                API = {API}
            />) : null }

        </div>
    );
}

export default UserPanel;