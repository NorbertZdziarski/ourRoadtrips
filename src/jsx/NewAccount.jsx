import React, {useState} from 'react';

function NewAccount({API, setLoggedInNA, setLoggedInLogin}) {
    const [newNick, setNewNick] = useState('');
    const [newName, setNewName] = useState('');
    const [newSurname, setNewSurname] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [newPasswordChk, setNewPasswordChk] = useState('');

    // function checkCorrect() {
    //
    // }
    console.log(' NEW ACCOUNT')
    setLoggedInLogin(true);
    function handleAddUser() {
        if (newPassword === newPasswordChk) {
            const dane = {
                name: newName,
                nick: newNick,
                surname: newSurname,
                password: newPassword,
                cars: [],
                trips: []
            }
            fetch(`${API}/profile`
                , {
                    method: "POST"
                    ,
                    body: JSON.stringify(dane),
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
            setLoggedInLogin(false);
            setLoggedInNA(false);
        }
    }

    function cancel() {
        setLoggedInLogin(false);
        setLoggedInNA(false);
    }




    const inputNewNick = (event) => {
        setNewNick(event.target.value)}
    const inputNewName = (event) => {
        setNewName(event.target.value)}
    const inputNewSurname = (event) => {
        setNewSurname(event.target.value)}
    const inputNewPassword = (event) => {
        setNewPassword(event.target.value)}
    const inputNewPasswordChk = (event) => {
        setNewPasswordChk(event.target.value)}
    return (
        <div className="box new_account">
            <div className="newAccount_main fnt_userpanel">
                <div className="new_account-div">
                    <h2 className="fnt_extra">Create new account</h2>
                    <p>wypełnij pola</p>
                </div>
                <div>
                    <label>
                        <p>Enter your nick</p>
                        <input
                            type="text"
                            className="box_input"
                            value={newNick}
                            onChange={inputNewNick}
                            placeholder='>>>'
                        />
                    </label>
                </div>
                <div className="new_account-div">
                    <label>
                        <p>Enter your name</p>
                        <input
                            type="text"
                            className="box_input"
                            value={newName}
                            onChange={inputNewName}
                            placeholder='>>>'
                        />
                    </label>
                    <label>
                        <p>Enter your surname</p>
                        <input
                            type="text"
                            className="box_input"
                            value={newSurname}
                            onChange={inputNewSurname}
                            // onKeyUp={}
                            placeholder='>>>'
                        />
                    </label>
                </div>
                <div className="new_account-div">
                    <label>
                        <p>Enter password</p>
                        <input
                            type="password"
                            className="box_input"
                            value={newPassword}
                            onChange={inputNewPassword}
                            // onKeyUp={}
                            placeholder='>>>'
                        />
                    </label>
                    <label>
                        <p>repeat password</p>
                        <input
                            type="password"
                            className="box_input"
                            value={newPasswordChk}
                            onChange={inputNewPasswordChk}
                            // onKeyUp={}
                            placeholder='>>>'
                        />
                    </label>
                </div>
                <div className="div-accept">
                    <p>accept the terms and conditions</p>
                    <input
                        type="checkbox"
                        // className="box_input"
                        // value={newPassword}
                        // onChange={inputNewPassword}
                        // onKeyUp={}
                        placeholder='>>>'
                    />
                </div>
                <div className="div-accept">
                <button onClick={handleAddUser} className="btn_save">SAVE</button>
                <button onClick={cancel} className="btn_cancel">Cancel</button>
                </div>
            </div>
        </div>
    );
}

export default NewAccount;