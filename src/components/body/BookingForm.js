import React from 'react'
import ticket from "../../assets/Ticket.png"
import check from "../../assets/Check.png"

export default function BookingForm() {
    return (

        <form>
            <div className="form-row  mb-3">
                <div className="col">
                    <input type="text" className="form-control" placeholder="First name"></input>
                </div>
                <div className="col">
                    <input type="text" className="form-control" placeholder="Last name"></input>
                </div>
            </div>
            <div className="form-row  mb-3">
                <div className="col">
                    <input type="email" className="form-control" placeholder="Email"></input>
                </div>
                <div className="col">
                    <input type="text" className="form-control" placeholder="Phone number (Optional)"></input>
                </div>
            </div>
            <div className="form-row mb-3">
                <div className="col">
                    <select className="custom-select">
                        <option selected>Select an occasion</option>
                    </select>
                </div>
                <div className="col">
                    <input type="text" className="form-control" placeholder="Any special request (Optional)"></input>
                </div>
            </div>
            <div className="form-row">
                <div className="col">
                    <div className="input-group flex-nowrap w-50">
                        <div className="input-group-prepend">
                            <img src={ticket} className="border-right-0 input-group-text bg-white" />
                        </div>
                        <input type="text" className="form-control border-left-0" placeholder="ilovemonique"></input>
                    </div>
                </div>
            </div>
            <p className="my-4"> <img src={check} className="mr-2" /> Congratulations! You get double blush point! </p>
            <button type="submit" className="btn btn-lg btn-primary">Complete Booking</button>
            <p className="mt-2 text-muted">By clicking “Complete Booking” you agree to the Blushup Terms of Use and Privacy Policy.</p>
        </form>
    )
}
