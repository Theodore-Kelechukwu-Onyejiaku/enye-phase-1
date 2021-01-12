import React from "react";

function Filter({ filter, clearFilter }) {

    return (
        <React.Fragment>
            <div className="z-depth-2">
                <p className="center-align">
                    <button className="btn btn" onClick={() => { filter("FirstName") }}>First Name</button>
                    <button className="btn btn" onClick={() => { filter("LastName") }}>Last Name</button>
                    <button className="btn btn" onClick={() => { filter("Gender") }}>Gender</button>
                    <button className="btn btn" onClick={() => { filter("Latitude") }}>Latitude</button>
                    <button className="btn btn" onClick={() => { filter("Longitude") }}>Longitude</button>
                    <button className="btn btn" onClick={() => { filter("CreditCardNumber") }}>Credit Card Number</button>
                    <button className="btn btn" onClick={() => { filter("CreditCardType") }}>Credit Card Type</button>
                    <button className="btn btn" onClick={() => { filter("Email") }}>Email</button>
                    <button className="btn btn" onClick={() => { filter("DomainName") }}>Domain Name</button>
                    <button className="btn btn" onClick={() => { filter("MacAddress") }}>Mac Address</button>
                    <button className="btn btn" onClick={() => { filter("URL") }}>URL</button>
                    <button className="btn btn" onClick={() => { filter("UserName") }}>User Name</button>
                    <button className="btn btn" onClick={() => { filter("LastLogin") }}>Last Login</button>
                    <button className="btn btn" onClick={() => { filter("PaymentMethod") }}>Payment Method</button>

                </p>
            </div>
            <div className="container center-align" >
                <button className="btn btn red" onClick={() => { clearFilter() }}>Clear Filter</button>

            </div>
            </React.Fragment>
    )
}

export default Filter;