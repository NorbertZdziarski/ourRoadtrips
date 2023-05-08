import React, {useState} from 'react';

function CarEdit({selectedCar, userCars, userId, API, setSectionSel}) {

    const [newCarName, setNewCarName] = useState("")
    const [newCarBrand, setNewCarBrand] = useState("")
    const [newVehicle, setNewVehicle] = useState("")
    const [newCarType, setNewCarType] = useState("")
    const [newCarEngineFuel, setNewCarEngineFuel] = useState("")
    const [newCarEnginePower, setNewCarEnginePower] = useState("")
    const [newCarDescription, setNewCarDescription] = useState("")
    const [newCarPhoto, setNewCarPhoto] = useState("")


    const saveData = (id, idCar) => {  // ------------------------------------------------------------------------------------ zmiana - w trakcie pracy

        userCars[idCar] = {
            carId: idCar,
            carKey: "",
            carBrand: (newCarBrand ? newCarBrand : selectedCar.carBrand),
            carName: (newCarName ? newCarName : selectedCar.carName),
            vehicle: (newVehicle ? newVehicle: selectedCar.vehicle),
            carType: (newCarType ? newCarType : selectedCar.carType),
            carEngineFuel: (newCarEngineFuel ? newCarEngineFuel : selectedCar.carEngineFuel),
            carEnginePower: (newCarEnginePower ? newCarEnginePower : selectedCar.carEnginePower),
            carDescription: (newCarDescription ? newCarDescription : selectedCar.carDescription),
            carPhoto: (newCarPhoto ? newCarPhoto : selectedCar.carPhoto)
        };

        // userTrips.push(addNewTrip)
        const saveCar = {
            "cars" : userCars
        }

        console.log('ID:   ' + id)
        fetch(`${API}/profile/${id}`
            , {
                method: "PATCH"
                ,
                body: JSON.stringify(saveCar),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then(response => response.json())
            .then(data => {
                // setUserName(newName)
                // setUserSurname(newSurname)
                console.log('then data vvv')
                console.log(data);
            })
            .catch(error => {
                console.log(error);
            });
        setSectionSel(1);
    }


    return (
        <div className="fnt_userpanel">
            <p> vehicle type:</p>

            <select onChange={() => setNewVehicle(event.target.value)}>
                <option value="---"> </option>
                <option value="car">car</option>
                <option value="bike">bike</option>
                <option value="4x4">4x4</option>
                <option value="camper">Camper</option>
                <option value="other">other</option>
            </select>
            <p> Producent </p>
            <section>
                <input
                    type="text"
                    className="box_input"
                    value={newCarBrand}
                    onChange={() => setNewCarBrand(event.target.value)}
                    placeholder= {selectedCar.carBrand}
                />
                <p> model </p>
                <input
                    type="text"
                    className="box_input"
                    value={newCarName}
                    onChange={() => setNewCarName(event.target.value)}
                    // onKeyUp={}
                    placeholder= {selectedCar.carName}
                />
             </section>
            <section>

                <p> engine fuel:</p>
                {/*<select multiple={true} value={['B', 'C']}>*/}
                <select onChange={() => setNewCarEngineFuel(event.target.value)}>
                    <option value="---"> </option>
                    <option value="petrol">Petrol</option>
                    <option value="diesel">Diesel</option>
                    <option value="electric">Electric</option>
                </select>
                <p> engine power</p>
                <input
                    type="number"
                    className="box_input"
                    value={newCarEnginePower}
                    onChange={() => setNewCarEnginePower(event.target.value)}
                    // onKeyUp={}
                    placeholder= {selectedCar.carEnginePower}
                />
            </section>
            <section>
                <p> for you</p>
                {/*<select multiple={true} value={['B', 'C']}>*/}
                <select onChange={() => setNewCarType(event.target.value)}>
                    <option value="---"> </option>
                    <option value="daily">daily</option>
                    <option value="classic">classic</option>
                    <option value="forFun">for fun</option>
                </select>
            </section>
            <section>
                   <textarea
                       className="box_input"
                       // id=""
                       // name=""
                       value={newCarDescription}
                       onChange={() => setNewCarDescription(event.target.value)}
                       placeholder='>>>'
                   />
            </section>
            <section>
                <button onClick={() => saveData(userId, selectedCar.carId)}>Save</button>
                <button onClick={() => setSectionSel(1)}>Cancel</button>
            </section>
        </div>
    );
}

export default CarEdit;