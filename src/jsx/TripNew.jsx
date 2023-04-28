import React, {useState} from 'react';

function TripNew({userId, API, userCars, userTrips, setAddTrip, setSectionSel}) {
    const [newTripName, setNewTripName] = useState('');
    const [newTripDescription, setNewTripDescription] = useState('');
    const [newTripType, setNewTripType] = useState('');
    const [newTripCountry, setNewTripCountry] = useState('');
    const [newTripCar, setNewTripCar] = useState('');
    const [newTripPhoto, setNewTripPhoto] = useState('');


    // function checkCorrect() {
    //
    // }

    function handleAddTrip(userId, userTrips) {
        // if (newPassword === newPasswordChk) {
            const addNewTrip = {
                tripId: (userTrips.length),
                tripName: newTripName,
                tripDescription: newTripDescription ,
                tripType: newTripType,
                tripCountry: newTripCountry,
                tripCar: newTripCar,
                tripPhoto: newTripPhoto
            }

            userTrips.push(addNewTrip)
            const saveNewTrip = {
                    "trips" : userTrips
            }

            fetch(`${API}/profile/${userId}`
                , {
                    method: "PATCH"
                    ,
                    body: JSON.stringify(saveNewTrip),
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                })
                .catch(error => {
                    console.log(error);
                });
        // }
        setSectionSel(1);
    }

    return (
        <div className="newAccount_main fnt_userpanel">
            <section>
                <h2>Dodaj swoją wyprawę</h2>
                <p> tytuł </p>
                <input
                    type="text"
                    className="box_input"
                    value={newTripName}
                    onChange={() => setNewTripName(event.target.value)}
                    // onKeyUp={}
                    // placeholder= {selectedTrip.tripName}
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
                    // placeholder= {selectedTrip.tripCountry}
                />
            </section>
            <section>
                <p> for you</p>
                {/*<select value={[userCars.name]}>*/}
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
                <button onClick={() => handleAddTrip(userId, userTrips)}>SAVE</button>
                <button onClick={() => setSectionSel(1)}>Cancel</button>
            </section>

        </div>
    );
}

export default TripNew;