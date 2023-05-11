import React from 'react';
// import GoogleMap from "./GoogleMap.jsx";
// import {LoadScript} from "@react-google-maps/api";
//
// const containerStyle = {
//     width: '400px',
//     height: '400px'
// };
//
// const center = {
//     lat: -3.745,
//     lng: -38.523
// };


function TripLook({trip}) {
// console.log('trip --------------------------------')
//     console.log(trip)
    // userName, userTrip
    // const urlmap = 'https://maps.google.com/maps?width=100%25&amp;height=100%25&amp;hl=en&amp;q=Poland+(ourRoadtrips)&amp;t=&amp;z=6&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'
    const urlmap = 'https://www.google.maps.com/maps/place/Poland'
    console.log(urlmap)

    return (
        <>
            <section className="triplook_header">
                <p>{trip.tripName}</p>
                <p className="fnt_userpanel">by {trip.tripUserNick}</p>
                <div className="triplook_rate"></div>
            </section>
            <section className="triplook_main fnt_userpanel">
                <div className="triplook_column-left">
                    <div className="triplook_description">
                        <p>{trip.tripDescription}</p>
                    </div>
                    <div className="triplook_details">
                        <div>
                            <p>country: {trip.tripCountry}</p>
                            <p>trip type: {trip.tripType}</p>
                        </div>
                        <div>
                            <p>car: {trip.tripCar.carBrand} {trip.tripCar.carName}</p>
                            <p>vehicle: {trip.tripCar.vehicle} </p>
                            <p>purpose: {trip.tripCar.carType}</p>
                            <p>engine: {trip.tripCar.carEngineFuel}</p>
                            <p>power: {trip.tripCar.carEnginePower}hp</p>
                            <p>description: {trip.tripCar.carDescription}</p>
                        </div>

                    </div>
                </div>
                <div className="triplook_column-right">
                    {(trip.tripPhoto ? <img src={`data:image/jpeg;base64,${trip.tripPhoto}`} className="triplook_img" title="click for more"/> : <img src="../../warehouse/images/ico/noimage.jpg" className="triplook_img" title="click for more"/>)}

                    <div className="triplook_map">

                            <iframe width="100%" height="100%" src="https://maps.google.com/maps?width=100%25&amp;height=100%25&amp;hl=en&amp;q=Poland+(ourRoadtrips)&amp;t=&amp;z=6&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                                <a href="https://www.maps.ie/distance-area-calculator.html">area maps</a>
                            </iframe>

                    </div>
                </div>
            </section>

        </>
    );
}

export default TripLook;


