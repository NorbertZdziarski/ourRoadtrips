import React, {useEffect, useState} from 'react';
import Login from "./jsx/Login.jsx";
import NewAccount from "./jsx/NewAccount.jsx";
import UserPanel from "./jsx/UserPanel.jsx";





function App() {
    const [loggedIn, setLoggedIn] = useState(false);
    const API = "http://localhost:3022";


    return (
        <>
            <div className="main__div main__bgr__img">
                <div className="column_left">
                    <button className="btn_main btn_main_lft">left</button>
                </div>
                <div className="column_center">
                    <div className="box-dekor">
                        <header className="main_header">
                            <nav className="header__nav fnt">MAIN MENU</nav>
                            <div className="header__logo fnt">ourRoadrips</div>
                        </header>
                    </div>

                    <main className="main_box fnt_extra" id="main" >
                        {loggedIn ? <NewAccount API={API} setLoggedIn={setLoggedIn}/> : <Login API={API}/> }
                    </main>
                </div>



                <div className="column_right">
                    <button className="btn_main btn_main_rgt">right</button>
                </div>
            </div>



        </>
    )
}
export default App;
