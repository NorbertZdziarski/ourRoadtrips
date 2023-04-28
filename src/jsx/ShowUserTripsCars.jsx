import React, {useState} from 'react';
import TripNew from "./TripNew.jsx";
import CarNew from "./CarNew.jsx";
import CarEdit from "./CarEdit.jsx";
import TripEdit from "./TripEdit.jsx";
import CustomScroll from 'react-custom-scroll';



function ShowUserTripsCars({userCars, userTrips, userId, API}) {
    const [sectionSel, setSectionSel] = useState(1);
    const [selectedTrip, setSelectedTrip] = useState('');
    const [selectedCar, setSelectedCar] = useState('');

    function chooseATrip(value) {
        console.log(value)
        setSelectedTrip(value)
        setSectionSel(2)
    }
    function chooseACar(value) {
        console.log(value)
        setSelectedCar(value)
        setSectionSel(4)
        }

    function printTrips(trip, i) {   //-------------------------------------wyswietlanie tras
        return <div key={i} className="list_item">{trip.tripName}
            <button onClick={() => chooseATrip(trip)}>Edit</button>
        </div>
    }
    function printCars(car, i) {   //-------------------------------------wyswietlanie samochodow
        console.log(car)
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
                    <CustomScroll>
                    {userTrips.map((trip, i) => printTrips(trip, i))}
                    {/*<button onClick={() => setAddTrip(true)}>Dodaj</button>*/}
            </CustomScroll>
                </div>
                <div className="list_main">
                    <p>Twoje auta:</p>
                    <CustomScroll>
                    {userCars.map((car, i) => printCars(car, i))}
                    {/**/}

                    {/*<button onClick={() => setAddCar(true)}>Dodaj</button>*/}
            </CustomScroll>
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


            {/*<button onClick={() => setLoggedIn(false)}>  back to main menu </button>*/}
            {/*<button onClick={() => setSectionSel(1)}>  show trips & cars </button>*/}
            {/*<button onClick={() => setSectionSel(2)}>  EDIT trip </button>*/}
            {/*<button onClick={() => setSectionSel(3)}>  Add new Car</button>*/}
            {/*<button onClick={() => setSectionSel(4)}>  Edit Car</button>*/}


            <SectionSelection
                value={sectionSel}
            />


        </div>
    );
}

export default ShowUserTripsCars;