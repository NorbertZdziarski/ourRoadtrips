import React, {useState} from 'react';

function TripNew({userId, API, APIimg, userCars, userTrips, setAddTrip, setSectionSel, userNick, allTrips}) {

    let saveUserCar = {};

    const countriesInEurope = ["Albania", "Andorra", "Austria", "Belarus", "Belgium", "Bosnia and Herzegovina", "Bulgaria", "Croatia", "Cyprus", "Czech Republic", "Denmark", "Estonia", "Finland", "France", "Germany", "Greece", "Hungary", "Iceland", "Ireland", "Italy", "Kosovo", "Latvia", "Liechtenstein", "Lithuania", "Luxembourg", "Malta", "Moldova", "Monaco", "Montenegro", "Netherlands", "North Macedonia", "Norway", "Poland", "Portugal", "Romania", "Russia", "San Marino", "Serbia", "Slovakia", "Slovenia", "Spain", "Sweden", "Switzerland", "Ukraine", "United Kingdom", "Vatican City"];
    const tripTypes = ["recreation", "sightseeing", "extreme"];

    const [newTripName, setNewTripName] = useState('');
    const [newTripDescription, setNewTripDescription] = useState('');
    const [newTripType, setNewTripType] = useState('');
    const [newTripCountry, setNewTripCountry] = useState('');
    const [newTripCar, setNewTripCar] = useState('');
    const [newTripPhoto, setNewTripPhoto] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);
    const handleImageUpload = async () => {
        if (!selectedImage) {
            console.log('Nie wybrano zdjęcia.');
            return;
        }

        try {
            const reader = new FileReader();
            reader.readAsDataURL(selectedImage);

            reader.onloadend = async () => {
                const base64Data = reader.result.split(',')[1];

                const imageData = {
                    tripKey: selectedTrip.tripKey,
                    userId: userId,
                    image: base64Data,
                };

                try {
                    const response = await fetch(`${APIimg}images`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(imageData),
                    });

                    if (response.ok) {
                        console.log('Zdjęcie zostało zapisane na serwerze.');
                    } else {
                        console.log('Wystąpił błąd podczas zapisywania zdjęcia.');
                    }
                } catch (error) {
                    console.log('Wystąpił błąd podczas wysyłania żądania.');
                }
            };
        } catch (error) {
            console.log('Wystąpił błąd podczas przetwarzania zdjęcia.');
        }
    };

    function handleAddTrip(userId, userTrips) {

        userCars.map((userCar) => {
            if (userCar.carKey === newTripCar) saveUserCar = userCar;
        })



        let temporaryTripKey = userId + 'T' + (userTrips.length);
            const addNewTrip = {
                tripId: (userTrips.length),
                tripKey: temporaryTripKey,
                tripUserNick: userNick,
                tripName: newTripName,
                tripDescription: newTripDescription ,
                tripType: newTripType,
                tripCountry: newTripCountry,
                tripCar: saveUserCar,
                tripLikes: [],
                tripPublic: true,
                tripPhoto: newTripPhoto,
            }
            userTrips.push(addNewTrip)
            const saveNewTrip = {
                    "trips" : userTrips
            }

            allTrips.push(addNewTrip)

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

        // handleImageUpload();
        setSectionSel(1);
    }
    const handleImageChange = (event) => {
        setSelectedImage(event.target.files[0]);
    };

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
                                <option key={userCar.carKey} value={userCar.carKey} className="fnt">
                                    {userCar.carBrand} {userCar.carName}
                                </option>
                            ))}
                        </select>
                    </div>
                </section>
                <section className="box-section">
                    <p>add trip photo</p>
                    <input type="file" onChange={handleImageChange} />
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