import React, {useState} from 'react';
import FileUpload from "./TakeFile.jsx";
import SaveFile from "./SaveFile.jsx";



function TripEdit({selectedTrip, userTrips, userCars, userId, API, setSectionSel}) {
    let saveUserCar = {};
    const countriesInEurope = ["Albania", "Andorra", "Austria", "Belarus", "Belgium", "Bosnia and Herzegovina", "Bulgaria", "Croatia", "Cyprus", "Czech Republic", "Denmark", "Estonia", "Finland", "France", "Germany", "Greece", "Hungary", "Iceland", "Ireland", "Italy", "Kosovo", "Latvia", "Liechtenstein", "Lithuania", "Luxembourg", "Malta", "Moldova", "Monaco", "Montenegro", "Netherlands", "North Macedonia", "Norway", "Poland", "Portugal", "Romania", "Russia", "San Marino", "Serbia", "Slovakia", "Slovenia", "Spain", "Sweden", "Switzerland", "Ukraine", "United Kingdom", "Vatican City"];
    const tripTypes = ["recreation", "sightseeing", "extreme"];

    const [newTripName, setNewTripName] = useState(selectedTrip.tripName)
    const [newTripDescription, setNewTripDescription] = useState(selectedTrip.tripDescription)
    const [newTripType, setNewTripType] = useState(selectedTrip.tripType)
    const [newTripCar, setNewTripCar] = useState(selectedTrip.tripCar.carKey)

    const [newTripPhoto, setNewTripPhoto] = useState("")
    const [newTripPublic, setNewTripPublic] = useState(true)
    const [selectCountry, setSelectCountry] = useState(selectedTrip.tripCountry)


    const saveData = (id, idTrip, del) => {


      userCars.map((userCar) => {
          if (userCar.carKey === newTripCar) saveUserCar = userCar;
      })

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
            tripCar: (newTripCar ? saveUserCar : selectedTrip.tripCar),
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
                userTrips.forEach((index, obj) => {
                    if (obj.tripId === selectedTrip.tripId) {userTrips[index] = {...selectedTrip}}
                })
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

        // const handleFileChange = (event) => {
        //     setSelectedFile(event.target.files[0]);
        // };

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
                    // placeholder= {selectedTrip.tripName}
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
            <section className="box-section under_construction">
                <p>add trip photo</p>
                <input type="file" onChange={()=>setSelectedFile(event.target.files[0])} />
                <button onClick={handleUpload} className="btn_cancel">Upload</button>
            </section>
            <section className="div-accept">
                <button onClick={() => saveData(userId, selectedTrip.tripId, false)} className="btn_save">Save {newTripCar}</button>
                <button onClick={() => saveData(userId, selectedTrip.tripId, true)} className="btn_delete">Delete</button>
                {/*<button onClick={() => fileUp}>Add File</button>*/}
                <button onClick={() => setSectionSel(1)} className="btn_cancel">Cancel</button>
                {/*<FileUpload*/}
                {/*    userId = {'ffff'}*/}
                {/*/>;*/}
                <SaveFile
                    API = {API}
                />
            </section>
        </div>
    );
}

export default TripEdit;