import React from 'react';

function SmallShowTrip({trip, i}) {

    function TripType({tripType}) {
        switch (tripType) {
            case "recreation":
                return <img src="../../warehouse/images/ico/tree-solid.svg" className="ico_smallShowTrip smallTrip_trip" alt="recreation"/>;
            case "sightseeing":
                return <img src="../../warehouse/images/ico/mountain-sun-solid.svg" className="ico_smallShowTrip smallTrip_trip" alt="sightseeing"/>;
            case "extreme":
                return <img src="../../warehouse/images/ico/flag-regular.svg" className="ico_smallShowTrip smallTrip_trip" alt="extreme"/>;
            default:
                return <p>X</p>
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
    if (!trip.tripPublic) return;
    return (
        <div key={trip.tripKey} className="box-content ">


            <img src="../../warehouse/images/trips/bmw_bieszczady_trip.jpg" className="smallBox_image" title="click for more"/>
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
                </section>
                <TripLikes/>
            </div>

            {/*<button className="button__zobacz"></button>*/}
            {/*<button className="button__like"></button>*/}

        </div>
    );
}

export default SmallShowTrip;

