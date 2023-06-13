import React, {useState} from 'react';
import {createUserWithEmailAndPassword, getAuth} from "firebase/auth";


function NewAccount({API, setLoggedInNA, setLoggedInLogin, setLoggedIn}) {
    const [newNick, setNewNick] = useState('');
    const [newName, setNewName] = useState('');
    const [newSurname, setNewSurname] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [newPasswordChk, setNewPasswordChk] = useState('');
    const [termsAndConditions, setTermsAndConditions] = useState(false)
    const [newAnnouncement, setNewAnnouncement] = useState("")


    setLoggedInLogin(true);

    const firebaseConfig = {
        apiKey: "AIzaSyCFuyx_Ik4TUpQk7VDc6yOWZdYZkhuMfPQ",
        authDomain: "ourroadtrips-a2b30.firebaseapp.com",
        databaseURL: "https://ourroadtrips-a2b30-default-rtdb.europe-west1.firebasedatabase.app",
        projectId: "ourroadtrips-a2b30",
        storageBucket: "ourroadtrips-a2b30.appspot.com",
        messagingSenderId: "59896103796",
        appId: "1:59896103796:web:98f63b8754c102dbe66221",
        measurementId: "G-H7VQVJZK5B"
    };




    function handleAddUser() {
        if (!termsAndConditions) {
            setNewAnnouncement('please accept the terms and conditions.')
            return;
        }
        if (newPassword === newPasswordChk) {


            const auth = getAuth();
            createUserWithEmailAndPassword(auth, newNick, newPassword)
                .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    // ...
                    setLoggedInLogin(false);
                    setLoggedInNA(false);
                    setLoggedIn(false);
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setNewAnnouncement(errorMessage)
                    // ..
                });



            // const dane = {
            //     name: newName,
            //     nick: newNick,
            //     surname: newSurname,
            //     password: newPassword,
            //     cars: [],
            //     trips: []
            // }
            // fetch(`${API}/profile`
            //     , {
            //         method: "POST"
            //         ,
            //         body: JSON.stringify(dane),
            //         headers: {
            //             "Content-Type": "application/json"
            //         }
            //     })
            //     .then(response => response.json())
            //     .then(data => {
            //
            //         console.log(data);
            //     })
            //     .catch(error => {
            //         console.log(error);
            //     });
            // setLoggedInLogin(false);
            // setLoggedInNA(false);
            // setLoggedIn(false);
        } else {
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

    const checboxChange = (event) => {
        setTermsAndConditions(event.target.checked)
    }


    return (
        <div className="box new_account">
            <div className="newAccount_main fnt_userpanel">
                <div className="new_account-div">
                    <h2 className="fnt_extra">Create new account</h2>
                    <p>wypełnij pola</p>
                </div>
                <div>
                    <label>
                        <p>Enter your email</p>
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
                        checked={termsAndConditions}
                        onChange={checboxChange}
                    />
                </div>
                <div className="div-accept">
                    <p className="errorAnnouncement">{newAnnouncement}</p>
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