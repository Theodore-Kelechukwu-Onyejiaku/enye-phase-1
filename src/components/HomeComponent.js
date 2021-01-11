import React, { useEffect, useState } from "react";
import Loader from "./LoaderComponent";
import Profile from "./ProfileComponent";
import { SEARCH } from "./searchFunction";

function Home({error, localRecords, records}){
    const [loading, setLoading ] = useState(false);
    const [isFiltered, setIsFiltered] = useState(false);
    const [filterBy, setFilterBy] = useState("");

    const filter =(filterType)=>{
        setIsFiltered(true);
        setFilterBy(filterType);
        
    }

    const clearFilter = ()=>{
        setIsFiltered(false);
    }
    

    useEffect(async ()=> {
        setTimeout(()=>{
            setLoading(true)
        }, 2000)

    //eslint-disable-next-line
    }, [])

    const onSearch = (e)=>{
        SEARCH(e);
    }
    
    if(loading){
        return(
                <div className="container">
                    <div className="row">
                        
                        <div className="col s12 m12 l12">
                            <div className="row">
                                <div className="col s12 m12 l12">
                                    <nav>
                                        <div className="nav-wrapper">
                                            <form>
                                                <div className="input-field">
                                                    <input id="search" className="search" type="search" required placeholder="Search records by firstname, username..." onChange={(e)=>onSearch(e)}/>
                                                    <label className="label-icon" for="search"><i className="material-icons">search</i></label>
                                                    <i className="material-icons">close</i>
                                                </div>
                                            </form>
                                            
                                        </div>
                                    </nav>
                                    <div className="col s12 m12 l12 ">
                                        <div className="z-depth-2">
                                            <p className="center-align">Filter By: <i className="fa fa-filter"></i></p>
                                            <p className="center-align">
                                            <button className="btn btn" onClick={()=>{filter("FirstName")}}>First Name</button>
                                            <button className="btn btn" onClick={()=>{filter("LastName")}}>Last Name</button>
                                            <button className="btn btn" onClick={()=>{filter("Gender")}}>Gender</button>
                                            <button className="btn btn" onClick={()=>{filter("Latitude")}}>Latitude</button>
                                            <button className="btn btn" onClick={()=>{filter("Longitude")}}>Longitude</button>
                                            <button className="btn btn" onClick={()=>{filter("CreditCardNumber")}}>Credit Card Number</button>
                                            <button className="btn btn" onClick={()=>{filter("CreditCardType")}}>Credit Card Type</button>
                                            <button className="btn btn" onClick={()=>{filter("Email")}}>Email</button>
                                            <button className="btn btn" onClick={()=>{filter("DomainName")}}>Domain Name</button>
                                            <button className="btn btn" onClick={()=>{filter("MacAddress")}}>Mac Address</button>
                                            <button className="btn btn" onClick={()=>{filter("URL")}}>URL</button>
                                            <button className="btn btn" onClick={()=>{filter("UserName")}}>User Name</button>
                                            <button className="btn btn" onClick={()=>{filter("LastLogin")}}>Last Login</button>
                                            <button className="btn btn" onClick={()=>{filter("PaymentMethod")}}>Payment Method</button>

                                            </p>
                                            

                                            
                                        </div>
                                    </div>
                                </div> 
                                <div className="container center-align" >
                                    <button className="btn btn red" onClick={()=>{clearFilter()}}>Clear Filter</button>
                                </div>
                                <Profile error={error} localRecords={localRecords} records isFiltered={isFiltered} filterBy={filterBy}/>
                            </div>
                        </div>
                    </div>
                    
            </div>
            
        )
    }else{
        return(
            <Loader />
        )
    } 
}

export default Home;