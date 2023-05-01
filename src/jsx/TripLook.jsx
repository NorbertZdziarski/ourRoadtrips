import React from 'react';

function TripLook({trip}) {
console.log('trip --------------------------------')
    console.log(trip)
    // userName, userTrip
    return (
        <>
            <section className="triplook_header">
                <p>{trip.tripName}</p>
                <div className="triplook_rate"></div>
            </section>
            <section className="triplook_main fnt_userpanel">
                <div className="triplook_column-left">
                    <div className="triplook_description">
                        <p>{trip.tripDescription}</p>
                    </div>
                    <div className="triplook_details">
                        <p>country: {trip.tripCountry}</p>
                        <p>car: {trip.tripCar.carBrand} {trip.tripCar.carName}</p>
                    </div>
                </div>
                <div className="triplook_column-right">
                    <div className="triplook_img">img</div>
                    <div className="triplook_map">map</div>
                </div>
            </section>

        </>
    );
}

export default TripLook;