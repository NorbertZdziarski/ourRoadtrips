import React, {useEffect, useState} from 'react';
import Login from "./jsx/Login.jsx";
import NewAccount from "./jsx/NewAccount.jsx";




function App() {
    const [loggedIn, setLoggedIn] = useState(false);


    const API = "http://localhost:3022";
    const [photoGallery, setPhotoFallery] = useState([
        "../warehouse/images/slideshow/bgr_bmw.jpg",
        "../warehouse/images/slideshow/Pawel_bieszczady_moto.jpg",
        "../warehouse/images/slideshow/20221030_121459.jpg"]);
    const [backgroundImage, setBackgroundImage] = useState(0)


    useEffect(() => {
        const intervalId = setInterval(() => {
            setBackgroundImage(prevIndex => (prevIndex + 1) % photoGallery.length);
        }, 10000);
        return () => {
            clearInterval(intervalId);
        };
    }, [photoGallery]);


    // function changePhoto() {
    //
    // }

    return (<>
        <div className="main__bgr__img_parent">
            <img src={photoGallery[backgroundImage]} className="main__bgr__img"/>
        </div>
        <div className="main__div ">
            <div className="column_left">
                <button className="btn_main btn_main_lft" onClick={() =>setBackgroundImage(photoGallery[0])}></button>
            </div>
            <div className="column_center">
                {/*<div className="box-dekor">*/}
                {/*    <header className="main_header">*/}
                {/*        <nav className="header__nav fnt">MAIN MENU</nav>*/}
                {/*        <div className="header__logo fnt">ourRoadrips</div>*/}
                {/*    </header>*/}
                {/*</div>*/}

                <main className="main_box fnt_extra" id="main" >
                    {loggedIn ? <NewAccount API={API} setLoggedIn={setLoggedIn}/> : <Login API={API}/> }
                </main>
            </div>



            <div className="column_right">
                <button className="btn_main btn_main_rgt" onClick={() => setBackgroundImage(photoGallery[1])}></button>
            </div>
        </div>

        </>
    )
}
export default App;
