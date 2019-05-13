import React from 'react'

export default function index() {
    return (
        <div className="d-flex px-4 pt-4 pb-1" style={{ boxShadow: "0px 4px 4px rgba(180, 180, 180, 0.15)" }}>
            <h1>BLUSHUP</h1>
            <ul className="d-flex justify-content-around align-items-center ml-auto  w-25">
                <h5 className="mr-2">For Retailers</h5>
                <h5 className="mr-2">Log in</h5>
                <h5 className="btn btn-danger">Sign up</h5>
            </ul>
        </div>
    )
}
