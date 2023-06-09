import React, {useEffect, useState} from 'react';
import UserPanel from "./UserPanel.jsx";
import SmallShowTrip from "./SmallShowTrip.jsx";


import TripLook from "./TripLook.jsx";
import CarNew from "./CarNew.jsx";

// function printTrips(trip, i) {
//     return <div key={i} className="list_item">{trip.tripName}
//         <button>Show</button>
//     </div>
// }

function MainPage({userNickLog, userNameLog, userSurnameLog, userPasswordLog, userCars, userTrips, usersId, API, allTrips, setLoggedInMain, setLoggedUser, setLoggedInLogin}) {

    console.log('MAIN PAGE')


    const APIimg = "https://ourroadtrips-a2b30-default-rtdb.europe-west1.firebasedatabase.app/";

    const countriesInEurope = ["all", "Albania", "Andorra", "Austria", "Belarus", "Belgium", "Bosnia and Herzegovina", "Bulgaria", "Croatia", "Cyprus", "Czech Republic", "Denmark", "Estonia", "Finland", "France", "Germany", "Greece", "Hungary", "Iceland", "Ireland", "Italy", "Kosovo", "Latvia", "Liechtenstein", "Lithuania", "Luxembourg", "Malta", "Moldova", "Monaco", "Montenegro", "Netherlands", "North Macedonia", "Norway", "Poland", "Portugal", "Romania", "Russia", "San Marino", "Serbia", "Slovakia", "Slovenia", "Spain", "Sweden", "Switzerland", "Ukraine", "United Kingdom", "Vatican City"];
    const tripTypes = ["all", "recreation", "sightseeing", "extreme"];
    const vehicleTypes=["all", "car", "bike", "4x4", "camper", "other"];
    const carsTypes=["all", "daily","classic","forFun"];


    const [loggedIn, setLoggedIn] = useState(true);
    const [choosePage, setChoosePage] = useState(1)
    const [chooseTtip, setChooseTrip] = useState(1)
    const [selectCountry, setSelectCountry] = useState("all")
    const [choiceTripType, setChoiceTripType] = useState("all")
    const [choiceVehicleType, setChoiceVehicleType] = useState("all")
    const [choiceCarType, setChoiceCarType] = useState("all")
    const [usersPhotos, setUsersPhotos] = useState([]);
    const [updateAllTrips3, setUpdateAllTrips3] = useState('');




    // useEffect(()=>{
    //     getAllPhotos();
    // },[])

    useEffect(() => {
        allTrips = [...updateAllTrips3]
    },[updateAllTrips3])

    // const getAllPhotos = () => {
    //     fetch(`${APIimg}images`)
    //         .then(response => response.json())
    //         .then(data => {
    //             setUsersPhotos(data);
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         });
    // }



    function showTripLook({trip}) {
        setChooseTrip(trip)
        setChoosePage(5)
    }

    const PrintMainPage = ({selectCountry, choiceCarType, choiceTripType, choiceVehicleType }) => {
        console.log("print main page")
        return (
            <div className="mainPageDiv">
                <div className="mainPageStyle" >
                    {allTrips.map((trip, i) => <button key={`b${i}`} className="clickPage" onClick={()=> showTripLook({trip}) }>
                        <SmallShowTrip
                            key={i}
                            trip = {trip}
                            i ={i}
                            selectCountry = {selectCountry}
                            choiceTripType = {choiceTripType}
                            choiceVehicleType = {choiceVehicleType}
                            choiceCarType = {choiceCarType}
                            APIimg = {APIimg}
                            usersPhotos = {usersPhotos}
                        />
                    </button>)}
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
            return <PrintMainPage
                    selectCountry = {"all"}
                    choiceTripType = {"all"}
                    choiceVehicleType = {"all"}
                    choiceCarType = {"all"}
                />;
            case 2:
                return (<>
                    <section className="box-section box-section-row fnt_userpanel">
                        <div>
                            country
                            <select value={selectCountry} onChange={() => setSelectCountry(event.target.value)} className="fnt box_input_trip">
                                {countriesInEurope.map((country) => (
                                    <option key={country} value={country} className="fnt ">
                                        {country}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div>
                            trip type
                            <select value={choiceTripType} onChange={() => setChoiceTripType(event.target.value)} className="fnt box_input_trip">
                                {tripTypes.map((tripType) => (
                                    <option key={tripType} value={tripType} className="fnt">
                                        {tripType}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div>
                            vehicle type
                            <select value={choiceVehicleType} onChange={() => setChoiceVehicleType(event.target.value)} className="fnt box_input_trip" >
                                {vehicleTypes.map((vehicleType) => (
                                    <option key={vehicleType} value={vehicleType} className="fnt">
                                        {vehicleType}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div>
                            car type
                            <select value={choiceCarType} onChange={() => setChoiceCarType(event.target.value)} className="fnt box_input_trip">
                                {carsTypes.map((carType) => (
                                    <option key={carType} value={carType} className="fnt">
                                        {carType}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </section>
                    <PrintMainPage
                        selectCountry = {selectCountry}
                        choiceTripType = {choiceTripType}
                        choiceVehicleType = {choiceVehicleType}
                        choiceCarType = {choiceCarType}

                    />;
                </>)
            case 3:
                return <UserPanel
                    setUpdateAllTrips3 = {setUpdateAllTrips3}
                    userName = {userNameLog}
                    userSurname = {userSurnameLog}
                    userPassword = {userPasswordLog}
                    userNick = {userNickLog}
                    userCars = {userCars}
                    userTrips = {userTrips}
                    usersId = {usersId}
                    API = {API}
                    APIimg = {APIimg}
                    setLoggedIn = {setLoggedIn}
                    allTrips = {allTrips} />;

            case 4:
                setLoggedUser('');
                setLoggedInMain(false);
                setLoggedInLogin(false);
                return

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
                        <button onClick={()=>setChoosePage(1)} className="mainMenu__home" title="main page"></button>
                        <button onClick={()=>setChoosePage(2)} className="mainMenu__filter" title="filter"></button>
                        <button onClick={()=>setChoosePage(3)} className="mainMenu__user1" title="user panel"></button>
                        <button onClick={()=>setChoosePage(4)} className="mainMenu__button" title="log out"></button>
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