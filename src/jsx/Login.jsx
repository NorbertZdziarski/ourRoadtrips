import {useEffect, useState} from 'react';
import UserPanel from "./UserPanel.jsx";
import '../scss/main.scss'


function Login() {
    const API = "http://localhost:3022";
    const [databas, setDatabas] = useState([]);
    const [loggedUser, setLoggedUser]  = useState('')
    const [newUser, setNewUser] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const [classLogin, setClassLogin] = useState("")


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

    function handleAddTask() {
        const dane = {
            name: newUser,
            surname: newPassword,
            password: "Haslo",
            cars: ["Subaru", "Nissan"],
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
    }

    const changeData = (id) => {  // ------------------------------------------------------------------------------------ zmiana - w trakcie pracy



        const data = {
            surname: "Polonezy rere3"
        };
        console.log(id)
        fetch(`${API}/profile/${id}`
            , {
                method: "PATCH"
                ,
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then(response => response.json())
            .then(data => {
                setLoggedUser(data);
                console.log(data);
            })
            .catch(error => {
                console.log(error);
            });
    }

    function checkLogin()  {    // ------------------------------------------------------------------------------------ logowanie
        setClassLogin((loggedIn ? "" : "off"));
        databas.map((user) => {
            if ((user.name === newUser) && (user.password === newPassword)) {
                setLoggedUser(user)
                setLoggedIn(true)
            } else {console.log('błąd')}
        })
    }


    const print = () => {
        console.log(databas[0]);
        console.log(databas[databas.length - 1]);
        console.log(databas.length);
    }

    // function PrintCars() {
    //     let cars ="";
    //     for (let i = 0; i < loggedUser.cars.length; i++ ) {
    //         cars += `  ${loggedUser.cars[i]}  |`
    //     }
    //     return cars;
    // }

    const inputNewUser = (event) => {
        setNewUser(event.target.value)}
    const inputNewPassword = (event) => {
        setNewPassword(event.target.value)}



    return (
        <>
        <div className={classLogin}>
            <p> Login </p>
            <input
                type="text"
                className="box_input"
                value={newUser}
                onChange={inputNewUser}
                // onKeyUp={}
                placeholder='enter your account name'
            />
            <input
                type="text"
                className="box_input"
                value={newPassword}
                onChange={inputNewPassword}
                // onKeyUp={}
                placeholder='enter the password'
            />
            <button onClick={checkLogin}>Login</button>
            <button onClick={handleAddTask}>save</button>
            <button onClick={print}>klik</button>
            <p>User name: {loggedUser.name}</p>
            <p>User surname: {loggedUser.surname}</p>

            <button onClick={() => changeData(loggedUser.id)}>zmiana</button>

            <p>User id: {loggedUser.id}</p>
        </div>
            {loggedIn ? (<UserPanel
                userName = {loggedUser.name}
                userSurname = {loggedUser.surname}
                userCars = {loggedUser.cars}
                usersId={loggedUser.id}
                API = {API}
            />) : null }
        </>
    )
}
export default Login;
