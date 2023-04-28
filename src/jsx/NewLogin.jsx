import React from 'react';

function NewLogin(props) {
    return (
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
                    <button className="btn" onClick={()=> checkLogin()}>Create an account </button>
                </div>
            </div>
        </div>
    );
}

export default NewLogin;