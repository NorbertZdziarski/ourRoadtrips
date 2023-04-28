import React, {useState} from 'react';

function TripEdit({selectedTrip, userTrips, userCars, userId, API, setSectionSel}) {

    const [newTripName, setNewTripName] = useState("")
    const [newTripDescription, setNewTripDescription] = useState("")
    const [newTripType, setNewTripType] = useState("")
    const [newTripCountry, setNewTripCountry] = useState("")
    const [newTripCar, setNewTripCar] = useState("")
    const [newTripPhoto, setNewTripPhoto] = useState("")



    const saveData = (id, idTrip) => {
console.log(idTrip)
        userTrips[idTrip] = {
            tripId: idTrip,
            tripName: (newTripName ? newTripName : selectedTrip.tripName),
            tripDescription: (newTripDescription ? newTripDescription : selectedTrip.tripDescription),
            tripType: (newTripType ? newTripType : selectedTrip.tripType),
            tripCountry: (newTripCountry ? newTripCountry : selectedTrip.tripCountry),
            tripCar: (newTripCar ? newTripCar : selectedTrip.tripCar),
            tripPhoto: (newTripPhoto ? newTripPhoto : selectedTrip.carPhoto)
        };
        //
        // // userTrips.push(addNewTrip)
        const saveTrip = {
            "trips" : userTrips
        }

        console.log('ID:   ' + id)
        fetch(`${API}/profile/${id}`
            , {
                method: "PATCH"
                ,
                body: JSON.stringify(saveTrip),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then(response => response.json())
            .then(data => {
        //         // setUserName(newName)
        //         // setUserSurname(newSurname)
        //         console.log('then data vvv')
                console.log(data);
            })
            .catch(error => {
                console.log(error);
            });
        setSectionSel(1);
    }

    return (
        <div className="fnt_userpanel">
            <h3> edit your trip {selectedTrip.tripId} !</h3>
            <section>
                <p> tytuł </p>
                <input
                    type="text"
                    className="box_input"
                    value={newTripName}
                    onChange={() => setNewTripName(event.target.value)}
                    // onKeyUp={}
                    placeholder= {selectedTrip.tripName}
                />
                <textarea
                    className="box_input"
                    // id=""
                    // name=""
                    value={newTripDescription}
                    onChange={() => setNewTripDescription(event.target.value)}
                    placeholder='>>>'
                />
            </section>
            <section>

                <p> trip type</p>
                {/*<select multiple={true} value={['B', 'C']}>*/}
                <select onChange={() => setNewTripType(event.target.value)}>
                    <option value="---"> </option>
                    <option value="górska">górska</option>
                    <option value="miejska">miejska</option>
                    <option value="wyczynowa">wyczynowa</option>
                </select>
                <p> where </p>
                <input
                    type="number"
                    className="box_input"
                    value={newTripCountry}
                    onChange={() => setNewTripCountry(event.target.value)}
                    // onKeyUp={}
                    placeholder= {selectedTrip.tripCountry}
                />
            </section>
            <section>
                <p> for you</p>
                {/*<select multiple={true} value={['B', 'C']}>*/}
                <select onChange={() => setNewTripCar(event.target.value)}>
                    {/*<option value="---"> </option>*/}
                    {/*<option value="daily">daily</option>*/}
                    {/*<option value="classic">classic</option>*/}
                    {/*<option value="forFun">for fun</option>*/}
                </select>
            </section>
            <section>
                <p>add trip photo</p>
            </section>
            <section>
                <button onClick={() => saveData(userId, selectedTrip.tripId)}>Save</button>
                <button onClick={() => setSectionSel(1)}>Cancel</button>
            </section>
        </div>
    );
}

export default TripEdit;