import React, {useState} from 'react';

function TripNew({userId, API, userCars, userTrips, setAddTrip}) {
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
        setAddTrip(false);
    }

    return (
        <div className="newAccount_main">
            <div>
                <h2>Dodaj swoją wyprawę</h2>
                <p>wypełnij pola zonaczone *</p>
            </div>
            <div>
                <label>
                    <p>nazwij wyprawę *</p>
                    <input
                        type="text"
                        className="box_input"
                        value={newTripName}
                        onChange={((event) => setNewTripName(event.target.value))}
                        placeholder='>>>'
                    />
                </label>
            </div>
            <div>
                <label>
                    <p>dodaj opis</p>
                    <textarea
                        className="box_input"
                        id=""
                        name=""
                        value={newTripDescription}
                        onChange={((event) => setNewTripDescription(event.target.value))}
                        placeholder='>>>'
                    />
                </label>
                <label>
                    <p>newTripCar</p>
                    <p>list of cars radio</p>
                </label>
            </div>
            <div>
                <label>
                    <p>typ wyprawy (górska, morska, miejska)</p>
                    <input
                        type="text"
                        className="box_input"
                        value={newTripType}
                        // onChange={inputNewTripName}
                        placeholder='>>>'
                    />
                </label>
            </div>
            <div>
                <label>
                    <p>kraj podróży</p>
                    <input
                        type="text"
                        className="box_input"
                        value={newTripCountry}
                        // onChange={inputNewTripName}
                        placeholder='>>>'
                    />
                </label>
            </div>
            <div>
                <label>
                    <p>newTripPhoto</p>
                    {/*<input*/}
                    {/*    type="text"*/}
                    {/*    className="box_input"*/}
                    {/*    value={newTripCountry}*/}
                    {/*    // onChange={inputNewTripName}*/}
                    {/*    placeholder='>>>'*/}
                    {/*/>*/}
                </label>
            </div>
        <button onClick={() => handleAddTrip(userId, userTrips)}>SAVE</button>

        </div>
    );
}

export default TripNew;