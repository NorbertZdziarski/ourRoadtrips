// import React from 'react';

import EditUser from "./EditUser.jsx";
import {useState} from "react";
import TripNew from "./TripNew.jsx";
import CarNew from "./CarNew.jsx";


function UserPanel({userName, userSurname, userCars, userTrips, usersId, API, setLoggedIn, setUserName, setUserSurname}) {

    const [loggedInUser, setLoggedInUser] = useState(false);
    const [addTrip, setAddTrip] = useState(false);
    const [addCar, setAddCar] = useState(false);

    function printTrips(trip, i) {   //-------------------------------------wyswietlanie tras
        return <div key={i} className="list_item">{trip.tripName}
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
                <button onClick={() => setLoggedInUser(true)}>edytuj swój profil</button>
                <button onClick={() => setLoggedIn(false)}>  Main Page </button>
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
                    <button onClick={() => setAddCar(true)}>Dodaj</button>
                </div>
            </section>

            {loggedInUser ? (<EditUser
                userName = {userName}
                userSurname = {userSurname}
                userId = {usersId}
                API = {API}
                setUserName = {setUserName}
                setUserSurname = {setUserSurname}
                setLoggedIn = {setLoggedInUser}
            />) : null }
            {addTrip ? (<TripNew
                userId = {usersId}
                API = {API}
                userCars = {userCars}
                userTrips = {userTrips}
                setAddTrip = {setAddTrip}
            />) : null }
            {addCar ? (<CarNew
                userId = {usersId}
                API = {API}
                userCars = {userCars}
                setAddCar = {setAddCar}
            />) : null }







        </div>
    );
}

export default UserPanel;