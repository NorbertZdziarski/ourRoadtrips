import React, {useState} from 'react';

function CarNew({userId, API, userCars, setSectionSel}) {
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
                    placeholder= ">>>"
                />
                <p> model </p>
                <input
                    type="text"
                    className="box_input"
                    value={newCarName}
                    onChange={() => setNewCarName(event.target.value)}
                    // onKeyUp={}
                    placeholder= ">>>"
                />
            </section>
            <section>

                <p> engine fuel</p>
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
                    onChange={() => setNewEnginePower(event.target.value)}
                    // onKeyUp={}
                    placeholder= ">>>"
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
                <button onClick={() => handleAddCar(userId, userCars)}>SAVE</button>
                <button onClick={() => setSectionSel(1)}>Cancel</button>
            </section>



        </div>
    );
}


export default CarNew;