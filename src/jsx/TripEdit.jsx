import React, {useState} from 'react';
import FileUpload from "./TakeFile.jsx";



function TripEdit({selectedTrip, userTrips, userCars, userId, API, setSectionSel}) {

    const countriesInEurope = ["Albania", "Andorra", "Austria", "Belarus", "Belgium", "Bosnia and Herzegovina", "Bulgaria", "Croatia", "Cyprus", "Czech Republic", "Denmark", "Estonia", "Finland", "France", "Germany", "Greece", "Hungary", "Iceland", "Ireland", "Italy", "Kosovo", "Latvia", "Liechtenstein", "Lithuania", "Luxembourg", "Malta", "Moldova", "Monaco", "Montenegro", "Netherlands", "North Macedonia", "Norway", "Poland", "Portugal", "Romania", "Russia", "San Marino", "Serbia", "Slovakia", "Slovenia", "Spain", "Sweden", "Switzerland", "Ukraine", "United Kingdom", "Vatican City"];
    const tripTypes = ["recreation", "sightseeing", "extreme"];

    const [newTripName, setNewTripName] = useState("")
    const [newTripDescription, setNewTripDescription] = useState("")
    const [newTripType, setNewTripType] = useState(tripTypes[0])
    const [newTripCar, setNewTripCar] = useState(userCars[0].carBrand)
    const [newTripPhoto, setNewTripPhoto] = useState("")
    const [newTripPublic, setNewTripPublic] = useState(true)
    const [selectCountry, setSelectCountry] = useState(countriesInEurope[0])


    const saveData = (id, idTrip, del) => {

        if (del) {
            userTrips[idTrip] = {
                tripId: idTrip,
                tripKey: selectedTrip.tripKey,
                tripName: "",
                tripDescription: "",
                tripType: "",
                tripCountry: "",
                tripCar: "",
                tripPhoto: "",
                tripLikes: "",
                tripPublic: false}
        } else {
        userTrips[idTrip] = {
            tripId: idTrip,
            tripKey: selectedTrip.tripKey,
            tripName: (newTripName ? newTripName : selectedTrip.tripName),
            tripDescription: (newTripDescription ? newTripDescription : selectedTrip.tripDescription),
            tripType: (newTripType ? newTripType : selectedTrip.tripType),
            tripCountry: (selectCountry ? selectCountry : selectedTrip.tripCountry),
            tripCar: (newTripCar ? newTripCar : selectedTrip.tripCar),
            tripPhoto: (newTripPhoto ? newTripPhoto : selectedTrip.carPhoto),
            tripLikes: selectedTrip.tripLikes,
            tripPublic: (newTripPublic ? newTripPublic : selectedTrip.tripPublic)
        };}

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

                console.log(data);
            })
            .catch(error => {
                console.log(error);
            });
        setSectionSel(1);
    }


    // function FileUpload({userId}) {
        const [selectedFile, setSelectedFile] = useState(null);

        console.log('----M------');

        const handleFileChange = (event) => {
            setSelectedFile(event.target.files[0]);
        };

        const handleUpload = () => {
            // kod, który wykorzystuje plik
            console.log(selectedFile);
            // <img src={selectedFile.name}/>

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
                    // onKeyUp={}
                    placeholder= {selectedTrip.tripName}
                />
                <p> description: </p>
                <textarea
                    className="box_input-description"
                    // id=""
                    // name=""
                    value={newTripDescription}
                    onChange={() => setNewTripDescription(event.target.value)}
                    placeholder='>>>'
                />
            </section>
            <section className="box-section box-section-row">
                <div>
                    <p> trip type</p>
                    <select value={newTripType} onChange={() => setNewTripType(event.target.value)} className="fnt">
                        {tripTypes.map((tripType) => (
                            <option key={tripType} value={tripType} className="fnt">
                                {tripType}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <p> where </p>

                    <select value={selectCountry} onChange={() => setSelectCountry(event.target.value)} className="fnt">
                        {countriesInEurope.map((country) => (
                            <option key={country} value={country} className="fnt">
                                {country}
                            </option>
                        ))}
                    </select>

                </div>
                <div>
                    <p>choose a vehicle</p>
                    <select value={newTripCar} onChange={() => setNewTripCar(event.target.value)} className="fnt">
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
                <input type="file" onChange={handleFileChange} />
                <button onClick={handleUpload} className="btn_cancel">Upload</button>
            </section>
            <section className="div-accept">
                <button onClick={() => saveData(userId, selectedTrip.tripId, false)} className="btn_save">Save</button>
                <button onClick={() => saveData(userId, selectedTrip.tripId, true)} className="btn_delete">Delete</button>
                {/*<button onClick={() => fileUp}>Add File</button>*/}
                <button onClick={() => setSectionSel(1)} className="btn_cancel">Cancel</button>
                {/*<FileUpload*/}
                {/*    userId = {'ffff'}*/}
                {/*/>;*/}
            </section>
        </div>
    );
}

export default TripEdit;