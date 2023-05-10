import {useState} from 'react';

function EditUser({userName, userSurname, userPassword, userId, API, setLoggedIn, setUserSurname, setUserName, setSectionSel}) {

    const [newName, setNewName] = useState('')
    const [newSurname, setNewSurname] = useState('')
    const [newPassword, setNewPassword] = useState("")
    const [newPasswordRepeat, setNewPasswordRepeat] = useState("")
    const [newAnnouncement, setNewAnnouncement] = useState("")




    const saveData = (id) => {  // ------------------------------------------------------------------------------------ zmiana - w trakcie pracy

        if (newPassword === newPasswordRepeat) {

            const data = {
                name: (newName ? newName : userName),
                surname: (newSurname ? newSurname : userSurname),
                password: (newPassword ? newPassword : userPassword)
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

                    setNewName(newName)
                    setNewSurname(newSurname)


                })
                .catch(error => {
                    console.log(error);
                });
            setSectionSel(1);
        } else {setNewAnnouncement('password error')}
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
                value={newPassword}
                onChange={() => setNewPassword(event.target.value)}
                // onKeyUp={}
                placeholder="enter new password"
            />
            <input
                type="text"
                className="box_input"
                value={newPasswordRepeat}
                onChange={() => setNewPasswordRepeat(event.target.value)}
                // onKeyUp={}
                placeholder="repeat new password"
            />
            <p className="errorAnnouncement">{newAnnouncement}</p>
            <section className="div-accept">
                <button onClick={() => saveData(userId)} className="btn_save">Save</button>
                <button onClick={() => setSectionSel(1)} className="btn_cancel">Cancel</button>
            </section>

        </div>
    );
}

export default EditUser;
