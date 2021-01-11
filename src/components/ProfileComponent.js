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
                                    <div>{item[filterBy]} hello</div> 
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
                                        
                                    <div className="card small">
                                        <div className="card-image waves-effect waves-block waves-light">
                                            <i className="small material-icons">account_circle</i>
                                        </div>
                                        <div className="item" style={{display:"none"}}>{JSON.stringify(item)}</div>
                                        <div className="card-content">
                                        <span className="card-title activator grey-text text-darken-4">{item.FirstName}{" "}{item.LastName}<i className="material-icons right">more_vert</i></span>
                                        
                                            <div className="row">
                                                <div className="col s2 m2 l2">
                                                    <ul>
                                                        <li><i className="fa fa-envelope"></i></li>
                                                        <li><i className="fa fa-phone"></i></li>
                                                        
                                                    </ul>
                                                </div>
                                                <div className="col s10 m10 l10">
                                                    <ul>
                                                        <li>{item.Email}</li>
                                                        <li>{item.PhoneNumber}</li>
                                                    </ul>
                                                </div>
    
                                            </div>
                                    
                                        
                                        
                                        </div>
                                        <div className="card-reveal">
                                        <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
                                        <p>Here is some more information about this product that is only revealed once clicked on.</p>
                                        </div>
                                    </div>
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