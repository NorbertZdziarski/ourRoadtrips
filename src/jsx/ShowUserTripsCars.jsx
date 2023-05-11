import {useEffect, useState} from 'react';
import CarNew from "./CarNew.jsx";
import CarEdit from "./CarEdit.jsx";
import TripEdit from "./TripEdit.jsx";


function ShowUserTripsCars({userCars, userTrips, userId, API, userNick, allTrips, setUpdateAllTrips2}) {
    const [sectionSel, setSectionSel] = useState(1);
    const [selectedTrip, setSelectedTrip] = useState('');
    const [selectedCar, setSelectedCar] = useState('');
    const [updateAllTrips, setUpdateAllTrips] = useState('');

    useEffect(() => {
        allTrips = [...updateAllTrips]
        setUpdateAllTrips2(updateAllTrips)
    },[updateAllTrips])
    function chooseATrip(value) {
        setSelectedTrip(value)
        setSectionSel(2)
    }
    function chooseACar(value) {
        setSelectedCar(value)
        setSectionSel(4)
        }

    function printTrips(trip, i) {   //-------------------------------------wyswietlanie tras
        if (!trip.tripName) return;
        return <div key={i} className="list_item">{trip.tripName}
            <button onClick={() => chooseATrip(trip)}>Edit</button>
        </div>
    }
    function printCars(car, i) {   //-------------------------------------wyswietlanie samochodow
        if (!car.carName) return;
        return <div key={i} className="list_item">{car.carBrand} {car.carName}
            <button onClick={() => chooseACar(car)}>Edit</button>
        </div>
    }

    // event.target.parentElement.firstChild.data

    function Show(){
        return  (

                <section className="columns">
                <div className="list_main">
                    <p>Twoje wyprawy:</p>
                    {userTrips.map((trip, i) => printTrips(trip, i))}
                </div>
                <div className="list_main">
                    <p>Twoje auta:</p>

                    {userCars.map((car, i) => printCars(car, i))}
                    {/**/}

                    {/*<button onClick={() => setAddCar(true)}>Dodaj</button>*/}

                </div>

            </section>
        )
    }

    function SectionSelection({value}) {

        switch (value) {
            case 1:
                return <Show/>;
            case 2:
                return <TripEdit
                    selectedTrip={selectedTrip}
                    userTrips={userTrips}
                    userCars={userCars}
                    userId={userId}
                    API={API}
                    setSectionSel={setSectionSel}
                    userNick ={userNick}
                    allTrips = {allTrips}
                    setUpdateAllTrips = {setUpdateAllTrips}
                />;
            case 3:
                return <CarNew
                    userId={userId}
                    API={API}
                    userCars={userCars}
                    setAddCar={true}
                    setSectionSel={setSectionSel}
                />;
            case 4:
                return <CarEdit
                    selectedCar = {selectedCar}
                    userCars={userCars}
                    userId={userId}
                    API={API}
                    setSectionSel={setSectionSel}
                />;
            default:
                <p>error</p>
        }
    }

    return (
        <div>
            <SectionSelection
                value={sectionSel}
            />
        </div>
    );
}

export default ShowUserTripsCars;