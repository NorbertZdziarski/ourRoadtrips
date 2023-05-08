import React, {useState} from 'react';
import UserPanel from "./UserPanel.jsx";
import SmallShowTrip from "./SmallShowTrip.jsx";


import TripLook from "./TripLook.jsx";
import CarNew from "./CarNew.jsx";

// function printTrips(trip, i) {
//     return <div key={i} className="list_item">{trip.tripName}
//         <button>Show</button>
//     </div>
// }

function MainPage({userNameLog, userSurnameLog, userCars, userTrips, usersId, API, allTrips, setLoggedInMain, setLoggedUser, setLoggedInLogin}) {

    const [loggedIn, setLoggedIn] = useState(true);
    const [choosePage, setChoosePage] = useState(1)
    const [chooseTtip, setChooseTrip] = useState(1)



    function showTripLook({trip}) {

        setChooseTrip(trip)
        setChoosePage(5)


        // setLoggedIn(true)
        // return <TripLook
        //                     trip={trip} />

        // onClick={()=>setChoosePage(4)
        //
        // ()=>showTripLook(trip)
    }

    const PrintMainPage = () => {
        return (
            <div className="mainPageDiv">
                <div className="mainPageStyle" >
                    {allTrips.map((trip, i) => <button key={`b${i}`} className="clickPage" onClick={()=> showTripLook({trip}) }><SmallShowTrip key={i} trip = {trip} i ={i}/></button>)}
                </div>
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
                return ;
            case 3:
                return <UserPanel
                    userName = {userNameLog}
                    userSurname = {userSurnameLog}
                    userCars = {userCars}
                    userTrips = {userTrips}
                    usersId = {usersId}
                    API = {API}
                    setLoggedIn = {setLoggedIn}

                    allTrips = {allTrips} />;

            case 4:
                setLoggedUser('');
                setLoggedInMain(false);
                setLoggedInLogin(false);
                return


                // (<User>
                //     {userNameLog}
                //     <button onClick={(()=>setLoggedIn(true))} className="mainMenu__button"></button>
                // </User>);
                // return <TripLook
                //     trip={chooseTtip}
                // />

                // <CarNew
                //     userId={usersId}
                //     API={API}
                //     userCars={userCars}
                //     // setSectionSel={setSectionSel}
                // />;
            case 5:
            return <TripLook
                trip={chooseTtip}
            />
            default:
                return <p>{value}</p>;

        }
    }


    return (
            <section className="mainMenu__section  ">
                <header className="main_header box-top">
                    <div className="mainmenu__ico">
                        <button onClick={()=>setChoosePage(1)} className="mainMenu__home"></button>
                        <button onClick={()=>setChoosePage(2)} className="mainMenu__filter"></button>
                        <button onClick={()=>setChoosePage(3)} className="mainMenu__user1"></button>
                        <button onClick={()=>setChoosePage(4)} className="mainMenu__button"></button>
                    </div>
                    <p className="fnt_header__username">{userNameLog}</p>
                </header>
                <div className="box">
                <ChooseFunction
                    value = {choosePage}
                />
                </div>
            </section>
    );
}

export default MainPage;