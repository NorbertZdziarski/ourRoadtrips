import {useState} from 'react';
import UserPanel from "./UserPanel.jsx";
import SmallShowTrip from "./SmallShowTrip.jsx";
import CustomScroll from "react-custom-scroll";
import TripLook from "./TripLook.jsx";



// function printTrips(trip, i) {
//     return <div key={i} className="list_item">{trip.tripName}
//         <button>Show</button>
//     </div>
// }

function MainPage({userNameLog, userSurnameLog, userCars, userTrips, usersId, API, allTrips}) {
console.log('Main Page')
    const [loggedIn, setLoggedIn] = useState(false);
    const [userName, setUserName] = useState("a");
    const [userSurname, setUserSurname] = useState("b");


    function showTripLook(trip) {
        setLoggedIn(true)
        return <TripLook trip={trip}/>
    }

    const printMainPage = () => {
        return (
            <div >
                <CustomScroll heightRelativeToParent="calc(100% - 20px)">
                    <div className="mainPageStyle">

                        {allTrips.map((trip, i) => <button key={`b${i}`} className="clickPage" onClick={(()=>showTripLook(trip))}><SmallShowTrip key={i} trip = {trip} i ={i}/></button>)}
                    </div>
                </CustomScroll>
            </div>
        )
    }


    // onClick={() => setSectionSel(1)}

    function User(props) {
        return (
        <div className="mainMenu__user">
            {props.children}
        </div>
        )
    }

    return (
        <div className="box">
            <section className="mainMenu__section">
                <User>
                    {userNameLog}
                    <button onClick={(()=>setLoggedIn(true))} className="mainMenu__button"></button>
                </User>
                {loggedIn ? (<UserPanel
                    userName = {userNameLog}
                    userSurname = {userSurnameLog}
                    userCars = {userCars}
                    userTrips = {userTrips}
                    usersId = {usersId}
                    API = {API}
                    setLoggedIn = {setLoggedIn}
                    setUserName = {setUserName}
                    setUserSurname = {setUserSurname}
                    allTrips = {allTrips} />) :
                    (printMainPage()
                    )}

            </section>

        </div>
    );
}

export default MainPage;