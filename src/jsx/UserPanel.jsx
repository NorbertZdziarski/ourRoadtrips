import EditUser from "./EditUser.jsx";
import React, {useState} from "react";
import TripNew from "./TripNew.jsx";
import CarNew from "./CarNew.jsx";
import ShowUserTripsCars from "./ShowUserTripsCars.jsx";


function UserPanel({userName, userNick, userSurname, userPassword, userCars, userTrips, usersId, API, setUserName, setUserSurname, allTrips}) {

    const [sectionSel, setSectionSel] = useState(1)

    function SectionSelection({value}) {

        switch (value) {
            case 1:
                return <ShowUserTripsCars
                    userTrips={userTrips}
                    userCars={userCars}
                    userId={usersId}
                    API={API}
                    setSectionSel={setSectionSel}
                    userNick = {userNick}
                    allTrips = {allTrips}
                />;
            case 2:
                return <TripNew
                    userNick = {userNick}
                    userId={usersId}
                    API={API}
                    userCars={userCars}
                    userTrips={userTrips}
                    setSectionSel={setSectionSel}
                    userName = {userName}
                    allTrips = {allTrips}
                />;
            case 3:
                return <CarNew
                    userId={usersId}
                    API={API}
                    userCars={userCars}
                    setSectionSel={setSectionSel}
                />;
            case 4:
                return <EditUser
                    userNick = {userNick}
                    userName={userName}
                    userSurname={userSurname}
                    userPassword={userPassword}
                    userId={usersId}
                    API={API}
                    setUserName={setUserName}
                    setUserSurname={setUserSurname}
                    setSectionSel={setSectionSel}
                />;
            default:
                return <p>error</p>;
        }
    }

    return (
        <div className="fnt">
            <section className="userpanel_bar">
                <div>
                    <button className="btn_userpanel_bar fnt_userpanel" onClick={() => setSectionSel(1)}>  show trips & cars </button>
                    <button className="btn_userpanel_bar fnt_userpanel" onClick={() => setSectionSel(2)}>  Add new trip </button>
                    <button className="btn_userpanel_bar fnt_userpanel" onClick={() => setSectionSel(3)}>  Add new Car</button>
                    <button className="btn_userpanel_bar fnt_userpanel" onClick={() => setSectionSel(4)}>  Edit User</button>
                </div>
                <div className="userpanel_bar">
                    <div>
                        <p className="fnt_userpanel">Witaj ! </p>
                        <h4 className="fnt_userpanel"> {userName}, {userSurname}</h4>
                    </div>
                    <img className="userpanel_ico" src="../../warehouse/images/ico/User-Outline.png"/>
                </div>



            </section>
            <SectionSelection
                value={sectionSel}
            />

        </div>
    );
}

export default UserPanel;