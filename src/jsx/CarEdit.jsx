import React, {useState} from 'react';

function CarEdit({selectedCar, userCars, userId, API, setSectionSel}) {
    console.log('car edit: ')
    console.log(selectedCar)

    console.log(userCars[selectedCar.carId])



    const vehicleTypes=["car", "bike", "4x4", "camper", "other"];
    const fuelTypes=["petrol","diesel","electric","hybrid"];
    const carsTypes=["daily","classic","forFun"];


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
                userCars.forEach((index, obj) => {
                    if (obj.carId === selectedCar.carId) {userCars[index] = {...selectedCar}}
                })

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
            <select value={newVehicle} onChange={() => setNewVehicle(event.target.value)} className="fnt" >
                {vehicleTypes.map((vehicleType) => (
                    <option key={vehicleType} value={vehicleType} className="fnt">
                        {vehicleType}
                    </option>
                ))}
            </select>
            <p> Producent </p>
            <section className="box-section">
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
            <section className="box-section box-section-row">
                <p> for you</p>
                <select value={newCarType} onChange={() => setNewCarType(event.target.value)} className="fnt box_input_small">
                    {carsTypes.map((carType) => (
                        <option key={carType} value={carType} className="fnt">
                            {carType}
                        </option>
                    ))}
                </select>
                <p> engine fuel:</p>
                <select value={newCarEngineFuel} onChange={() => setNewCarEngineFuel(event.target.value)} className="fnt box_input_small">
                    {fuelTypes.map((fuelType) => (
                        <option key={fuelType} value={fuelType} className="fnt ">
                            {fuelType}
                        </option>
                    ))}
                </select>
                <p> engine power</p>
                <input
                    type="number"
                    className="box_input box_input_small"
                    value={newCarEnginePower}
                    onChange={() => setNewCarEnginePower(event.target.value)}
                    // onKeyUp={}
                    placeholder= {selectedCar.carEnginePower}
                />
            </section>
            <section>
                   <textarea
                       className="box_input-description"
                       // id=""
                       // name=""
                       value={newCarDescription}
                       onChange={() => setNewCarDescription(event.target.value)}
                       placeholder='>>>'
                   />
            </section>
            <section className="div-accept">
                <button onClick={() => saveData(userId, selectedCar.carId)} className="btn_save">Save</button>
                <button  className="btn_delete">Delete</button>
                {/*onClick={() => saveData(userId, selectedTrip.tripId, true)}*/}

                <button onClick={() => setSectionSel(1)} className="btn_cancel">Cancel</button>
            </section>
        </div>
    );
}

export default CarEdit;