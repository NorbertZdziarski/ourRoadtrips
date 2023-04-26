// import React from 'react';

import EditUser from "./EditUser.jsx";
import {useState} from "react";
import TripNew from "./TripNew.jsx";


function UserPanel({userName, userSurname, userCars, userTrips, usersId, API}) {

    const [loggedIn, setLoggedIn] = useState(false);
    const [addTrip, setAddTrip] = useState(false);

    function printTrips(trip, i) {   //-------------------------------------wyswietlanie tras
        return <div key={i} className="list_item">{trip}
        <button>Edit</button>
        </div>
    }
    function printCars(car, i) {   //-------------------------------------wyswietlanie samochodow
        return <div key={i} className="list_item">{car}
            <button>Edit</button>
        </div>
    }

    return (
        <div className="fnt">
            <section>
            <p>Witaj ! </p>
            <p> Twoje dane: </p>
                <div>
                <h4> {userName}, {userSurname}</h4>

                </div>
                <button onClick={() => setLoggedIn(true)}>edytuj swój profil</button>
            </section>
            <section className="columns">
                <div className="list_main">
                    <p>Twoje wyprawy:</p>
                    {userTrips.map((trip, i) => printTrips(trip, i))}
                    <button onClick={() => setAddTrip(true)}>Dodaj</button>
                </div>
                <div className="list_main">
                    <p>Twoje auta:</p>
                    {userCars.map((car, i) => printCars(car, i))}
                    <button>Dodaj</button>
                </div>
            </section>

            {loggedIn ? (<EditUser
                userName = {userName}
                userSurname = {userSurname}
                userId = {usersId}
                API = {API}
                setLoggedIn = {setLoggedIn}
            />) : null }
            {addTrip ? (<TripNew
                userId = {usersId}
                API = {API}
                setAddTrip = {setAddTrip}
            />) : null }








        </div>
    );
}

export default UserPanel;