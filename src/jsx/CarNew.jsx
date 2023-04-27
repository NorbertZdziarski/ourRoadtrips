import React, {useState} from 'react';

function CarNew({userId, API, userCars, setSectionSel}) {
    const [newCarBrand, setNewCarBrand] = useState('');
    const [newCarName, setNewCarName] = useState('');
    const [newCarEngineFuel, setNewCarEngineFuel] = useState('');
    const [newCarEnginePower, setNewEnginePower] = useState('');
    const [newCarDescription, setNewCarDescription] = useState('');
    const [newCarType, setNewCarType] = useState('');
    const [newCarPhoto, setNewPhoto] = useState('');


    // function checkCorrect() {
    //
    // }

    function handleAddCar(userId, userCars) {

            // if (newPassword === newPasswordChk) {
        console.log(userCars)
                const addNewCar = {
                    carId: (userCars.length),
                    carName: newCarName,
                    carBrand: newCarBrand,
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
        <div className="newAccount_main">
            <div>
                <h2>Dodaj swoją furę</h2>
                <p>wypełnij pola zonaczone *</p>
            </div>
            <div>
                <label>
                    <p>Marka pojazdu *</p>
                    <input
                        type="text"
                        className="box_input"
                        value={newCarBrand}
                        onChange={((event) => setNewCarBrand(event.target.value))}
                        placeholder='>>>'
                    />
                </label>
            </div>
            <div>
                <label>
                    <p>Model pojazdu *</p>
                    <input
                        type="text"
                        className="box_input"
                        value={newCarName}
                        onChange={((event) => setNewCarName(event.target.value))}
                        placeholder='>>>'
                    />
                </label>
            </div>
            <div>
                <label>
                    <p>rodzaj silnika *</p>
                    <input
                        type="text"
                        className="box_input"
                        value={newCarEngineFuel}
                        // onChange={inputNewTripName}
                        placeholder='>>>'
                    />
                </label>
            </div>
            <div>
                <label>
                    <p>moc silnika *</p>
                    <input
                        type="text"
                        className="box_input"
                        value={newCarEnginePower}
                        // onChange={inputNewTripName}
                        placeholder='>>>'
                    />
                </label>
            </div>

            <div>
                <label>
                    <p>dodaj opis</p>
                    <textarea
                        className="box_input"
                        id=""
                        name=""
                        value={newCarDescription}
                        // onChange={inputNewDescription}
                        placeholder='>>>'
                    />
                </label>

            </div>
            <div>
                <label>
                    <p>Dodaj zdjęcie</p>

                </label>
            </div>
            <button onClick={() => handleAddCar(userId, userCars)}>SAVE</button>

        </div>
    );
}


export default CarNew;