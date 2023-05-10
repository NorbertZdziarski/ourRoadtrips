import React, {useEffect, useState} from 'react';
import Login from "./jsx/Login.jsx";
import NewAccount from "./jsx/NewAccount.jsx";




function App() {
    const [slideShow, setSlideShow] = useState(false);


    const API = "http://localhost:3022";
    const [photoGallery, setPhotoFallery] = useState([
        "../warehouse/images/slideshow/bgr_bmw.jpg",
        "../warehouse/images/slideshow/Mazda3_turbo_4x4.jpg",
        "../warehouse/images/slideshow/Pawel_bieszczady_moto.jpg",
        "../warehouse/images/slideshow/20221030_121459.jpg"]);
    const [backgroundImage, setBackgroundImage] = useState(0)


    useEffect(() => {
        const intervalId = setInterval(() => {
            setBackgroundImage(prevIndex => (prevIndex + 1) % photoGallery.length);
            console.log('value slideShow APP')
            console.log(slideShow)
        }, 3000000);
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
                {/*<button className="btn_main btn_main_lft" onClick={() =>setBackgroundImage(photoGallery[0])}></button>*/}
            </div>
            <div className="column_center">
                <main className="main_box fnt_extra" id="main" >
                    <Login
                        API={API}/>
                </main>
            </div>



            <div className="column_right">
                {/*<button className="btn_main btn_main_rgt" onClick={() => setBackgroundImage(photoGallery[1])}></button>*/}
            </div>
        </div>

        </>
    )
}
export default App;
