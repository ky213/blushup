import React from 'react'
import im from "../../assets/ticket.png"

export default function index() {
  return (
    <div className="h-100" style={{ flex: 1 }}>
      <h3>You're almost there!</h3>
      <div>
        <h4>Bobbi Brown starts (40)</h4>
        <ul>
          <p><img src={im} className="mr-2"/> <span>Fri, Feb 22</span></p><p><img />13:00 PM</p>
          <p><img /> <span>Saks Fifth Avenue・754 5th Avenue, New York</span></p>
          <p><img /> <span>1 Product purchase required</span></p>
          <p><img /> <span>Makeup</span></p>
        </ul>
      </div>
    </div>
  )
}
