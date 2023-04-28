import {useState} from 'react';

function EditUser({userName, userSurname, userId, API, setLoggedIn, setUserSurname, setUserName, setSectionSel}) {

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
                setUserName(newName)
                setUserSurname(newSurname)
                console.log(data);
            })
            .catch(error => {
                console.log(error);
            });
        setSectionSel(1);
    }

    const inputNewName = (event) => {
        setNewName(event.target.value)}
    const inputNewSurname = (event) => {
        setNewSurname(event.target.value)}

    return (
        <div className="fnt_userpanel">

            <p> change your data: </p>
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
            <input
                type="text"
                className="box_input"
                value={newSurname}
                onChange={inputNewSurname}
                // onKeyUp={}
                placeholder="enter new password"
            />
            <input
                type="text"
                className="box_input"
                value={newSurname}
                onChange={inputNewSurname}
                // onKeyUp={}
                placeholder="repeat new password"
            />
            <section>
                <button onClick={() => saveData(userId)}>Save</button>
                <button onClick={() => setSectionSel(1)}>Cancel</button>
            </section>
        </div>
    );
}

export default EditUser;
