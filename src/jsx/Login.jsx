import {useEffect, useState} from 'react';
import '../scss/main.scss'
import MainPage from "./MainPage.jsx";
import NewAccount from "./NewAccount.jsx";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import {  signInWithPopup } from "firebase/auth";
import { getDatabase } from "firebase/database";
// import data from "@react-google-maps/api/src/components/drawing/Data.js";
import { ref, set } from "firebase/database";
import { child, get } from "firebase/database";

function Login({API}) {

    const provider = new GoogleAuthProvider();
    const firebaseConfig = {
        apiKey: "AIzaSyCFuyx_Ik4TUpQk7VDc6yOWZdYZkhuMfPQ",
        authDomain: "ourroadtrips-a2b30.firebaseapp.com",
        databaseURL: "https://ourroadtrips-a2b30-default-rtdb.europe-west1.firebasedatabase.app/",
        projectId: "ourroadtrips-a2b30",
        storageBucket: "ourroadtrips-a2b30.appspot.com",
        messagingSenderId: "59896103796",
        appId: "1:59896103796:web:98f63b8754c102dbe66221",
        measurementId: "G-H7VQVJZK5B"
    };

    const app = initializeApp(firebaseConfig);
    const database = getDatabase(app);






    function writeUserData(userId, name, email, imageUrl) {
        const db = getDatabase();
        console.log("write User Data")
        set(ref(db, 'profile/' + userId), {
            username: name,
            email: email,
            profile_picture : imageUrl
        });
    }

    // const [databas, setDatabas] = useState([]);
    const [loggedUser, setLoggedUser]  = useState('')
    const [newUser, setNewUser] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const [loggedInNA, setLoggedInNA] = useState(false);
    const [loggedInLogin, setLoggedInLogin] = useState(false);
    const [newAnnouncement, setNewAnnouncement] = useState("")
    const auth = getAuth();
    let databaseTrips = [];
    const databas = [];

    useEffect(()=>{
        getAllUsers();
    },[loggedInLogin])

    const getAllUsers = () => {

        const dbRef = ref(getDatabase());

        get(child(dbRef, 'profile')).then((snapshot) => {

            if (snapshot.exists()) {
                let bazadanych = [...snapshot.val()]
                    bazadanych.map((dane) => {
                    databas.push(dane)
                    });



                console.log('trasy')
                for (let i = 0; i < databas.length; i++) {
                    let tablica = databas[i].trips

                    if (tablica.length > 0) {
                        for (let j = 0; j < tablica.length; j++) {
                            // console.log(tablica[j])
                            databaseTrips.push(tablica[j])
                        }
                    }
                }

            } else {
                console.log("No data available");
            }
        }).catch((error) => {

            console.error(error);
        });


        // fetch(`${API}/profile`)
        //     .then(response => response.json())
        //     .then(data => {
        //         console.log(data)
        //         setDatabas(data);
        //     })
        //     .catch(error => {
        //         console.log(error);
        //     });
    }

    function googleLogin() {


        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // IdP data available using getAdditionalUserInfo(result)
                        // console.log('ZAPIS danych')
                        // writeUserData(token, "Ala", "email@aa.pl", "image U R L")
                        // console.log("zapisane???")
                setLoggedUser(user)
                setLoggedIn(true)
                setLoggedInLogin(true);


                // ...
            }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });
    }
    function checkLogin()  {
        signInWithEmailAndPassword(auth, newUser, newPassword)
            .then((userCredential) => {
                const user = userCredential.user;
                        setLoggedUser(user)
                        setLoggedIn(true)
                        setLoggedInLogin(true);

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage)
                console.log(errorCode)



            });

        // databas.map((user) => {
        //     if ((user.nick === newUser) && (user.password === newPassword)) {
        //         setLoggedUser(user)
        //         setLoggedIn(true)
        //         setLoggedInLogin(true);
        //         console.log('ok')}
        //      else {
        //         setNewAnnouncement('wrong password or username')
        //         // setLoggedIn(false)
        //         setNewUser("")
        //         setNewPassword("")
        //         console.log('błąd <<<<<<<<<<')}
        // })
    }

    const inputNewUser = (event) => {
        setNewUser(event.target.value)}
    const inputNewPassword = (event) => {
        setNewPassword(event.target.value)}

    function newAcc() {
        setNewUser("")
        setNewPassword("")
        setLoggedInNA(true)

    }

    // userCars = {loggedUser.cars}
    // userTrips = {loggedUser.trips}


    return (
        <>

            {loggedIn ? (<MainPage
                userNickLog = {loggedUser.nick}
                userNameLog = {loggedUser.name}
                userSurnameLog = {loggedUser.surname}
                userPasswordLog = {loggedUser.password}
                userCars = {[]}
                userTrips = {[]}
                usersId={loggedUser.id}
                API = {API}
                allTrips = {databaseTrips}
                setLoggedInMain = {setLoggedIn}
                setLoggedUser = {setLoggedUser}
                setLoggedInLogin = {setLoggedInLogin}

            />) : '' }
            {loggedInNA ? <NewAccount
                API={API}
                setLoggedIn = {setLoggedIn}
                setLoggedInNA = {setLoggedInNA}
                setLoggedInLogin = {setLoggedInLogin}

            /> : ''}
            {loggedInLogin ? '' :
            <div className="login_main_div">
                <div className="login_box">
                    <div className="login_title">
                    <p className="login__header"> Login </p>
                    <a className="fnt_header__username btn_txt" onClick={()=> googleLogin()}> or login in with google</a>
                    </div>
                    <section >
                        <input
                            type="text"
                            className="box_input"
                            value={newUser}
                            onChange={inputNewUser}
                            placeholder='enter your account name'
                        />
                        <input
                            type="password"
                            className="box_input"
                            value={newPassword}
                            onChange={inputNewPassword}
                            placeholder='enter the password'
                        />
                        <p className="errorAnnouncement">{newAnnouncement}</p>
                    </section>
                    <div className="login_box-buttons">

                        <button className="btn_typical" onClick={()=> checkLogin()}>Login</button>

                        <button className="btn_typical" onClick={()=> newAcc()}>Create an account </button>
                    </div>
                </div>
            </div>}
        </>
    )
}
export default Login;

