import React from 'react'
import twitter from '../../assets/twitter.png'
import facebook from '../../assets/facebook.png'
import instagram from '../../assets/instagram.png'
import linkedin from '../../assets/linkedin.png'

export default function index() {
  return (
    <div className="row justify-content-center py-5 mt-5 w-75 m-auto">
      <div className="col">
        <div className="m-auto text-left w-75">
          <h2 className="mb-4">Company</h2>
          <h4 ><a href="#" className="text-secondary">Blog</a></h4>
          <h4 ><a href="#" className="text-secondary">About Us</a></h4>
          <h4 ><a href="#" className="text-secondary">Contact Us</a></h4>
          <h4 ><a href="#" className="text-secondary">Privacy Policy</a></h4>
          <h4 ><a href="#" className="text-secondary">Terms and Conditions</a></h4>
        </div>
      </div>
      <div className="col">
        <div className="m-auto text-left w-75">
          <h2 className="mb-4">Brands & retailers</h2>
          <h4 ><a href="#" className="text-secondary">Partner with Us</a></h4>
          <h4 ><a href="#" className="text-secondary">Login</a></h4>
        </div>
      </div>
      <div className="col">
        <div className="m-auto text-left w-50">
          <h2 className="mb-4">Folow Us</h2>
          <a href="#" target="_blank" className="text-secondary mr-2"><img src={twitter} style={{ height: "40px" }} /></a>
          <a href="#" target="_blank" className="text-secondary mr-2"><img src={facebook} style={{ height: "40px" }} /></a>
          <a href="#" target="_blank" className="text-secondary mr-2"><img src={instagram} style={{ height: "40px" }} /></a>
          <a href="#" target="_blank" className="text-secondary mr-2"><img src={linkedin} style={{ height: "40px" }} /></a>
        </div>
      </div>
    </div>
  )
}
