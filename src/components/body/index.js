import React from 'react'
import calendar from "../../assets/Calendar.png"
import clock from "../../assets/Clock.png"
import marker from "../../assets/Marker.png"
import brushes from "../../assets/Brushes.png"
import hand from "../../assets/Hand.svg"
import shop from "../../assets/Shop.png"
import ticket from "../../assets/Ticket.png"
import check from "../../assets/Check.png"

export default function index() {
  return (
    <div className="h-100 pt-5 w-50 mx-auto" style={{ flex: 1 }}>
      <h3 className="text-secondary">You're almost there!</h3>
      <hr />
      <div >
        <h4 >Bobbi Brown starts (40)</h4>
        <div className="d-flex justify-content-between">
          <ul className="mr-5 pl-0">
            <p><img src={calendar} className="mr-2" /> <span>Fri, Feb 22 <img src={clock} className="mx-2" />13:00 PM</span></p>
            <p><img src={marker} className="mr-2" /> <span>Saks Fifth Avenue・754 5th Avenue, New York</span></p>
            <p><img src={brushes} className="mr-2" /> <span>1 Product purchase required</span></p>
            <p><img src={hand} className="mr-2" /> <span>Makeup</span></p>
          </ul>
          <img src={shop} />
        </div>
      </div>
      <hr />
      <h6 className="my-5"><a href="#">Sign in</a> or <a href="#">Sign up</a> to collect rewards and complete this reservation</h6>
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
            {/* <input type="text" className="form-control w-50" placeholder="ilovemonique"></input> */}
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
    </div>
  )
}
