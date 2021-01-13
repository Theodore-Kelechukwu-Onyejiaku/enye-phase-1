import React from "react";

function Filter({ filter, clearFilter }) {

    return (
        <React.Fragment>
            <div className="">

                <div className="row">
                    <div className="input-field col s12 m3"></div>
                    <div className="input-field col s12 m6">
                        <select onChange={(e) => filter(e.target.value)}>
                            <option value="" disabled>Filter By:</option>
                            <option value="FirstName">First Name</option>
                            <option value="LastName">Last Name</option>
                            <option value="Gender">Gender</option>
                            <option value="Latitude">Latitude</option>
                            <option value="Longitude">Longitude</option>
                            <option value="CreditCardNumber">CreditCardNumber</option>
                            <option value="CreditCardType">CreditCardType</option>
                            <option value="Email">Email</option>
                            <option value="DomainName">DomainName</option>
                            <option value="MacAddress">MacAddress</option>
                            <option value="URL">URL</option>
                            <option value="UserName">UserName</option>
                            <option value="LastLogin">LastLogin</option>
                            <option value="PaymentMethod">PaymentMethod</option>

                        </select>

                    </div>
                    <div className="input-field col s12 m3"></div>
                </div>

            </div>
            <div className="container center-align" >
                <button className="btn btn red" onClick={() => { clearFilter() }}>Clear Filter</button>
            </div>

        </React.Fragment>
    )
}

export default Filter;