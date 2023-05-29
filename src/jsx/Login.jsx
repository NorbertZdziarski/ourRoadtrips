import {useEffect, useState} from 'react';
import '../scss/main.scss'
import MainPage from "./MainPage.jsx";
import NewAccount from "./NewAccount.jsx";


function Login({API}) {

    const [databas, setDatabas] = useState([]);
    const [loggedUser, setLoggedUser]  = useState('')
    const [newUser, setNewUser] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const [loggedInNA, setLoggedInNA] = useState(false);
    const [loggedInLogin, setLoggedInLogin] = useState(false);
    const [newAnnouncement, setNewAnnouncement] = useState("")

    useEffect(()=>{
        getAllUsers();
    },[loggedInLogin])

    const getAllUsers = () => {
        fetch(`${API}/profile`)
            .then(response => response.json())
            .then(data => {
                setDatabas(data);
            })
            .catch(error => {
                console.log(error);
            });
    }

    let databaseTrips = [];

    for (let i = 0; i < databas.length; i++) {
        let tablica = databas[i].trips
        if (tablica.length > 0) {
            for (let j = 0; j < tablica.length; j++) {

                databaseTrips.push(tablica[j])
            }
        }
    }

    function checkLogin()  {    // ------------------------------------------------------------------------------------ logowanie

        databas.map((user) => {
            if ((user.nick === newUser) && (user.password === newPassword)) {
                setLoggedUser(user)
                setLoggedIn(true)
                setLoggedInLogin(true);
                console.log('ok')}
             else {
                setNewAnnouncement('wrong password or username')
                // setLoggedIn(false)
                setNewUser("")
                setNewPassword("")
                console.log('błąd <<<<<<<<<<')}
        })
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

    return (
        <>

            {loggedIn ? (<MainPage
                userNickLog = {loggedUser.nick}
                userNameLog = {loggedUser.name}
                userSurnameLog = {loggedUser.surname}
                userPasswordLog = {loggedUser.password}
                userCars = {loggedUser.cars}
                userTrips = {loggedUser.trips}
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
                    <p className="login__header"> Login </p>
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

