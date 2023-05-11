import React, {useState} from 'react';

function CarNew({userId, API, userCars, setSectionSel}) {

    const vehicleTypes=["car", "bike", "4x4", "camper", "other"];
    const fuelTypes=["petrol","diesel","electric","hybrid"];
    const carsTypes=["daily","classic","forFun"];


    const [newCarBrand, setNewCarBrand] = useState('');
    const [newCarName, setNewCarName] = useState('');
    const [newCarEngineFuel, setNewCarEngineFuel] = useState('');
    const [newCarEnginePower, setNewEnginePower] = useState('');
    const [newCarDescription, setNewCarDescription] = useState('');
    const [newCarType, setNewCarType] = useState('');
    const [newCarPhoto, setNewPhoto] = useState('');
    const [newVehicle, setNewVehicle] = useState('');


    // function checkCorrect() {
    //
    // }

    function handleAddCar(userId, userCars) {
        let temporaryCarKey = userId + 'C' + (userCars.length)
            // if (newPassword === newPasswordChk) {

                const addNewCar = {
                    carId: (userCars.length),
                    carKey: temporaryCarKey,
                    carName: newCarName,
                    carBrand: newCarBrand,
                    vehicle: newVehicle,
                    carType: newCarType,
                    tripType: newCarEngineFuel,
                    tripCountry: newCarEnginePower,
                    carDescription: newCarDescription ,
                    tripPhoto: newCarPhoto
                }

                userCars.push(addNewCar)
                const saveNewCar = {
                    "cars" : userCars
                }

                fetch(`${API}/profile/${userId}`
                , {
                    method: "PATCH"
                    ,
                    body: JSON.stringify(saveNewCar),
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
                    maxLength={70}
                    value={newCarBrand}
                    onChange={() => setNewCarBrand(event.target.value)}
                    placeholder= ">>>"
                />
                <p> model </p>
                <input
                    type="text"
                    className="box_input"
                    value={newCarName}
                    maxLength={70}
                    onChange={() => setNewCarName(event.target.value)}
                    // onKeyUp={}
                    placeholder= ">>>"
                />
            </section>
            <section className="box-section box-section-row">
                <p>purpose:</p>
                <select value={newCarType} onChange={() => setNewCarType(event.target.value)} className="fnt box_input_small">
                    {carsTypes.map((carType) => (
                        <option key={carType} value={carType} className="fnt">
                            {carType}
                        </option>
                    ))}
                </select>
                <p> engine fuel</p>

                <select value={newCarEngineFuel} onChange={() => setNewCarEngineFuel(event.target.value)} className="fnt box_input_small">
                    {fuelTypes.map((fuelType) => (
                        <option key={fuelType} value={fuelType} className="fnt">
                            {fuelType}
                        </option>
                    ))}
                </select>


                <p> engine power</p>
                <input
                    type="number"
                    className="box_input box_input_small"
                    value={newCarEnginePower}
                    min={1}
                    max={999}
                    maxLength={3}
                    onChange={() => setNewEnginePower(event.target.value)}
                    // onKeyUp={}
                    placeholder= "hp"
                />



            </section>
            <section>
                <p> Car Description </p>
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
                <button onClick={() => handleAddCar(userId, userCars)} className="btn_save">SAVE</button>
                <button onClick={() => setSectionSel(1)} className="btn_cancel">Cancel</button>
            </section>



        </div>
    );
}


export default CarNew;