import {useEffect, useState} from 'react';
import '../scss/main.scss'
import MainPage from "./MainPage.jsx";


function Login({API}) {

    const [databas, setDatabas] = useState([]);
    const [loggedUser, setLoggedUser]  = useState('')
    const [newUser, setNewUser] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(()=>{
        getAllUsers();
    },[])

    const getAllUsers = () => {
        fetch(`${API}/profile`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setDatabas(data);
                console.log('--------')
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
                console.log(tablica[j])
                databaseTrips.push(tablica[j])
            }
        }
    }

    function checkLogin()  {    // ------------------------------------------------------------------------------------ logowanie

        databas.map((user) => {
            if ((user.name === newUser) && (user.password === newPassword)) {
                setLoggedUser(user)
                setLoggedIn(true)
                console.log('ok')}
             else {

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



    return (
        <>

            {loggedIn ? (<MainPage
                userNameLog = {loggedUser.name}
                userSurnameLog = {loggedUser.surname}
                userCars = {loggedUser.cars}
                userTrips = {loggedUser.trips}
                usersId={loggedUser.id}
                API = {API}
                allTrips = {databaseTrips}
            />) :
            <div className="login_main_div">
                <div className="login_box">
                    <p> Login </p>
                    <input
                        type="text"
                        className="box_input"
                        value={newUser}
                        onChange={inputNewUser}
                        placeholder='enter your account name'
                    />
                    <input
                        type="text"
                        className="box_input"
                        value={newPassword}
                        onChange={inputNewPassword}
                        placeholder='enter the password'
                    />
                    <div className="login_box-buttons">
                        <button className="btn" onClick={()=> checkLogin()}>Login</button>
                        {/*<button className="btn" onClick={()=> newAcc()}>Create an account </button>*/}
                    </div>
                </div>
            </div> }

        </>
    )
}
export default Login;

