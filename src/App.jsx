import React, {useEffect, useState} from 'react';
import Login from "./jsx/Login.jsx";
import bgr from "../warehouse/images/slideshow/bgr_bmw.jpg"
import NewAccount from "./jsx/NewAccount.jsx";




function App() {
    // const [slideShow, setSlideShow] = useState(false);


    const API = "http://localhost:3022";
    // const [photoGallery, setPhotoFallery] = useState([
    //     "../warehouse/images/slideshow/bgr_bmw.jpg",
    //     "../warehouse/images/slideshow/Mazda3_turbo_4x4.jpg",
    //     "../warehouse/images/slideshow/Pawel_bieszczady_moto.jpg",
    //     "../warehouse/images/slideshow/20221030_121459.jpg"]);
    // const [backgroundImage, setBackgroundImage] = useState(0)





    return (<>
        <div className="main__bgr__img_parent">
            <img src={bgr} className="main__bgr__img" alt="background"/>
        </div>
        <div className="main__div ">
            <div className="column_left">

            </div>
            <div className="column_center">
                <main className="main_box fnt_extra" id="main" >
                    <Login
                        API={API}/>
                </main>
            </div>



            <div className="column_right">

            </div>
        </div>

        </>
    )
}
export default App;
