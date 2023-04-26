import React from 'react';

function SmallShowTrip({trip, i}) {
    return (
        <div key={i} className="box-content ">
            <p className="fnt_extra">{trip.tripName}</p>
            <p className="fnt">{trip.tripCountry}</p>
            <button className="button__zobacz"></button>
            <button className="button__like"></button>
        </div>
    );
}

export default SmallShowTrip;