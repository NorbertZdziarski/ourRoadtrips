import {useState} from 'react';

function EditUser({userName, userSurname, userId, API, setLoggedIn}) {

    const [newName, setNewName] = useState("")
    const [newSurname, setNewSurname] = useState("")



    const saveData = (id) => {  // ------------------------------------------------------------------------------------ zmiana - w trakcie pracy
        const data = {
            name: newName,
            surname: newSurname
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
                // setLoggedUser(data);
                console.log(data);
            })
            .catch(error => {
                console.log(error);
            });
        setLoggedIn(false)
    }

    const inputNewName = (event) => {
        setNewName(event.target.value)}
    const inputNewSurname = (event) => {
        setNewSurname(event.target.value)}

    return (
        <div>

            <input
                type="text"
                className="box_input"
                value={newName}
                onChange={inputNewName}
                // onKeyUp={}
                placeholder={userName}
            />
            <input
                type="text"
                className="box_input"
                value={newSurname}
                onChange={inputNewSurname}
                // onKeyUp={}
                placeholder={userSurname}
            />

            <button onClick={() => saveData(userId)}>Save</button>

        </div>
    );
}

export default EditUser;
