import React from 'react';

function SmallShowTrip({trip, i}) {
    if (!trip.tripPublic) return;
    return (
        <div key={trip.tripKey} className="box-content ">
            <img src="../../warehouse/images/trips/bmw_bieszczady_trip.jpg" className="smallBox_image"/>
            <p className="fnt_extra smallBox_title">{trip.tripName}</p>
            <p className="fnt smallBox_txt">{trip.tripCountry}</p>
            {/*<button className="button__zobacz"></button>*/}
            {/*<button className="button__like"></button>*/}
        </div>
    );
}

export default SmallShowTrip;

