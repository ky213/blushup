import React from 'react'
import ProductInfo from './ProductInfo'
import BookingForm from './BookingForm'



export default function index() {
  return (
    <div className="h-100 pt-5 w-50 mx-auto" style={{ flex: 1 }}>
      <h3 className="text-secondary">You're almost there!</h3>
      <hr />
      <ProductInfo />
      <hr />
      <h6 className="my-5"><a href="#">Sign in</a> or <a href="#">Sign up</a> to collect rewards and complete this reservation</h6>
      <BookingForm />

    </div>
  )
}
