import React, {useState} from 'react';

function TripNew({userId, userCars}) {
    const [newTripName, setNewTripName] = useState('');
    const [newTripDescription, setNewTripDescription] = useState('');
    const [newTripType, setNewTripType] = useState('');
    const [newTripCountry, setNewTripCountry] = useState('');
    const [newTripCar, setNewTripCar] = useState('');
    const [newTripPhoto, setNewTripPhoto] = useState('');


    // function checkCorrect() {
    //
    // }

    function handleAddTrip() {
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


    // const inputNewTripName = (event) => {
    //     setNewTripName(event.target.value)}
    // const inputNewDescription = (event) => {
    //     setNewDescription(event.target.value)}
    // const inputNewPassword = (event) => {
    //     setNewPassword(event.target.value)}
    // const inputNewPasswordChk = (event) => {
    //     setNewPasswordChk(event.target.value)}
    return (
        <div className="newAccount_main">
            <div>
                <h2>Dodaj swoją wyprawę</h2>
                <p>wypełnij pola zonaczone *</p>
            </div>
            <div>
                <label>
                    <p>nazwij wyprawę *</p>
                    <input
                        type="text"
                        className="box_input"
                        value={newTripName}
                        onChange={((event) => setNewTripName(event.target.value))}
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
                        value={newTripDescription}
                        onChange={((event) => setNewTripDescription(event.target.value))}
                        placeholder='>>>'
                    />
                </label>
                <label>
                    <p>newTripCar</p>
                    <p>list of cars radio</p>
                </label>
            </div>
            <div>
                <label>
                    <p>typ wyprawy (górska, morska, miejska)</p>
                    <input
                        type="text"
                        className="box_input"
                        value={newTripType}
                        // onChange={inputNewTripName}
                        placeholder='>>>'
                    />
                </label>
            </div>
            <div>
                <label>
                    <p>kraj podróży</p>
                    <input
                        type="text"
                        className="box_input"
                        value={newTripCountry}
                        // onChange={inputNewTripName}
                        placeholder='>>>'
                    />
                </label>
            </div>
            <div>
                <label>
                    <p>newTripPhoto</p>
                    {/*<input*/}
                    {/*    type="text"*/}
                    {/*    className="box_input"*/}
                    {/*    value={newTripCountry}*/}
                    {/*    // onChange={inputNewTripName}*/}
                    {/*    placeholder='>>>'*/}
                    {/*/>*/}
                </label>
            </div>



            <button onClick={handleAddTrip}>SAVE</button>

        </div>
    );
}

export default TripNew;