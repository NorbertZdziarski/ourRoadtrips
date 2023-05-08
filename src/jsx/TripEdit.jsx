import React, {useState} from 'react';
import FileUpload from "./TakeFile.jsx";



function TripEdit({selectedTrip, userTrips, userCars, userId, API, setSectionSel}) {

    const [newTripName, setNewTripName] = useState("")
    const [newTripDescription, setNewTripDescription] = useState("")
    const [newTripType, setNewTripType] = useState("")
    const [newTripCountry, setNewTripCountry] = useState("")
    const [newTripCar, setNewTripCar] = useState("")
    const [newTripPhoto, setNewTripPhoto] = useState("")
    const [newTripPublic, setNewTripPublic] = useState(true)



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
            tripCountry: (newTripCountry ? newTripCountry : selectedTrip.tripCountry),
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
                <input type="file" onChange={handleFileChange} />
                <button onClick={handleUpload}>Upload</button>
            </section>
            <section>
                <button onClick={() => saveData(userId, selectedTrip.tripId, false)}>Save</button>
                <button onClick={() => saveData(userId, selectedTrip.tripId, true)}>Delete</button>
                {/*<button onClick={() => fileUp}>Add File</button>*/}
                <button onClick={() => setSectionSel(1)}>Cancel</button>
                {/*<FileUpload*/}
                {/*    userId = {'ffff'}*/}
                {/*/>;*/}
            </section>
        </div>
    );
}

export default TripEdit;