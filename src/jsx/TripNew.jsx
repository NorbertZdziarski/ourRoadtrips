import React, {useState} from 'react';

function TripNew({userId, API, userCars, userTrips, setAddTrip, setSectionSel}) {

    const countriesInEurope = ["Albania", "Andorra", "Austria", "Belarus", "Belgium", "Bosnia and Herzegovina", "Bulgaria", "Croatia", "Cyprus", "Czech Republic", "Denmark", "Estonia", "Finland", "France", "Germany", "Greece", "Hungary", "Iceland", "Ireland", "Italy", "Kosovo", "Latvia", "Liechtenstein", "Lithuania", "Luxembourg", "Malta", "Moldova", "Monaco", "Montenegro", "Netherlands", "North Macedonia", "Norway", "Poland", "Portugal", "Romania", "Russia", "San Marino", "Serbia", "Slovakia", "Slovenia", "Spain", "Sweden", "Switzerland", "Ukraine", "United Kingdom", "Vatican City"];
    const tripTypes = ["recreation", "sightseeing", "extreme"];

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
        let temporaryTripKey = userId + 'T' + (userTrips.length)
        // if (newPassword === newPasswordChk) {
            const addNewTrip = {
                tripId: (userTrips.length),
                tripKey: temporaryTripKey,
                tripName: newTripName,
                tripDescription: newTripDescription ,
                tripType: newTripType,
                tripCountry: newTripCountry,
                tripCar: newTripCar,
                tripPhoto: newTripPhoto,
                tripLikes: [],
                tripPublic: true
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
                <h3 className="login__header"> ADD YOUR TRIP:</h3>
                <section className="box-section">
                    <p> title: </p>
                    <input
                        type="text"
                        className="box_input"
                        maxLength={70}
                        value={newTripName}
                        onChange={() => setNewTripName(event.target.value)}
                        placeholder= '>>>'
                    />
                    <p> description: </p>
                    <textarea
                        className="box_input-description"
                        value={newTripDescription}
                        onChange={() => setNewTripDescription(event.target.value)}
                        // id=""
                        // name=""
                        placeholder='>>>'
                    />
                </section>
                <section className="box-section box-section-row">
                    <div className="box_input_trip">
                        <p> trip type</p>
                        <select value={newTripType} onChange={() => setNewTripType(event.target.value)} className="fnt box_input_trip">
                            {tripTypes.map((tripType) => (
                                <option key={tripType} value={tripType} className="fnt">
                                    {tripType}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="box_input_trip">
                        <p> where </p>

                        <select value={newTripCountry} onChange={() => setNewTripCountry(event.target.value)} className="fnt box_input_trip">
                            {countriesInEurope.map((country) => (
                                <option key={country} value={country} className="fnt">
                                    {country}
                                </option>
                            ))}
                        </select>

                    </div>
                    <div className="box_input_trip">
                        <p>choose a vehicle</p>
                        <select value={newTripCar} onChange={() => setNewTripCar(event.target.value)} className="fnt box_input_trip">
                            {userCars.map((userCar) => (
                                <option key={userCar.carKey} value={userCar.carBrand} className="fnt">
                                    {userCar.carBrand}
                                </option>
                            ))}
                        </select>
                    </div>
                </section>
                <section className="box-section under_construction">
                    <p>add trip photo</p>
                {/*    <input type="file" onChange={handleFileChange} />*/}
                {/*    <button onClick={handleUpload} className="btn_cancel">Upload</button>*/}
                </section>
                <section className="div-accept">

                {/*    <button onClick={() => saveData(userId, selectedTrip.tripId, false)} className="btn_save">Save</button>*/}
                    <button onClick={() => handleAddTrip(userId, userTrips)} className="btn_save">Save</button>

                    {/*<button onClick={() => fileUp}>Add File</button>*/}

                    <button onClick={() => setSectionSel(1)} className="btn_cancel">Cancel</button>

                    {/*<FileUpload*/}
                    {/*    userId = {'ffff'}*/}
                    {/*/>;*/}
                </section>
            </section>
        </div>
    );
}

export default TripNew;