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
        setFilterBy(filterBy);
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
                        <div className="col s12 m8 l8 hide-on-med-and-down">
                            <div className="row">
                                <div className="col s12 m12 l12">
                                    <nav>
                                        <div className="nav-wrapper">
                                            <form>
                                                <div className="input-field">
                                                    <input id="search" className="search" type="search" required placeholder="Search records" onChange={(e)=>onSearch(e)}/>
                                                    <label className="label-icon" for="search"><i className="material-icons">search</i></label>
                                                    <i className="material-icons">close</i>
                                                </div>
                                            </form>

                                        </div>
                                    </nav>
                                </div> 
                                

                                <Profile error={error} localRecords={localRecords} records isFiltered={isFiltered}/>
                            </div>
                        </div>
                        <div className="col s12 m12 l12 show-on-med-and-down hide-on-large-only">
                            <div className="row">
                                <div className="col s12 m12 l12">
                                    <nav>
                                        <div className="nav-wrapper">
                                            <form>
                                                <div className="input-field">
                                                    <input id="search" className="search" type="search" required placeholder="Search records" onChange={(e)=>onSearch(e)}/>
                                                    <label className="label-icon" for="search"><i className="material-icons">search</i></label>
                                                    <i className="material-icons">close</i>
                                                </div>
                                            </form>
                                            
                                        </div>
                                    </nav>
                                    <div className="col s12 m12 l12 ">
                                        
                                        <i className="fas fa-3x fa-sliders-h">Filter</i>
                                        <div>
                                            <button className="btn btn" onClick={()=>{filter("FirstName")}}>First Name</button>
                                            <button className="btn btn" onClick={()=>{clearFilter()}}>Clear Filter</button>
                                        </div>
                                    </div>
                                </div> 
                                

                                <Profile error={error} localRecords={localRecords} records/>
                            </div>
                        </div>
                        <div className="col s12 m4 l4  hide-on-med-and-down">
                            <i className="fas fa-3x fa-sliders-h">Filter</i>
                            <div>
                            <button className="btn btn" onClick={()=>{filter("FirstName")}}>First Name</button>
                            <button className="btn btn" onClick={()=>{clearFilter()}}>Clear Filter</button>
                            </div>
                        </div>
                    </div>
                       
                    <div className="row">
                        
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