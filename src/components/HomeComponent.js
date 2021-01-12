import React, { useEffect, useState } from "react";
import Header from "./HeaderComponent";
import Loader from "./LoaderComponent";
import Profile from "./ProfileComponent";
import { SEARCH } from "./searchFunction";
import Footer from "./FooterComponent";
import Pagination from "./PaginationComponent";

function Home({error, records, isLoading}){
    const [isFiltered, setIsFiltered] = useState(false);
    const [filterBy, setFilterBy] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setpostsPerPage] = useState(20);

    const filter =(filterType)=>{
        setIsFiltered(true);
        setFilterBy(filterType);
        
    }

    const clearFilter = ()=>{
        setIsFiltered(false);
    }
    const onSearch = (e)=>{
        SEARCH(e);
    }
    
     //Get Current Posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = records.slice(indexOfFirstPost, indexOfLastPost);

    //Change Page
    const paginate = pageNumber => setCurrentPage(pageNumber)

    if(!isLoading){
        return(
            <React.Fragment>
                <Header/>
                <div className="container">
                    <div className="row">
                        
                        <div className="col s12 m12 l12">
                            <div className="row">
                                <div className="col s12 m12 l12">
                                    <nav>
                                        <div className="nav-wrapper">
                                            <form>
                                                <div className="input-field">
                                                    <input id="search" className="search" type="search" required placeholder="Search records" onChange={(e)=>onSearch(e)}/>
                                                    <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
                                                    <i className="material-icons">close</i>
                                                </div>
                                            </form>
                                            
                                        </div>
                                    </nav>
                                    <div className="col s12 m12 l12 ">
                                        <div className="z-depth-2">
                                            <p className="center-align red-text" style={{fontSize: "200%"}}>Filter By: <i className="fa fa-filter"></i></p>
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
                                <Pagination postsPerPage={postsPerPage} totalPosts={records.length} paginate={paginate}/>

                                <Profile error={error} records={currentPosts} isFiltered={isFiltered} filterBy={filterBy}/>
                            </div>
                        </div>
                    </div>
                    <Pagination postsPerPage={postsPerPage} totalPosts={records.length} paginate={paginate}/>
            </div>
            <Footer/>
            </React.Fragment>
            
        )
    }else{
        return(
            <Loader />
        )
    } 
}

export default Home;