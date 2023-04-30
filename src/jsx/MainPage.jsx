import React, {useState} from 'react';
import UserPanel from "./UserPanel.jsx";
import SmallShowTrip from "./SmallShowTrip.jsx";
import CustomScroll from "react-custom-scroll";
import TripLook from "./TripLook.jsx";
import CarNew from "./CarNew.jsx";



// function printTrips(trip, i) {
//     return <div key={i} className="list_item">{trip.tripName}
//         <button>Show</button>
//     </div>
// }

function MainPage({userNameLog, userSurnameLog, userCars, userTrips, usersId, API, allTrips}) {
console.log('Main Page')
    const [loggedIn, setLoggedIn] = useState(true);
    const [choosePage, setChoosePage] = useState(1)



    function showTripLook({trip}) {
        console.log('showTripLook')
        // setLoggedIn(true)
        return <TripLook
            trip={trip}
        />
    }

    const PrintMainPage = () => {
        return (
            <div >
                <CustomScroll heightRelativeToParent="calc(100% - 20px)">
                    <div className="mainPageStyle">
                        {allTrips.map((trip, i) => <button key={`b${i}`} className="clickPage" onClick={()=>showTripLook(trip)}><SmallShowTrip key={i} trip = {trip} i ={i}/></button>)}
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


    function ChooseFunction({value}) {
        switch (value) {
            case 1:
                return <PrintMainPage/>;
            case 2:
                return <UserPanel
                    userName = {userNameLog}
                    userSurname = {userSurnameLog}
                    userCars = {userCars}
                    userTrips = {userTrips}
                    usersId = {usersId}
                    API = {API}
                    setLoggedIn = {setLoggedIn}
                    // setUserName = {setUserName}
                    // setUserSurname = {setUserSurname}
                    allTrips = {allTrips} />;
            case 3:
                return (<User>
                    {userNameLog}
                    <button onClick={(()=>setLoggedIn(true))} className="mainMenu__button"></button>
                    </User>);
            case 4:
                return <CarNew
                    userId={usersId}
                    API={API}
                    userCars={userCars}
                    // setSectionSel={setSectionSel}
                />;
            default:
                return <p>{value}</p>;

        }
    }


    return (
        <div className="box">


            <section className="mainMenu__section">

                <div>
                    <button onClick={()=>setChoosePage(1)} className="mainMenu__button">A</button>
                    <button onClick={()=>setChoosePage(2)} className="mainMenu__button">b</button>
                    <button onClick={()=>setChoosePage(3)} className="mainMenu__button">c</button>
                    <button onClick={()=>setChoosePage(4)} className="mainMenu__button">d</button>
                </div>

                <ChooseFunction
                    value = {choosePage}
                />



                {/*{loggedIn ? () :*/}
                {/*    (*/}
                {/*    )}*/}

            </section>

        </div>
    );
}

export default MainPage;