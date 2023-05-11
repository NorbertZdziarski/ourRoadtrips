import {useState} from 'react';


function TripEdit({selectedTrip, userTrips, userCars, userId, API, setSectionSel, userNick, allTrips}) {
    let saveUserCar = {};
    let base64Data;
    const countriesInEurope = ["Albania", "Andorra", "Austria", "Belarus", "Belgium", "Bosnia and Herzegovina", "Bulgaria", "Croatia", "Cyprus", "Czech Republic", "Denmark", "Estonia", "Finland", "France", "Germany", "Greece", "Hungary", "Iceland", "Ireland", "Italy", "Kosovo", "Latvia", "Liechtenstein", "Lithuania", "Luxembourg", "Malta", "Moldova", "Monaco", "Montenegro", "Netherlands", "North Macedonia", "Norway", "Poland", "Portugal", "Romania", "Russia", "San Marino", "Serbia", "Slovakia", "Slovenia", "Spain", "Sweden", "Switzerland", "Ukraine", "United Kingdom", "Vatican City"];
    const tripTypes = ["recreation", "sightseeing", "extreme"];

    const [newTripName, setNewTripName] = useState(selectedTrip.tripName)
    const [newTripDescription, setNewTripDescription] = useState(selectedTrip.tripDescription)
    const [newTripType, setNewTripType] = useState(selectedTrip.tripType)
    const [newTripCar, setNewTripCar] = useState(selectedTrip.tripCar.carKey)

    const [newTripPhoto, setNewTripPhoto] = useState("")
    const [newTripPublic, setNewTripPublic] = useState(true)
    const [selectCountry, setSelectCountry] = useState(selectedTrip.tripCountry)
    const [selectedImage, setSelectedImage] = useState(null);


    const saveData = async (id, idTrip, del) => {



        userCars.map((userCar) => {
            if (userCar.carKey === newTripCar) saveUserCar = userCar;
        })

        if (!selectedImage) {
            base64Data = selectedTrip.tripPhoto
            return;
        }

        try {
            const reader = new FileReader();
            reader.readAsDataURL(selectedImage);
            reader.onloadend = async () => {
                base64Data = reader.result.split(',')[1];



                console.log('userNick')
                console.log(userNick)



                if (del) {
                    userTrips[idTrip] = {
                        tripId: idTrip,
                        tripKey: selectedTrip.tripKey,
                        tripUserNick: "",
                        tripName: "",
                        tripDescription: "",
                        tripType: "",
                        tripCountry: "",
                        tripCar: "",
                        tripLikes: "",
                        tripPublic: false,
                        tripPhoto: ""}
                } else {
                    userTrips[idTrip] = {
                        tripId: idTrip,
                        tripKey: selectedTrip.tripKey,
                        tripUserNick: userNick,
                        tripName: (newTripName ? newTripName : selectedTrip.tripName),
                        tripDescription: (newTripDescription ? newTripDescription : selectedTrip.tripDescription),
                        tripType: (newTripType ? newTripType : selectedTrip.tripType),
                        tripCountry: (selectCountry ? selectCountry : selectedTrip.tripCountry),
                        tripCar: (newTripCar ? saveUserCar : selectedTrip.tripCar),
                        tripLikes: selectedTrip.tripLikes,
                        tripPublic: (newTripPublic ? newTripPublic : selectedTrip.tripPublic),
                        tripPhoto: base64Data,
                    };}
                const saveTrip = {
                    "trips" : userTrips
                }

                console.log("userTrip" + userTrips[idTrip])
                console.log("selected Trip: " + selectedTrip)

                userTrips.forEach((index, obj) => {
                    if (obj.tripId === selectedTrip.tripId) {userTrips[index] = {...selectedTrip}}
                })
                allTrips.forEach((index, obj) => {
                    if (obj.tripKey === selectedTrip.tripKey) {allTrips[index] = {...selectedTrip}}
                })


                try {
                    const response = await fetch(`${API}/profile/${id}`
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


                                console.log(data);
                            })
                            .catch(error => {
                                console.log(error);
                            });

                    if (response.ok) {
                        const data = await response.json();
                        console.log('Zdjęcie zostało zapisane na serwerze. ID:', data.id);
                        setNewTripPhoto(data.id);
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
            setSectionSel(1);
    };

    const handleImageChange = (event) => {
        setSelectedImage(event.target.files[0]);
    };

    return (
        <div className="fnt_userpanel">
            <h3 className="login__header"> EDIT YOUR TRIP:</h3>
            <section className="box-section">
                <p> title: </p>
                <input
                    type="text"
                    className="box_input"
                    maxLength={70}
                    value={newTripName}
                    onChange={() => setNewTripName(event.target.value)}

                />
                <p> description: </p>
                <textarea
                    className="box_input-description"

                    value={newTripDescription}
                    onChange={() => setNewTripDescription(event.target.value)}
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

                    <select value={selectCountry} onChange={() => setSelectCountry(event.target.value)} className="fnt box_input_trip">
                        {countriesInEurope.map((country) => (
                            <option key={country} value={country} className="fnt ">
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
                <button onClick={() => saveData(userId, selectedTrip.tripId, false)} className="btn_save">Save</button>
                <button onClick={() => saveData(userId, selectedTrip.tripId, true)} className="btn_delete">Delete</button>

                <button onClick={() => setSectionSel(1)} className="btn_cancel">Cancel</button>
            </section>
        </div>
    );
}

export default TripEdit;