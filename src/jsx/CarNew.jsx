import React, {useState} from 'react';

function CarNew({user}) {
    const [newCarBrand, setNewCarBrand] = useState('');
    const [newCarName, setNewCarName] = useState('');
    const [newCarEngineFuel, setNewCarEngineFuel] = useState('');
    const [newCarEnginePower, setNewEnginePower] = useState('');
    const [newCarDescription, setNewDescription] = useState('');
    const [newCarPhoto, setNewPhoto] = useState('');


    // function checkCorrect() {
    //
    // }

    function handleAddCar() {
        // if (newPassword === newPasswordChk) {
        //     const dane = {
        //         name: newName,
        //         nick: newNick,
        //         surname: newSurname,
        //         password: newPassword,
        //         cars: [],
        //         trips: []
        //     }
        //     fetch(`${API}/profile`
        //         , {
        //             method: "POST"
        //             ,
        //             body: JSON.stringify(dane),
        //             headers: {
        //                 "Content-Type": "application/json"
        //             }
        //         })
        //         .then(response => response.json())
        //         .then(data => {
        //
        //             console.log(data);
        //         })
        //         .catch(error => {
        //             console.log(error);
        //         });
        // }
    }



    const inputNewTripName = (event) => {
        setNewTripName(event.target.value)}
    const inputNewDescription = (event) => {
        setNewDescription(event.target.value)}
    const inputNewPassword = (event) => {
        setNewPassword(event.target.value)}
    const inputNewPasswordChk = (event) => {
        setNewPasswordChk(event.target.value)}
    return (
        <div className="newAccount_main">
            <div>
                <h2>Dodaj swoją wyprawę</h2>
                <p>wypełnij pola zonaczone *</p>
            </div>
            <div>
                <label>
                    <p>Marka pojazdu *</p>
                    <input
                        type="text"
                        className="box_input"
                        value={newCarBrand}
                        // onChange={inputNewTripName}
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
                        // onChange={inputNewTripName}
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
            <button onClick={handleAddCar}>SAVE</button>

        </div>
    );
}
}

export default CarNew;