import {useState} from 'react';

function SmallShowTrip({trip, i, selectCountry, choiceTripType, choiceCarType, choiceVehicleType, APIimg}) {
    const [imageData, setImageData] = useState(null);

    // useEffect(() => {
    //     const fetchImage = async () => {
    //         try {
    //
    //             const response = await fetch(`${APIimg}images/1`);
    //
    //             if (response.ok) {
    //                 const data = await response.json();
    //                 console.log('response: ')
    //                 console.log(response)
    //                 console.log(data)
    //                 setImageData(data.image);
    //             } else {
    //                 console.log('Wystąpił błąd podczas pobierania zdjęcia.');
    //             }
    //         } catch (error) {
    //             console.log('Wystąpił błąd podczas wysyłania żądania.');
    //         }
    //     };
    //
    //     fetchImage();
    // }, []);
    function TripType({tripType}) {
        switch (tripType) {
            case "recreation":
                return <img src="../../warehouse/images/ico/tree-solid.svg" className="ico_smallShowTrip smallTrip_trip" alt="recreation"/>;
            case "sightseeing":
                return <img src="../../warehouse/images/ico/mountain-sun-solid.svg" className="ico_smallShowTrip smallTrip_trip" alt="sightseeing"/>;
            case "extreme":
                return <img src="../../warehouse/images/ico/flag-regular.svg" className="ico_smallShowTrip smallTrip_trip" alt="extreme"/>;
            default:
                return <p></p>
        }
    }
    function CarType(carType) {
        console.log(carType.carType)
        console.log(carType.carType.vehicle)
        switch (carType.carType.vehicle) {
            case "car":
                return <img src="../../warehouse/images/ico/car-solid.svg" className="ico_smallShowTrip smallTrip_car" alt="car" title="car"/>
            case "bike":
                return <img src="../../warehouse/images/ico/motorcycle-solid.svg" className="ico_smallShowTrip smallTrip_car" alt="motorcycle"/>;
            case "4x4":
                return <img src="../../warehouse/images/ico/truck-monster-solid.svg" className="ico_smallShowTrip smallTrip_car" alt="off roader"/>;
            case "camper":
                return <img src="../../warehouse/images/ico/van-shuttle-solid.svg" className="ico_smallShowTrip smallTrip_car" alt="camper"/>;
            default:
                return <img src="../../warehouse/images/ico/screwdriver-solid.svg" className="ico_smallShowTrip smallTrip_car" alt="error"/>
        }
    }
    function TripLikes() {
        return <img src="../../warehouse/images/ico/star-regular.svg" className="ico_smallShowTrip smallTrip_like" alt="extreme"/>;
    }
   function UserNick({userNick}) {
    return <div className=" smallTrip_nick" >by: {userNick} </div>;
    }



    if (!trip.tripPublic) return;

    if (selectCountry !== "all" && selectCountry !== trip.tripCountry ) return;
    if (choiceTripType !== "all" && choiceTripType !== trip.tripType) return;
    if (choiceCarType !== "all" && choiceCarType !== trip.tripCar.carType) return;
    if (choiceVehicleType !== "all" && choiceVehicleType !== trip.tripCar.vehicle) return;

    let indexNr = trip.tripKey.indexOf("T");
    let userIndex = trip.tripKey.slice(0, indexNr);


    return (
        <div key={trip.tripKey} className="box-content ">

            {(trip.tripPhoto ? <img src={`data:image/jpeg;base64,${trip.tripPhoto}`} className="smallBox_image" title="click for more"/> : <img src="../../warehouse/images/ico/noimage.jpg" className="smallBox_image" title="click for more"/>)}


            <div className="box-content-column">
                <p className="fnt_title">{trip.tripName}</p>
                <p className="fnt sst_description"  >{trip.tripDescription.slice(0,80)}...</p>
                <section className="box-section-row">
                    <p className="fnt smallTrip_country">{trip.tripCountry}</p>
                    <TripType
                        tripType = {trip.tripType}
                    />
                    <CarType
                        carType = {trip.tripCar}
                    />
                    <UserNick
                        userNick = {trip.tripUserNick}
                    />
                </section>

                <TripLikes/>
            </div>

            {/*<button className="button__zobacz"></button>*/}
            {/*<button className="button__like"></button>*/}

        </div>
    );
}

export default SmallShowTrip;

