import React from 'react'
import reviewStars from "../../assets/ReviewStars.svg"
import calendar from "../../assets/Calendar.png"
import clock from "../../assets/Clock.png"
import marker from "../../assets/Marker.png"
import brushes from "../../assets/Brushes.png"
import hand from "../../assets/Hand.svg"
import shop from "../../assets/Shop.png"

export default function ProductInfo() {
    return (
        <div >
            <h4>Bobbi Brown <img src={reviewStars} /> <span className="text-muted" style={{ fontSize: "12px" }}>(40)</span> </h4>
            <div className="d-flex justify-content-between">
                <ul className="mr-5 pl-0">
                    <p><img src={calendar} className="mr-2" /> <span>Fri, Feb 22 <img src={clock} className="mx-2" />13:00 PM</span></p>
                    <p><img src={marker} className="mr-2" /> <span>Saks Fifth Avenue・754 5th Avenue, New York</span></p>
                    <p><img src={brushes} className="mr-2" /> <span>1 Product purchase required</span></p>
                    <p><img src={hand} className="mr-2" /> <span>Makeup</span></p>
                </ul>
                <img src={shop} className="mr-5 pr-5" />
            </div>
        </div>

    )
}
