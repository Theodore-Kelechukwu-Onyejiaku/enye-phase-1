import React, { useState } from "react";
import {Stagger, Fade} from "react-animation-components";
import ReactPaginate from "react-paginate";


function Profile({error, localRecords, records, isFiltered, filterBy}){
    const [data, setData] = useState(localRecords);
    const [offset, setOffset] = useState(0);
    // if(error){
    //     return(
    //         <div>{error}</div>
    //     )
    // }

    // else{
        if(isFiltered){
            return (
                <div>
                    <Stagger in>
                        {localRecords.map((item) => {
                            return(
                                
                                <Fade in>
                                    

                                                <div className="col s12 m6 l6">
                                                        <div className="card-panel">
                                                            <span>{item.FirstName}{" "}{item.LastName}</span><br/>
                                                            <span className="red-text">{filterBy}:</span>{" "}<span className="blue-text">{item[filterBy]}</span>
                                                        </div> 
                                                </div>
                                            
                                </Fade>
                                
                            )
                        })}
                    </Stagger>
                </div>
            )
        }else{
            return (
                <div>
                <Stagger in>
                    {localRecords.map((item) =>{
                        return(
                            <Fade in>
                                    <div className="col s12 m6 l6">
                                    <div class="card-panel">
                                        <ul>
                                            <li>FirstName:<span className="blue-text">{item.FirstName}</span></li>    
                                            <li>Lastname:<span className="blue-text">{item.LastName}</span></li>    
                                            <li>Gender:<span className="blue-text">{item.Gender}</span></li>    
                                            <li>Latitude:<span className="blue-text">{item.Latitude}</span></li> 
                                            <li>Longitude:<span className="blue-text">{item.Longitude}</span></li>    
                                            <li>Credit Card Number:<span className="blue-text">{item.CreditCardNumber}</span></li>    
                                            <li>Credit Card Type:<span className="blue-text">{item.CreditCardType}</span></li>    
                                            <li>Email:<span className="blue-text">{item.Email}</span></li> 
                                            <li>Domain Name:<span className="blue-text">{item.DomainName}</span></li>    
                                            <li>Phone Number:<span className="blue-text">{item.PhoneNumber}</span></li>    
                                            <li>Mac Address:<span className="blue-text">{item.MacAddress}</span></li>    
                                            <li>URL: <span className="blue-text">{item.URL}</span></li> 
                                            <li>Username:<span className="blue-text">{item.UserName}</span></li>    
                                            <li>Last Login:<span className="blue-text">{item.LastLogin}</span></li>    
                                            <li>PaymentMethod:<span className="blue-text">{item.PaymentMethod}</span></li> 
                                        </ul>
                                    </div>
                                        <div className="item" style={{display:"none"}}>{JSON.stringify(item)}</div>                            
                                       
                                    </div>
                                
                            </Fade>
                        )
                        
                    })}
                </Stagger>
                <ReactPaginate
                    previousLabel={'previous'}
                nextLabel={'next'}
                breakLabel={'...'}
                breakClassName={'break-me'}
                pageCount={4}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={offset}
                containerClassName={'pagination'}
                subContainerClassName={'pages pagination'}
                activeClassName={'active'}
            />
                </div>
            )
        }
               
    // }
}

export default Profile;