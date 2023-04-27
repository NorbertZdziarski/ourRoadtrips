import EditUser from "./EditUser.jsx";
import React, {useState} from "react";
import TripNew from "./TripNew.jsx";
import CarNew from "./CarNew.jsx";
import ShowUserTripsCars from "./ShowUserTripsCars.jsx";


function UserPanel({userName, userSurname, userCars, userTrips, usersId, API, setLoggedIn, setUserName, setUserSurname}) {

    const [sectionSel, setSectionSel] = useState(1)

    function SectionSelection({value}) {

        switch (value) {
            case 1:
                return <ShowUserTripsCars
                    userTrips={userTrips}
                    userCars={userCars}
                    userId={usersId}
                    API={API}
                />;
            case 2:
                return <TripNew
                    userId={usersId}
                    API={API}
                    userCars={userCars}
                    userTrips={userTrips}
                />;
            case 3:
                return <CarNew
                    userId={usersId}
                    API={API}
                    userCars={userCars}
                />;
            case 4:
                return <EditUser
                    userName={userName}
                    userSurname={userSurname}
                    userId={usersId}
                    API={API}
                    setUserName={setUserName}
                    setUserSurname={setUserSurname}
                    setSectionSel={setSectionSel}
                />;
            default:
                <p>error</p>
        }
    }

    return (
        <div className="fnt">
            <section>
            <p>Witaj ! </p>
            <p> Twoje dane: </p>
                <div>
                <h4> {userName}, {userSurname}</h4>
                </div>
                <button onClick={() => setLoggedIn(false)}>  back to main menu </button>
                <button onClick={() => setSectionSel(1)}>  show trips & cars </button>
                <button onClick={() => setSectionSel(2)}>  Add new trip </button>
                <button onClick={() => setSectionSel(3)}>  Add new Car</button>
                <button onClick={() => setSectionSel(4)}>  Edit User</button>
            </section>
            <SectionSelection
                value={sectionSel}
            />

        </div>
    );
}

export default UserPanel;